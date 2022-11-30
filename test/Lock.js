const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Esrrow", function () {
  it("saves the address", async () => {
    const SecureBuy = await ethers.getContractFactory("SecureBuy");
    const sbuy = await SecureBuy.deploy();
   
    console.log(sbuy.address)
    
  });
});