import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const TreePayment = await ethers.getContractFactory("TreePayment");
  const treePayment = await TreePayment.deploy();
  await treePayment.waitForDeployment();

  console.log(`TreePayment deployed to: ${await treePayment.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});