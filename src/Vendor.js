import { useEffect } from "react";
import connectWallet from "./utils/Connect";
import { Link } from 'react-router-dom';
import {FaMoneyCheckAlt,FaHistory} from 'react-icons/fa';

const Vendor = ()=>{
    
    useEffect(()=>{
        connectWallet();
    });

    return(
        <>
            <Routes>
                <Route path='/sponsor/balance' element='{}' />
                <Route path='/sponsor/transactions' element='{}' />
            </Routes>

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

                <Link to = ''>
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