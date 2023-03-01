import connectWallet from './utils/Connect'
import { Routes,Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import {FaPlus,FaHistory} from 'react-icons/fa' 
const Admin = ()=>{

    useEffect(()=>{
        connectWallet();
    })
    
    return(
        <>
            <Routes>
                
            </Routes>

            <h1>Adminstration</h1>

            <div className='Option-Container'>

                <Link to = ''>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaPlus size='50px' color='black' />
                        </div>
                        
                        <p>Register student</p>
                    </div>
                </Link> 

                <Link to = ''>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaHistory size='50px' color='black'  />
                        </div>
                        
                        <p>Check transactions</p>
                    </div>
                </Link> 

            </div>
        </>
    );
}

export default Admin;