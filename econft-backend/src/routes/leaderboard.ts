import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

// GET /leaderboard - Fetch top users
router.get("/", async (req, res) => {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
    const leaderboard = await prisma.user.findMany({
      orderBy: { transactions: { _count: "desc" } },
      take: limit,
      select: {
        wallet: true,
        username: true,
        _count: { select: { transactions: true } },
      },
    });

    res.json({ success: true, leaderboard });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.toString() });
  }
});

export default router;
