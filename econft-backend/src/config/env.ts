import { z } from "zod";
import dotenv from "dotenv";
import type { StringValue } from "ms";

// Load environment variables from .env file
dotenv.config();

// Define environment variables schema
const envSchema = z.object({
  // Server Configuration
  PORT: z.string().default("8000"),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  // Database Configuration
  DATABASE_URL: z.string(),

  // JWT Configuration
  JWT_SECRET: z.string().min(32, "JWT secret must be at least 32 characters"),
  JWT_EXPIRES_IN: z.string().default("7d"),

  // CORS Configuration
  CORS_ORIGIN: z.string().url("Frontend URL must be a valid URL"),

  // Blockchain Configuration
  RPC_URL: z.string().url("RPC URL must be a valid URL"),
  PRIVATE_KEY: z.string(),
  CONTRACT_ADDRESS: z.string(),
});

// Parse and validate environment variables
const envParse = envSchema.safeParse(process.env);

if (!envParse.success) {
  console.error("❌ Invalid environment variables:", envParse.error.format());
  throw new Error("Invalid environment variables");
}

// Create validated environment object
export const env = {
  port: parseInt(envParse.data.PORT),
  nodeEnv: envParse.data.NODE_ENV,
  isDev: envParse.data.NODE_ENV === "development",
  isProd: envParse.data.NODE_ENV === "production",
  isTest: envParse.data.NODE_ENV === "test",
  db: {
    url: envParse.data.DATABASE_URL,
  },
  jwt: {
    secret: envParse.data.JWT_SECRET,
    expiresIn: envParse.data.JWT_EXPIRES_IN as StringValue,
  },
  cors: {
    origin: envParse.data.CORS_ORIGIN,
  },
  blockchain: {
    rpcUrl: envParse.data.RPC_URL,
    privateKey: envParse.data.PRIVATE_KEY,
    contractAddress: envParse.data.CONTRACT_ADDRESS,
  }
} as const;