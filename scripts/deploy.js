const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();
  const balance = await deployer.getBalance();
  const SecureBuy = await hre.ethers.getContractFactory("SecureBuy");
  const securebuy = await SecureBuy.deploy();

  // const Me = await hre.ethers.getContractFactory("Me")
  // const me = await me.deploy();

  await securebuy.deployed();

  const data = {
    address: securebuy.address,
    abi: JSON.parse(securebuy.interface.format('json'))
  }

  //This writes the ABI and address to the mktplace.json
  fs.writeFileSync('./src/Securebuy.json', JSON.stringify(data))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });