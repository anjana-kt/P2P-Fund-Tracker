import { useEffect, useState } from "react";
import connectWallet from "./utils/Connect";
import { Link, useNavigate } from 'react-router-dom';
import {FaCoins,FaMoneyCheck,FaHistory} from 'react-icons/fa';

const Reciever = ()=>{
    const navigate=useNavigate();


    const [currentAccount, setCurrentAccount] = useState("");

    useEffect(() => {
        (window).ethereum .request({ method: "eth_requestAccounts", })
    .then((accounts) => { setCurrentAccount(accounts[0]);console.log(accounts[0]); }) 
    .catch((error) => { navigate('/') });
    
    }, [])
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