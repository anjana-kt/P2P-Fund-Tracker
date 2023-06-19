import connectWallet from './utils/Connect'
import { Routes,Route, Link,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {FaPlus,FaHistory} from 'react-icons/fa' 
const Admin = ()=>{

    // useEffect(()=>{
    //     connectWallet();
    // })

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
                
            </Routes>

            <h1>Adminstration</h1>

            <div className='Option-Container'>

                <Link to = '/admin/add-student'>
                    <div className='Option-Button' >
                        <div className='Option-Icon'>
                            <FaPlus size='50px' color='black' />
                        </div>
                        
                        <p>Register student</p>
                    </div>
                </Link> 

                <Link to = '/'>
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