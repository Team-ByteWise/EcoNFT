import express, { Request, Response } from "express";
import morgan from "morgan";
import nftRoutes from "./routes/nft";
import authRoutes from "./routes/auth"
import orderRoutes from "./routes/order"
import leaderboardRoutes from "./routes/leaderboard"
import treeRoutes from "./routes/trees";
import cors from "cors";
import { env } from "./config/env";

const app = express();
const PORT = env.port || 8000;

app.use(morgan("dev"));

// CORS Middleware
const allowedOrigins = env.isDev
  ? (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || /^(http:\/\/localhost:\d+|http:\/\/127\.0\.0\.1:\d+)$/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
  : env.cors.origin;

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get("/", (req: Request, res: Response) => {
  res.send(`Welcome to EcoNFT Backend Server!\nYou are ${req.headers["user-agent"]}`);
});

app.use("/auth", authRoutes);
app.use("/nft", nftRoutes);
app.use("/order", orderRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/data", treeRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});