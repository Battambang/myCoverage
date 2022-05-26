import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import type { Greeter } from "../../src/types/Greeter";

declare module "mocha" {
  export interface Context {
    greeter: Greeter;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}
