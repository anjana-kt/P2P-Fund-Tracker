import avatar from "../images/avatar.png";
import { p2pAddress } from '../config';
import p2pAbi from '../Abi.json'
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
const AddFund=()=>{
    useEffect(()=>{
        displayAll();
    },[]);


    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(p2pAddress,p2pAbi.abi,signer);

    var items=[];
    const [student, setStudent] = useState([]);

    const send=async()=>{

    }

    const displayAll=async()=>{
        console.log("Display called");
        //debugger
        var n = await contract.getRegisteredCount();
        console.log("Length = "+n);
        // n=Number(n);
        // items=[]
        // for (var i=1;i<=n;i++)
        // {
        //     console.log("Display");
        //     const data = await contract.getStudentFromID(i);
        //     console.log(data);
        //     if (data.got == false)
        //     {
        //         let item = {
        //             address:data.stu_address,
        //             name:data.name,
        //             cgpa:data.cgpa,
        //             donor:data.donor,
        //             total:data.totalAmount,
        //          }
        //          items.push(item);
        //          console.log(item);
        //     }
            
        // }
        // console.log("before");
        // setStudent(items);
        // // console.log(student);
    }

    return (
        <>
        <h1>Select a student to donate</h1>
        <div className="select-container">

        {student.map(item => 
            
            <div className="select-box">
                <img className="avatar" src={avatar} alt="user"/>
                <div className="select-col">
                    <p>{`${item.address}`}</p>

                    <div className="select-checkbox">
                        <p>{`${item.total}`}</p>
                        <input type="checkbox" id="1" value="1" />
                    </div>
                    
                </div>
            </div>
                )}

            <div className="select-box">
                <img className="avatar" src={avatar} alt="user"/>
                <div className="select-col">
                    <p>public address</p>

                    <div className="select-checkbox">
                        <p>Amount for user 1</p>
                        <input type="checkbox" id="1" value="1" />
                    </div>
                    
                </div>
            </div>
        </div>
            
            <button className="donate" onClick={send}>SEND</button>
        </>
    );
}

export default AddFund;