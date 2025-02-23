import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    amoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/B8ILMLtZE97fSNZK2VW8V9-3J9MDVbyV",
      accounts: [process.env.PRIVATE_KEY as string],
      chainId: 80002,
    },
  },
    etherscan: {
      apiKey: process.env.POLYGONSCAN_API_KEY, // For contract verification
    },
};

export default config;
