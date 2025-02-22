import express, { Request, Response } from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send(`Welcome to EcoNFT Backend Server!\nYou are ${req.headers["user-agent"]}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});