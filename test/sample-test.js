const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SecureBuy", function () {
  it("Should return the new greeting once it's changed", async function () {
    const SecureBuy = await ethers.getContractFactory("Greeter");
    const securebuy = await SecureBuy.deploy("Hello, world!");
    await securebuy.deployed();

    expect(await securebuy.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    expect(await securebuy.greet()).to.equal("Hola, mundo!");
  });
});