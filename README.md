
# Celo Greeter Project

This repository demonstrates a simple **Greeter smart contract** deployed to the **Celo Sepolia Testnet** using both **Hardhat** and **Foundry** development frameworks. The project includes step-by-step deployment scripts, configuration files and instructions for interacting with the deployed contracts.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Smart Contract](#smart-contract)
- [Hardhat Deployment](#hardhat-deployment)
- [Foundry Deployment](#foundry-deployment)
- [Deployed Contract Addresses](#deployed-contract-addresses)
- [License](#license)

---

## Project Overview

The **Greeter contract** is a simple smart contract that stores a greeting message. It allows you to:

- Set a greeting message
- Retrieve the current greeting message

This project demonstrates how to deploy a Solidity contract to Celo Sepolia using **Hardhat** and **Foundry**.

---

## Technologies Used

- Solidity `^0.8.20`
- Hardhat
- Foundry
- Ethers.js
- Celo Sepolia Testnet
- Node.js

---

## Smart Contract

File: `contracts/Greeter.sol` (Hardhat) / `src/Greeter.sol` (Foundry)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
````

---

## Hardhat Deployment

1. Install dependencies:

```bash
cd hardhat
npm install
npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers dotenv
```

2. Configure `hardhat.config.js`:

```javascript
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    celoSepolia: {
      url: process.env.CELO_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
};
```

3. Set your environment variables in `.env`:

```
CELO_RPC=https://forno.celo.org/sepolia
PRIVATE_KEY=your_private_key_here
```

4. Deploy contract:

```bash
npx hardhat run scripts/deploy.js --network celoSepolia
```

---

## Foundry Deployment

1. Initialize Foundry project:

```bash
forge init foundry
```

2. Add your contract to `src/Greeter.sol`.

3. Configure your `foundry.toml`:

```toml
[profile.default]
rpc_url = "https://forno.celo.org/sepolia"
sender = "your_private_key_here"
```

4. Create deployment script: `script/DeployGreeter.s.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/Greeter.sol";

contract DeployGreeter is Script {
    function run() external {
        vm.startBroadcast();

        Greeter greeter = new Greeter("Hello Celo Sepolia!");
        console.log("Greeter deployed to:", address(greeter));

        vm.stopBroadcast();
    }
}
```

5. Deploy:

```bash
forge script script/DeployGreeter.s.sol --broadcast
```

---

## Deployed Contract Addresses

| Framework | Network      | Contract Address                             |
| --------- | ------------ | -------------------------------------------- |
| Hardhat   | Celo Sepolia | `0x7FA9385bE102ac3EAc297483Dd6233D62b3e1496`|
| Foundry   | Celo Sepolia | `0x7FA9385bE102ac3EAc297483Dd6233D62b3e1496` |

> **Note:** Replace Hardhat address once deployed successfully.

---

## License

This project is licensed under the MIT License.

```


Do you want me to create that **final version including both deployed addresses**?
```
