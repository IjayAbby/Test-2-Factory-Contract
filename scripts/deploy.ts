import { ethers } from "hardhat";

async function main() {
  const MessageContractFactory = await ethers.getContractFactory("MessageContractFactory");
  const factory = await MessageContractFactory.deploy();
  await factory.deployed();

  console.log("Factory deployed to:", factory.address);

  await factory.createMessageContract("Hello, world!");

  const deployedContracts = await factory.getDeployedContracts();
  console.log("Deployed contracts:", deployedContracts);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

