import { ethers } from "hardhat";

async function main() {
  const MessageFactoryContract = "0x5f7DAD80E791027871d305B2BAe0b451fFe59695";

  const messageFactoryContract = await ethers.getContractAt("IMessageFactory", MessageFactoryContract);

  const createMessageContractTx = await messageFactoryContract.createMessageContract("Welcome to Web3Bridge!!");
  
  await createMessageContractTx.wait();

  console.log(createMessageContractTx);

}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

// Transaction hash: '0x6c6ae91253645ba15f71064cc7e02fdebbd0d4285f279594a46968bccb98aa5e'