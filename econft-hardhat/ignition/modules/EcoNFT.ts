// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EcoNFTModule = buildModule("EcoNFTModule", (m) => {
  const ecoNFT = m.contract("EcoNFT", [m.getAccount(0)]);
  return { ecoNFT };
});

export default EcoNFTModule;
