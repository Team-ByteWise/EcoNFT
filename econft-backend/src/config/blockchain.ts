import { ethers } from "ethers";
import dotenv from "dotenv";
import { ECO_NFT_ABI } from "./abi";

dotenv.config();

const RPC_URL = process.env.RPC_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS as string;

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const ecoNFTContract = new ethers.Contract(CONTRACT_ADDRESS, ECO_NFT_ABI, wallet);

export { provider, wallet, ecoNFTContract };
