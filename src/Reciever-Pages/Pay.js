import { p2pAddress } from '../config';
import p2pAbi from '../Abi.json'
import { ethers } from 'ethers'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

export default function Pay(){

    // adress 6,7,8 used
    const canteen = "0x976EA74026E726554dB657fA54763abd0C3a0aa9"
    const store = "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
    const academic = "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f"
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState("");

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

        await contract.transfer("0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",Number(amount));
        await contract.getRegisteredCount();
    }

    return(
        
        <>
            <h1>Select and Pay</h1>
            <div className="pay-form">
            <form action="">
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Enter Amount"
              required
              className="outline-none font-medium w-full py-2 px-3 rounded-md border border-black border-opacity-20 focus:shadow focus:ring-1 focus:ring-black"
              maxLength={10}
            />
            <br/>
                <input type="radio" id="Canteen" name="vehicle1" value={canteen}/>
                <label for="canteen">Canteen</label><br/>
                <input type="radio" id="store" name="vehicle2" />
                <label for="store"> Store</label><br/>
                <input type="radio" id="fee" name="vehicle3" value={academic}/>
                <label for="fee"> Fee</label><br/><br/>
                <input className="donate" type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
            </div>
            

        </>
    )
}