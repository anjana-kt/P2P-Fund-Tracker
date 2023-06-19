import { useEffect, useState } from "react";
import connectWallet from "./utils/Connect";
import { Link, useNavigate } from 'react-router-dom';
import {FaCoins,FaMoneyCheck,FaHistory,FaHandshake} from 'react-icons/fa';
import { p2pAddress } from './config';
import p2pAbi from './Abi.json'
import { ethers } from 'ethers'
const Reciever = ()=>{
    const navigate=useNavigate();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(p2pAddress,p2pAbi.abi,signer);
    const [currentAccount, setCurrentAccount] = useState("");

    useEffect(() => {
        (window).ethereum .request({ method: "eth_requestAccounts", })
    .then((accounts) => { setCurrentAccount(accounts[0]);console.log(accounts[0]); }) 
    .catch((error) => { navigate('/') });
    
    }, [])

    const withdraw = async()=>{
        await contract.withdraw();
    }

    return(
        <>
            <h1>Reciever Options</h1>
            <div className='Option-Container'>

                <Link to = 'pay'>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaCoins size='50px' color='black' />
                        </div>
                        
                        <p> Pay </p>
                    </div>
                </Link> 

                {/* <Link to = ''>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaMoneyCheck size='50px' color='black'  />
                        </div>
                        
                        <p> Check balance </p>
                    </div>
                </Link>  */}

                <Link to=''  onClick={withdraw}>
                    <div className='Option-Button' >
                        <div className='Option-Icon' >
                            <FaHandshake size='50px' color='black'  />
                        </div>
                        
                        <p> Withdraw </p>
                    </div>
                </Link> 
                <Link to = 'history'>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaHistory size='50px' color='black'  />
                        </div>
                        
                        <p> History </p>
                    </div>
                </Link> 

            </div>

        </>
    );
}

export default Reciever;