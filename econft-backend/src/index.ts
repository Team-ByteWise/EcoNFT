import express, { Request, Response } from "express";
import morgan from "morgan";
import nftRoutes from "./routes/nft";
import authRoutes from "./routes/auth"
import orderRoutes from "./routes/order"
import leaderboardRoutes from "./routes/leaderboard"
import treeRoutes from "./routes/trees";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

app.use(cors(
  {
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true
  }
));

app.use(express.json());

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