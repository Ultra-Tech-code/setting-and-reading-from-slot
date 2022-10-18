import { ethers } from "hardhat";


async function main() {
  const DataStore = await ethers.getContractFactory("DataStore");
  const dataStore = await DataStore.deploy();

  await dataStore.deployed();

  console.log(`Lock  deployed to ${dataStore.address}`);

  let tx_ = await ethers.provider.getStorageAt(dataStore.address, 14)
  console.log(tx_)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
