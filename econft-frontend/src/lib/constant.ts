import dotenv from "dotenv";

dotenv.config();

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/";
export const PAYMENT_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_PAYMENT_CONTRACT_ADDRESS || "0x0000000";