import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ethers } from "ethers";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { authenticate } from "../middlewares/auth";

dotenv.config();
const router = express.Router();
const prisma = new PrismaClient();

const SECRET_KEY = process.env.JWT_SECRET || "supersecret";

// Store nonces in memory (Use DB for production)
const nonces: Record<string, string> = {};

// Generate Nonce (Challenge)
router.post("/request-nonce", async (req: Request, res: Response) => {
  try {
    const { address } = req.body;
    if (!address) {
      res.status(400).json({ error: "Address required" });
      return;
    }

    const nonce = `Sign this message to login: ${Math.floor(Math.random() * 1000000)}`;
    nonces[address] = nonce;
    res.json({ nonce });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.toString() });
  }
});

// Verify Signature & Authenticate User
router.post("/verify-signature", async (req: Request, res: Response) => {
  const { address, signature } = req.body;
  const nonce = nonces[address];

  if (!nonce) {
    res.status(400).json({ error: "Nonce expired" });
    return;
  }

  const signer = ethers.verifyMessage(nonce, signature);
  if (signer.toLowerCase() !== address.toLowerCase()) {
    res.status(401).json({ error: "Invalid signature" });
    return; 
  }

  let user = await prisma.user.findUnique({ where: { wallet: address } })
  if (!user) {
    user = await prisma.user.create({ data: { wallet: address, username: address } });
  }

  const token = jwt.sign({ id: user.id, wallet: user.wallet, username: user.username }, SECRET_KEY, { expiresIn: "7d" });
  delete nonces[address]; // Remove used nonce
  res.json({ token });
});

router.get("/verify", authenticate, async (req: Request, res: Response) => {
  try {
    const { id, wallet, username } = req.body.user;
    res.json({ id, wallet, username });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
})

export default router;
