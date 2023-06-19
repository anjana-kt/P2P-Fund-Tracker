import { useEffect,useState } from 'react';
import { p2pAddress } from '../config';
import p2pAbi from '../Abi.json'
import { ethers } from 'ethers'
import { useNavigate } from 'react-router-dom';

export default function Monitor(){

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(p2pAddress,p2pAbi.abi,signer);

    
    const [student, setStudent] = useState([]);
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    var items = ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8","0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"]
    setA(contract.getStudentFromAddress(items[0]));
    setB(contract.getStudentFromAddress(items[1]));
    setStudent(items);

    return(
        <>
            <h2>Transaction History</h2>
            
            <div className="txn-data">

                <div className="txn-box">

                    <p className="TX">TX</p>

                    <p className="Tid">1</p>

                    <div className="transfer">
                        <p className="from">student[0]</p>
                    </div>

                    <p>A.totalAmount</p>
                </div>

                <div className="txn-box">

                    <p className="TX">TX</p>

                    <p className="Tid">2</p>

                    <div className="transfer">
                        <p className="from">student[1]</p>
                    </div>
                    <p>B.totalAmount</p>
                </div>              
            </div>
        </>
    );
}