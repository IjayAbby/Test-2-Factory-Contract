// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./messageContract.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract MessageContractFactory {
    address[] public contracts;

    function createMessageContract(string memory initialMessage) public {
        MessageContract mc = new MessageContract(initialMessage);
        contracts.push(address(mc));
    }

    function getDeployedContracts() public view returns (address[] memory) {
        return contracts;
    }
}