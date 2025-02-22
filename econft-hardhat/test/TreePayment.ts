import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";

describe("TreePayment", function () {
  async function deployTreePaymentFixture() {
    const [owner, user1, user2] = await ethers.getSigners();

    // Deploy the contract
    const TreePayment = await ethers.getContractFactory("TreePayment");
    const treePayment = await TreePayment.deploy();

    return { treePayment, owner, user1, user2 };
  }

  describe("Deployment", function () {
    it("Should set the correct contract owner", async function () {
      const { treePayment, owner } = await loadFixture(deployTreePaymentFixture);
      expect(await treePayment.owner()).to.equal(owner.address);
    });
  });

  describe("Payments", function () {
    it("Should allow users to buy a tree with ETH", async function () {
      const { treePayment, user1 } = await loadFixture(deployTreePaymentFixture);

      const treeId = "tree-123";
      const paymentAmount = ethers.parseEther("0.1");

      await expect(treePayment.connect(user1).buyTree(treeId, { value: paymentAmount }))
        .to.emit(treePayment, "PaymentReceived")
        .withArgs(user1.address, paymentAmount, treeId, anyValue); // `anyValue` allows any timestamp
    });

    it("Should reject payments with zero ETH", async function () {
      const { treePayment, user1 } = await loadFixture(deployTreePaymentFixture);

      const treeId = "tree-456";

      await expect(
        treePayment.connect(user1).buyTree(treeId, { value: 0 })
      ).to.be.revertedWith("Insufficient payment");
    });

    it("Should store multiple payments correctly", async function () {
      const { treePayment, user1, user2 } = await loadFixture(deployTreePaymentFixture);

      const treeId1 = "tree-789";
      const treeId2 = "tree-101";
      const payment1 = ethers.parseEther("0.05");
      const payment2 = ethers.parseEther("0.2");

      await treePayment.connect(user1).buyTree(treeId1, { value: payment1 });
      await treePayment.connect(user2).buyTree(treeId2, { value: payment2 });

      const balance = await ethers.provider.getBalance(treePayment.target);
      expect(balance).to.equal(payment1 + payment2);
    });
  });
});
