import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET || "supersecret";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) { 
        res.status(401).json({ error: "Unauthorized" }); 
        return;
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.body.user = decoded; // Attach user info
        return next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
}
