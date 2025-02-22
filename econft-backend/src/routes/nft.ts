import express from "express";
import { ecoNFTContract } from "../config/blockchain";
import { authenticate } from "../middlewares/auth";

const router = express.Router();

declare global {
  interface BigInt {
      toJSON(): Number;
  }
}

BigInt.prototype.toJSON = function () { return Number(this) }

router.post("/mint", authenticate, async (req, res) => {
  try {
    const { to, plantName, scientificName, imageUrl, uuid, latitude, longitude } = req.body;

    const tx = await ecoNFTContract.mintNFT(to, plantName, scientificName, imageUrl, uuid, latitude, longitude);
    await tx.wait();

    res.json({ success: true, txHash: tx.hash });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.toString() });
  }
});

router.get("/my-nfts", authenticate, async (req, res) => {
  try {
    const { wallet } = req.body.user;
    const nfts = await ecoNFTContract.getAllNFTsByOwner(wallet);
    console.log(nfts);
    res.json({ success: true, nfts });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.toString() });
  }
});

export default router;
