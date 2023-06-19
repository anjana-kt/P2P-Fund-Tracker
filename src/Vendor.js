import { useEffect,useState } from "react";
import connectWallet from "./utils/Connect";
import {FaMoneyCheckAlt,FaHistory} from 'react-icons/fa';
import { Routes,Route, Link,useNavigate} from 'react-router-dom';
import { p2pAddress } from './config';
import p2pAbi from './Abi.json'
import { ethers } from 'ethers'
const Vendor = ()=>{

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(p2pAddress,p2pAbi.abi,signer);

    const redeem = async()=>{
        await contract.withdraw();
    }
    
    const navigate=useNavigate();
    var url ='https://mumbai.polygonscan.com/address/'

    const [currentAccount, setCurrentAccount] = useState("");

    useEffect(() => {
        (window).ethereum .request({ method: "eth_requestAccounts", })
    .then((accounts) => { setCurrentAccount(accounts[0]);console.log(accounts[0]); }) 
    .catch((error) => { navigate('/') });
    
    }, [])

    return(
        <>          
            <h1>Vendor Options</h1>
            <div className='Option-Container'>

                <Link to = '' onClick={redeem}>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaMoneyCheckAlt size='50px' color='black' />
                        </div>
                        
                        <p> Redeem </p>
                    </div>
                </Link> 

                <Link to='' target="_blank">
                    <a href={(url+currentAccount)}>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaHistory size='50px' color='black'  />
                        </div>
                        
                        <p> History </p>
                    </div>
                    </a>
                </Link> 
            </div>

        </>
    );
}

export default Vendor;