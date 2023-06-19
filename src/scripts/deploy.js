const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const PP = await hre.ethers.getContractFactory("Scholarship");
  const pp = await PP.deploy();

  await pp.deployed();
  console.log("PP deployed to:", pp.address);

  var k = await pp.addStudent('0x70997970C51812dc3A010C7d01b50e0d17dc79C8',"shashi",10,2);
  k = await pp.addStudent('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',"soman",10,2);
  k = await pp.getRegisteredCount();
  console.log(Number(k));
  k= await pp.addSponsor('0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65')
  // k= await pp.awardScholarship('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',10)
  // k= await pp.withdraw();
  k= await pp.getStudentFromId(2);
  const options = {value:ethers.utils.parseEther("0.0001")};
  //k= await pp.transfer("0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",1);
  console.log(k);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }
  );

