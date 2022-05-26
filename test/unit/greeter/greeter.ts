import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { Greeter } from "../../../src/types/Greeter";
import { Signers } from "../../common/types";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Greeter", function () {
    beforeEach(async function () {
      const greeting: string = "Hello, world!";
      const greeterArtifact: Artifact = await artifacts.readArtifact("Greeter");
      this.greeter = <Greeter>await waffle.deployContract(this.signers.admin, greeterArtifact, [greeting]);
    });

    it("should return the new greeting once it's changed", async function () {
      expect(await this.greeter.connect(this.signers.admin).greet()).to.equal("Hello, world!");

      await this.greeter.setGreeting("Hola, mundo!");
      expect(await this.greeter.connect(this.signers.admin).greet()).to.equal("Hola, mundo!");
    });
  });
});
