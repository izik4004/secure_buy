const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SecureBuy", function () {
  let seller 
  let me
  it("Should return the new greeting once it's changed", async function () {
    const SecureBuy = await ethers.getContractFactory("SecureBuy");
    const securebuy = await SecureBuy.deploy();
    await securebuy.deployed();
    
    [seller] = await ethers.getSigners()

    const Me = await ethers.getContractFactory("Me")
    me = await Me.deploy(
      securebuy.address,
      seller.address,
    );
    await 

    expect(await securebuy.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    expect(await securebuy.greet()).to.equal("Hola, mundo!");
  });
});