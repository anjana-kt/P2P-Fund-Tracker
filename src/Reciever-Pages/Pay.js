import { p2pAddress } from '../config';
import p2pAbi from '../Abi.json'
import { ethers } from 'ethers'
import { useNavigate } from 'react-router-dom';

export default function Pay(){

    // adress 6,7,8 used
    const canteen = "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
    const store = "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
    const academic = "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f"

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(p2pAddress,p2pAbi.abi,signer);

    const pay1=async()=>{            
    }
    const pay2=async()=>{            
    }
    const pay3=async()=>{            
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let walletConnected = true;
        if (walletConnected) {
          setLoading(true);
          console.log("hi");
        } else {
          alert("Connect to wallet!");
        }
    }

    return(
        
        <>
            <h1>Select and Pay</h1>
            <div className="pay-form">
            <form action="">
                <input type="checkbox" id="Canteen" name="vehicle1" value="1"/>
                <label for="vehicle1">Canteen</label><br/>
                <input type="checkbox" id="store" name="vehicle2" value="2"/>
                <label for="vehicle2"> Store</label><br/>
                <input type="checkbox" id="fee" name="vehicle3" value="3"/>
                <label for="vehicle3"> Fee</label><br/><br/>
                <input className="donate" type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
            </div>
            

        </>
    )
}