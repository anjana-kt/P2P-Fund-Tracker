const hre = require("hardhat");
const p2pAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
import p2pAbi from '../Abi.json';
import { ethers } from 'ethers'
async function main() {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(p2pAddress,p2pAbi.abi,signer);

    await contract.addStudent("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E","nikitha",7,1);
    console.log(contract.getRegisteredCount());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }
  );

