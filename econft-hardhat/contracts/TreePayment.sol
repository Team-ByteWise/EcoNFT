// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract TreePayment {
    address public owner;

    event PaymentReceived(address indexed user, uint256 amount, string treeId, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    function buyTree(string memory treeId) public payable {
        require(msg.value > 0, "Insufficient payment");
        emit PaymentReceived(msg.sender, msg.value, treeId, block.timestamp);
    }
}
