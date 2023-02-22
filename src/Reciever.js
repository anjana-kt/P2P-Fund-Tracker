import { useEffect } from "react";
import connectWallet from "./utils/Connect";
import { Link } from 'react-router-dom';
import {FaMoneyBill,FaBook,FaSearch} from 'react-icons/fa';

const Reciever = ()=>{
    useEffect(()=>{
        connectWallet();
    });
    return(
        <>
            <h1>Reciever Options</h1>
            <div className='Option-Container'>

                <Link to = ''>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaMoneyBill size='50px' color='black' />
                        </div>
                        
                        <p> Pay </p>
                    </div>
                </Link> 

                <Link to = ''>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaBook size='50px' color='black'  />
                        </div>
                        
                        <p> View Reciept </p>
                    </div>
                </Link> 

                <Link to = ''>
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

export default Reciever;