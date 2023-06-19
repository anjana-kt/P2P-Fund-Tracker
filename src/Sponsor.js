import connectWallet from './utils/Connect'
import { Routes,Route, Link, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {FaPlus,FaSearch} from 'react-icons/fa' 
import AddFund from "./Sponsor-Pages/AddFund"
import { ethers } from 'ethers'

const Sponsor = ()=>{
    const navigate=useNavigate();
    var url ='https://mumbai.polygonscan.com/address/'

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send("eth_requestAccounts",[])
    // const signer = provider.getSigner();
    // console.log(signer.getAddress());

    const [currentAccount, setCurrentAccount] = useState("");
    const reciever = "0xa3Fb7243B0c87723619b5E1D61996458163A6FaB"
    useEffect(() => {
        (window).ethereum .request({ method: "eth_requestAccounts", })
    .then((accounts) => { setCurrentAccount(accounts[0]);console.log(accounts[0]); }) 
    .catch((error) => { navigate('/') });
    
    }, [])

    console.log("Current Account is : "+currentAccount);
    return(
        <>
            <Routes>
                <Route path='/add-fund' element={<AddFund/>} />
                <Route path='/sponsor/distribute' element='{}' />
                <Route path='/sponsor/monitor' element='{}' />
            </Routes>

            <h1>Sponsor's Options</h1>

            <div className='Option-Container'>

                <Link to = 'add-fund'>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaPlus size='50px' color='black' />
                        </div>
                        
                        <p> Add Fund </p>
                    </div>
                </Link> 

                {/* <Link to = ''>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaBook size='50px' color='black'  />
                        </div>
                        
                        <p> Distribute </p>
                    </div>
                </Link>  */}

                <Link to = '' target="_blank">
                    <a href ={(url+reciever)}>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaSearch size='50px' color='black'  />
                        </div>
                        
                        <p> Monitor </p>
                    </div>
                    </a>
                </Link> 

            </div>
        </>
    );
}

export default Sponsor;