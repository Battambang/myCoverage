import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";

import type { Greeter } from "../src/types/Greeter";
import type { Greeter__factory } from "../src/types/factories/Greeter__factory";

async function main() {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const greeterFactory: Greeter__factory = <Greeter__factory>await ethers.getContractFactory("Greeter");
  const greeter: Greeter = <Greeter>await greeterFactory.connect(signers[0]).deploy("Hello world");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
