const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const PP = await hre.ethers.getContractFactory("Scholarship");
  const pp = await PP.deploy();

  await pp.deployed();
  console.log("PP deployed to:", pp.address);

  var k = await pp.addStudent('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',"shashi",10,2);
  k = await pp.addStudent('0x90F79bf6EB2c4f870365E785982E1f101E93b906',"soman",10,2);
  k = await pp.getRegisteredCount();
  console.log(Number(k));
  k= await pp.addSponsor('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65')
  // k= await pp.awardScholarship('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',10)
  // k= await pp.withdraw();
  k= await pp.getStudentFromId(2);
  console.log(k.name);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }
  );

