// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EcoNFT is ERC721URIStorage, Ownable {
    struct TreeMetadata {
        string plantName;
        string scientificName;
        string imageUrl;
        string uuid;
        int256 latitude;
        int256 longitude;
    }

    mapping(uint256 => TreeMetadata) public treeDetails;
    uint256 private _tokenIdCounter;

    constructor(
        address initialOwner
    ) ERC721("EcoNFT", "ECONFT") Ownable(initialOwner) {}

    function mintNFT(
        address to,
        string memory plantName,
        string memory scientificName,
        string memory imageUrl,
        string memory uuid,
        int256 latitude,
        int256 longitude
    ) public onlyOwner {
        uint256 tokenId = _tokenIdCounter;
        _safeMint(to, tokenId);

        treeDetails[tokenId] = TreeMetadata(
            plantName,
            scientificName,
            imageUrl,
            uuid,
            latitude,
            longitude
        );

        _tokenIdCounter++;
    }

    function getTreeDetails(
        uint256 tokenId
    ) public view returns (TreeMetadata memory) {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        return treeDetails[tokenId];
    }
}
