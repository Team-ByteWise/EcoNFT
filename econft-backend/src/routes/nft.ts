import express from "express";
import { ecoNFTContract } from "../config/blockchain";

const router = express.Router();

router.post("/mint", async (req, res) => {
  try {
    const { to, plantName, scientificName, imageUrl, uuid, latitude, longitude } = req.body;

    const tx = await ecoNFTContract.mintNFT(to, plantName, scientificName, imageUrl, uuid, latitude, longitude);
    await tx.wait();

    res.json({ success: true, txHash: tx.hash });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.toString() });
  }
});

export default router;
