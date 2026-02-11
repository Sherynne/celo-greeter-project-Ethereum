async function main() {
  // Get the contract factory for Greeter
  const Greeter = await ethers.getContractFactory("Greeter");

  // Deploy the contract with the initial greeting
  const greeter = await Greeter.deploy("Hello Celo Sepolia!");

  // Wait until the contract is deployed
  await greeter.deployed();

  // Print the address of the deployed contract
  console.log("Greeter deployed to:", greeter.address);
}

// Run the main function and catch errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

