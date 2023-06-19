const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const PP = await hre.ethers.getContractFactory("Scholarship");
  const pp = await PP.deploy();

  await pp.deployed();
  console.log("PP deployed to:", pp.address);

  var k = await pp.addStudent('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',"s1",10,2);
  k = await pp.addStudent('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',"s1",10,2);
  k = await pp.getRegisteredCount()
  k= await pp.addSponsor('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199')
  k= await pp.awardScholarship('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',10)
  k= await pp.withdraw();
  console.log(k);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }
  );

