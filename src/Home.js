import sponsor from './images/sponsor.png'
import reciever from './images/reciever.png'
import vendor from './images/vendor.png'
import icon from './images/person_icon.png'
import avatar from './images/avatar.png'
import './styles/App.css';
import {Link, useNavigate} from 'react-router-dom'
import {useEffect,useState} from "react"

function Home() {

  const navigate=useNavigate();


     const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    (window).ethereum .request({ method: "eth_requestAccounts", })
   .then((accounts) => { setCurrentAccount(accounts[0]);console.log(accounts[0]); }) 
   .catch((error) => { navigate('/') });
   
   }, [])

   function handleClick(path){
    if(!currentAccount)
    {
      navigate('/');
    }
    else{
      navigate(path);
    }
   }

 
  return (
    
    <div className="App">

      <Link to = '/admin' >
      <div className='Admin'>Admin</div>
      </Link>
      <div className='Home'>
      <h1>LOGIN AS</h1>

  <div className='Login-Container'>

      <Link to = '/sponsor'>
      <div className='Login-Card' >
        <img src={icon} className="Login-Image" alt="sponsor" />
        <p> SPONSOR </p>
      </div>
      </Link>
      
      <Link to = '/reciever'>
      <div className='Login-Card'>
        <img src={icon} className="Login-Image" alt="reciever" />
        <p> RECIEVER</p>
      </div>
      </Link>

      <Link to = '/vendor'>
      <div className='Login-Card' >
        <img src={icon} className="Login-Image" alt="vendor" />
        <p> VENDOR </p>
      </div>
      </Link>      
  </div>
      </div>

    </div>
  );
}

export default Home;