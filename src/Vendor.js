import { useEffect,useState } from "react";
import connectWallet from "./utils/Connect";
import {FaMoneyCheckAlt,FaHistory} from 'react-icons/fa';
import { Routes,Route, Link,useNavigate} from 'react-router-dom';

const Vendor = ()=>{
    
    const navigate=useNavigate();


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

                <Link to = ''>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaMoneyCheckAlt size='50px' color='black' />
                        </div>
                        
                        <p> Redeem </p>
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

export default Vendor;