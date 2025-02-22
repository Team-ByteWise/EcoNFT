import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ethers } from "ethers";
import { authenticate } from "../middlewares/auth";
import { ecoNFTContract } from "../config/blockchain";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
const prisma = new PrismaClient();
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

router.post("/", authenticate, async (req: Request, res: Response) => {
  const { treeId, quantity, txHash } = req.body;

  const tree = await prisma.tree.findUnique({
    select: {
      price: true,
      details: true,
      project: true
    }, where: { id: treeId }
  });
  if (!tree) {
    res.status(404).json({ message: "Tree not found" });
    return;
  }

  const totalPrice = (tree.price / 1000000) * parseInt(quantity);
  let tx = null;
  try {
    tx = await provider.getTransactionReceipt(txHash);
  } catch (e: any) {
  }
  if (!tx || tx.status !== 1) {
    res.status(400).json({ success: false, error: `Transaction failed or not found! Please Pay ${totalPrice} Tokens`});
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

  const plantName = tree.details?.commonNames;
  const scientificName = tree.details?.family;
  const imageUrl = tree.details?.imageUrl;
  const latitude = tree.project.latitude;
  const longitude = tree.project.longitude;
  const uuid = uuidv4();

  const txn = await ecoNFTContract.mintNFT(req.body.user.wallet, plantName, scientificName, imageUrl, uuid, latitude, longitude);
  await txn.wait();

  const order = await prisma.order.create({
    data: { status: "PENDING", treeId, userId: req.body.user.id, quantity, totalPrice },
  });
  res.json({ ...order, nftTxnHash: txn.txHash });
});

export default router;