export const ECO_NFT_ABI = [
  "function mintNFT(address to, string memory plantName, string memory scientificName, string memory imageUrl, string memory uuid, int256 latitude, int256 longitude) public",
  "function getTreeDetails(uint256 tokenId) public view returns (tuple(string plantName, string scientificName, string imageUrl, string uuid, int256 latitude, int256 longitude))",
  "function getAllNFTsByOwner(address owner) public view returns (tuple(string plantName, string scientificName, string imageUrl, string uuid, int256 latitude, int256 longitude)[])"
];
