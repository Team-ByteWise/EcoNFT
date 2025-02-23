import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const EcoNFT = await ethers.getContractFactory("EcoNFT");
  const ecoNFT = await EcoNFT.deploy(deployer.address);
  await ecoNFT.waitForDeployment();

  console.log(`EcoNFT deployed to: ${await ecoNFT.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});