// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;

interface IMessageFactory {
    function createMessageContract(string memory initialMessage) external;
    function getDeployedContracts() external view returns (address[] memory);

}