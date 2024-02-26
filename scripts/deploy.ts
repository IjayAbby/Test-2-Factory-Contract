import { ethers } from "hardhat";

async function main() {
  const MessageContractFactory = await ethers.deployContract("MessageContractFactory");
  const factory = await MessageContractFactory.waitForDeployment();

  console.log("Message factory deployed to:", factory.target);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

