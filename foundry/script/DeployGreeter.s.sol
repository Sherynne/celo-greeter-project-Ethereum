// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/Greeter.sol";

contract DeployGreeter is Script {
    function run() external {
        vm.startBroadcast();

        Greeter greeter = new Greeter("Hello Celo Sepolia via Foundry!");
        console.log("Greeter deployed to:", address(greeter));

        vm.stopBroadcast();
    }
}

