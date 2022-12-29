import connectWallet from './utils/Connect'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Sponsor = ()=>{

    useEffect(()=>{
        connectWallet();
    })
    
    return(
        <>
            <h1>Sponsor Options</h1>
            <div className='Option-Container'>
                <Link to = ''>
                <div className='Option-Button' >
                <p> Add Fund </p>
                </div>
                </Link> 

                <Link to = '/sponsor'>
                <div className='Option-Button' >
                <p> Add Fund </p>
                </div>
                </Link> 

                <Link to = '/sponsor'>
                <div className='Option-Button' >
                <p> Add Fund </p>
                </div>
                </Link> 
            </div>
        </>
    );
}

export default Sponsor;