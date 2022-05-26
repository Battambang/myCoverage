## ENVIRONMENT INITIALISATION

Install MetaMask
Add Mumbai (Polygon testnet) network
Create at least 2 Ethereum accounts
Add some Matic from a faucet to each account

Install Visual Studio Code
Install solidity extension

Install Git and link to github account/repos configuration
=> https://github.com/ConsenSys/villagedao-smartcontract

Install nodejs LTS version

Ask/Create Infura account
Create an API endpoint for Polygon testnet Mumbai
Create an API endpoint for IPFS

Create account for Etherscan
Check compatibility with https://mumbai.polygonscan.com/

Create workspace
yarn init

Install Hardhat
yarn add --dev hardhat

Customize .gitignore

Initialize Hardhat project in project workspace
yarn hardhat
Select "Create an advanced sample project that uses TypeScript"

Update tsconfig.json
"exclude": ["node_modules"],
"files": ["./hardhat.config.ts"],
"include": ["scripts/**/*", "src/**/*", "tasks/**/*", "test/**/*"]

Create .editorconfig file

# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file

root = true

# All files

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.sol]
indent_size = 4

Rename .prettierrc file in .prettierrc.yaml
Fill up with these properties:
bracketSpacing: true
endOfLine: auto
printWidth: 120
singleQuote: false
tabWidth: 2
trailingComma: all

overrides:

- files: "\*.sol"
  options:
  tabWidth: 4

Edit .eslintrc.js into eslintrc.yaml
extends:

- "eslint:recommended"
- "plugin:@typescript-eslint/eslint-recommended"
- "plugin:@typescript-eslint/recommended"
- "prettier"
  parser: "@typescript-eslint/parser"
  parserOptions:
  project: "tsconfig.json"
  plugins:
- "@typescript-eslint"
  root: true

#shx is a wrapper around ShellJS Unix commands, providing an easy solution for simple Unix-like, cross-platform commands in npm package scripts.
yarn add --dev shx

#Run scripts that set and use environment variables across platforms
yarn add --dev cross-env

#This Solhint plugin lets you check that your solidity files are correctly formatted according to the solidity plugin for Prettier.
yarn add --dev solhint-plugin-prettier

Edit .solhint.json and replace all by:
{
"extends": "solhint:recommended",
"plugins": ["prettier"],
"rules": {
"compiler-version": ["error", ">=0.8.14"],
"constructor-syntax": "error",
"func-visibility": ["error", { "ignoreConstructors": true }],
"max-line-length": ["error", 120],
"prettier/prettier": [
"error",
{
"endOfLine": "auto"
}
],
"reason-string": ["warn", { "maxLength": 64 }]
}
}

Edit .solhintignore

# directories

**/artifacts
**/node_modules

#A prettier plugin to sort import declarations by provided Regular Expression order.
yarn add --dev @trivago/prettier-plugin-sort-imports
Add in the .prettierrc.yaml the following properties:
importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"]
importOrderParserPlugins: ["typescript"]
importOrderSeparation: true
importOrderSortSpecifiers: true

Edit .prettierignore and .eslintignore

# directories

**/.coverage_artifacts
**/.coverage_cache
**/.coverage_contracts
**/artifacts
**/build
**/cache
**/coverage
**/dist
**/node_modules
**/types

# files

_.env
_.log
.pnp._
coverage.json
npm-debug.log_
yarn-debug.log*
yarn-error.log*
gasReporterOutput.json

#Lint commit messages
yarn add --dev @commitlint/cli
#Shareable commitlint config enforcing conventional commits. Use with @commitlint/cli
yarn add --dev @commitlint/config-conventional
Create .commitlintrc.yaml
extends:

- "@commitlint/config-conventional"

#Git commit, but play nice with conventions.
yarn add --dev commitizen
#Part of the commitizen family. Prompts for conventional changelog standard.
yarn add --dev cz-conventional-changelog
Create .czrc
{
"path": "cz-conventional-changelog"
}

#Run linters against staged git files
yarn add --dev lint-staged
Create .lintstagedrc
{
"\*.{js,json,md,sol,ts,yaml,yml}": [
"prettier --config ./.prettierrc.yaml --write"
]
}

#Modern native Git hooks made easy
yarn add --dev husky
#Activate hooks
yarn husky install
npx husky add .husky/commit-msg "yarn commitlint --edit $1"
npx husky add .husky/pre-commit "yarn lint-staged"

Create .github/workflows folder
Create continuous-integration.yaml file

May create .solcover.js

Create .env

# Infura API key

INFURA_API_KEY="zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
#Mnemonic Generator: https://iancoleman.io/bip39/
MNEMONIC="tell enlist drip much pole account adult spot short very unhappy fruit"

Edit package.json
Edit Hardhatconfig file hardhat.config.ts

MythX™ by ConsenSys Software Inc™ is the premier security analysis service for Ethereum smart contracts.
https://mythx.io/
Ask for MythX account
Install Official VS Code extension for MythX

//difference
yarn dlx in actions
shelljs dependencies
.solhint import shellsjs

NFT SMART CONTRACT INITIALISATION

---

Add dependencies
#Secure Smart Contract library for Solidity
yarn add --dev @openzeppelin/contracts

Create Solidity Smart Contract for NFT.
Use ERC721 standard and start with the OpenZepplin minimalest implementation

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
=> OpenZeppelin implementation for Non-Fungible Tokens
import "@openzeppelin/contracts/utils/Counters.sol";
=> Counters that can only be incremented, decremented or reset to keep track of total tokens minted and get the next tokenId to mint.

Constructor() + mintTo() to init.

Create .env file with INFURA API key and Test Metamask account private key.

Config Hardhat config file hardhat.config.js with networks and their access keys.

Test compilation is OK.

Create a basic deploy.js for Smart Contract deployment.
Test SC deployment on Mumbai is OK.
Verify SC verification on polygonscan with etherscan plugin.
