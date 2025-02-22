import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ethers } from "ethers";
import { authenticate } from "../middlewares/auth";

const router = express.Router();
const prisma = new PrismaClient();
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

router.post("/", authenticate, async (req: Request, res: Response) => {
  const { treeId, quantity, txHash } = req.body;

  res.json({ success: true, message: "Payment verified", transactionHash: txHash });

  const tree = await prisma.tree.findUnique({ where: { id: treeId } });
  if (!tree) {
    res.status(404).json({ message: "Tree not found" });
    return;
  }

  const totalPrice = tree.price * parseInt(quantity);
  const tx = await provider.getTransactionReceipt(txHash);

  if (!tx || tx.status !== 1) {
    res.status(400).json({ success: false, error: "Transaction failed or not found" });
    return;
  }

  prisma.transaction.create({
    data: {
      userId: req.body.user.id,
      amount: totalPrice,
      treeId,
      txHash: txHash,
      timestamp: new Date(),
    }
  });

  const order = await prisma.order.create({
    data: { status: "PENDING", treeId, userId: req.body.user.id, quantity, totalPrice },
  });
  res.json(order);
});

export default router;