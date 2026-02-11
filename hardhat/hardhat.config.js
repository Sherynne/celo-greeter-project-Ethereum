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

