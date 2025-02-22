import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
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

  const token = jwt.sign({ address }, SECRET_KEY, { expiresIn: "1h" });
  delete nonces[address]; // Remove used nonce
  res.json({ token });
});

export default router;
