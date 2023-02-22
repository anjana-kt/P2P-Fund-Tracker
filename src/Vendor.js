import { useEffect } from "react";
import connectWallet from "./utils/Connect";
import { Link } from 'react-router-dom';
import {FaMoneyBill,FaBook} from 'react-icons/fa';

const Vendor = ()=>{
    
    useEffect(()=>{
        connectWallet();
    });

    return(
        <>
            <h1>Vendor Options</h1>
            <div className='Option-Container'>

                <Link to = ''>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaMoneyBill size='50px' color='black' />
                        </div>
                        
                        <p> opt 1 </p>
                    </div>
                </Link> 

                <Link to = ''>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaBook size='50px' color='black'  />
                        </div>
                        
                        <p> opt 2 </p>
                    </div>
                </Link> 
            </div>

        </>
    );
}

export default Vendor;