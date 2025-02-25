import { ethers } from "ethers";
import { ECO_NFT_ABI } from "./abi";
import { env } from "./env";

const provider = new ethers.JsonRpcProvider(env.blockchain.rpcUrl);
const wallet = new ethers.Wallet(env.blockchain.privateKey, provider);
const ecoNFTContract = new ethers.Contract(env.blockchain.contractAddress, ECO_NFT_ABI, wallet);

export { provider, wallet, ecoNFTContract };
