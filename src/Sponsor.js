import connectWallet from './utils/Connect'
import { Routes,Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import {FaPlus,FaBook,FaSearch} from 'react-icons/fa' 
const Sponsor = ()=>{

    useEffect(()=>{
        connectWallet();
    })
    
    return(
        <>
            <Routes>
                <Route path='/sponsor/add-fund' element='{}' />
                <Route path='/sponsor/distribute' element='{}' />
                <Route path='/sponsor/monitor' element='{}' />
            </Routes>

            <h1>Sponsor's Options</h1>

            <div className='Option-Container'>

                <Link to = ''>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaPlus size='50px' color='black' />
                        </div>
                        
                        <p> Add Fund </p>
                    </div>
                </Link> 

                <Link to = ''>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaBook size='50px' color='black'  />
                        </div>
                        
                        <p> Distribute </p>
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

export default Sponsor;