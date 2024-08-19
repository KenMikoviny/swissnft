const { ethers } = require("hardhat");

async function main() {
  const contract = await ethers.deployContract("SwissNft");
  await contract.waitForDeployment();

  console.log(`SwissNft was deployed to ${await contract.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

