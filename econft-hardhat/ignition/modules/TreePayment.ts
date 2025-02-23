import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TreePaymentModule = buildModule("TreePaymentModule", (m) => {
  const treePayment = m.contract("TreePayment", []);

  return { treePayment };
});

export default TreePaymentModule;
