import express, { Request, Response } from "express";
import morgan from "morgan";
import nftRoutes from "./routes/nft";
import userRoutes from "./routes/user"
import authRoutes from "./routes/auth"
import orderRoutes from "./routes/order"
import leaderboardRoutes from "./routes/leaderboard"

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(`Welcome to EcoNFT Backend Server!\nYou are ${req.headers["user-agent"]}`);
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/nft", nftRoutes);
app.use("/order", orderRoutes);
app.use("/leaderboard", leaderboardRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});