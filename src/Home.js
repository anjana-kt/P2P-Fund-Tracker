import sponsor from './images/sponsor.png'
import reciever from './images/reciever.png'
import vendor from './images/vendor.png'
import './styles/App.css';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="App">
        
        <h1>LOGIN AS</h1>

        <div className='Login-Container'>

            <Link to = '/sponsor'>
            <div className='Login-Card' >
              <img src={sponsor} className="Login-Image" alt="sponsor" />
              <p> SPONSOR </p>
            </div>
            </Link>
            
            <Link to = '/reciever'>
            <div className='Login-Card'>
              <img src={reciever} className="Login-Image" alt="reciever" />
              <p> RECIEVER</p>
            </div>
            </Link>

            <Link to = '/vendor'>
            <div className='Login-Card' >
              <img src={vendor} className="Login-Image" alt="vendor" />
              <p> VENDOR </p>
            </div>
            </Link>      
      </div>
      
    </div>
  );
}

export default Home;