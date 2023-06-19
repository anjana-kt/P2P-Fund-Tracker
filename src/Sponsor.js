import connectWallet from './utils/Connect'
import { Routes,Route, Link, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {FaPlus,FaSearch} from 'react-icons/fa' 
import AddFund from "./Sponsor-Pages/AddFund"



const Sponsor = ()=>{
    const navigate=useNavigate();


    const [currentAccount, setCurrentAccount] = useState("");

    useEffect(() => {
        (window).ethereum .request({ method: "eth_requestAccounts", })
    .then((accounts) => { setCurrentAccount(accounts[0]);console.log(accounts[0]); }) 
    .catch((error) => { navigate('/') });
    
    }, [])

    
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

                <Link to = 'monitor'>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaSearch size='50px' color='black'  />
                        </div>
                        
                        <p> Monitor </p>
                    </div>
                </Link> 

            </div>
        </>
    );
}

export default Sponsor;