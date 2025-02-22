import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("EcoNFT", function () {
  async function deployEcoNFTFixture() {
    // Get signers
    const [owner, user1, user2] = await hre.ethers.getSigners();

    // Deploy EcoNFT contract
    const EcoNFT = await hre.ethers.getContractFactory("EcoNFT");
    const ecoNFT = await EcoNFT.deploy(owner.address); // Pass owner to constructor

    return { ecoNFT, owner, user1, user2 };
  }

  describe("Deployment", function () {
    it("Should set the correct owner", async function () {
      const { ecoNFT, owner } = await loadFixture(deployEcoNFTFixture);
      expect(await ecoNFT.owner()).to.equal(owner.address);
    });
  });

  describe("Minting NFTs", function () {
    it("Should allow owner to mint an NFT", async function () {
      const { ecoNFT, owner, user1 } = await loadFixture(deployEcoNFTFixture);

      const mintTx = await ecoNFT.mintNFT(
        user1.address,
        "Mango Tree",
        "Mangifera indica",
        "ipfs://Qm123",
        "uuid-001",
        12.3456 * 1e6,
        98.7654 * 1e6
      );
      await mintTx.wait();

      expect(await ecoNFT.ownerOf(0)).to.equal(user1.address);
    });

    it("Should store the correct tree metadata", async function () {
      const { ecoNFT, owner, user1 } = await loadFixture(deployEcoNFTFixture);

      const mintTx = await ecoNFT.mintNFT(
        user1.address,
        "Mango Tree",
        "Mangifera indica",
        "ipfs://Qm123",
        "uuid-001",
        12.3456 * 1e6,
        98.7654 * 1e6
      );
      await mintTx.wait();

      const treeDetails = await ecoNFT.getTreeDetails(0);
      expect(treeDetails.plantName).to.equal("Mango Tree");
      expect(treeDetails.scientificName).to.equal("Mangifera indica");
      expect(treeDetails.imageUrl).to.equal("ipfs://Qm123");
      expect(treeDetails.uuid).to.equal("uuid-001");
    });

    it("Should revert if a non-owner tries to mint", async function () {
      const { ecoNFT, user1 } = await loadFixture(deployEcoNFTFixture);

      await expect(
        ecoNFT.connect(user1).mintNFT(
          user1.address,
          "Mango Tree",
          "Mangifera indica",
          "ipfs://Qm123",
          "uuid-001",
          12.3456 * 1e6,
          98.7654 * 1e6
        )
      ).to.be.reverted;
    });
  });

  describe("Retrieving Data", function () {
    it("Should allow retrieving tree details", async function () {
      const { ecoNFT, owner, user1 } = await loadFixture(deployEcoNFTFixture);

      await ecoNFT.mintNFT(
        user1.address,
        "Banyan Tree",
        "Ficus benghalensis",
        "ipfs://QmXYZ",
        "uuid-002",
        25.1234 * 1e6,
        77.5678 * 1e6
      );

      const treeDetails = await ecoNFT.getTreeDetails(0);
      expect(treeDetails.plantName).to.equal("Banyan Tree");
      expect(treeDetails.scientificName).to.equal("Ficus benghalensis");
    });

    it("Should revert if querying a non-existent token", async function () {
      const { ecoNFT } = await loadFixture(deployEcoNFTFixture);

      await expect(ecoNFT.getTreeDetails(99)).to.be.revertedWith(
        "Token does not exist"
      );
    });
  });
});
