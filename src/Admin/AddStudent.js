import { useEffect,useState } from 'react';
import { FC, FormEvent, useContext, useRef } from "react";
import { p2pAddress } from '../config';
import p2pAbi from '../Abi.json'
import { ethers } from 'ethers'
import { useNavigate } from 'react-router-dom';

const Form = () =>{
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [amount, setAmount] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(p2pAddress,p2pAbi.abi,signer);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    let walletConnected = true;
    if (walletConnected) {
      setLoading(true);
      console.log("hi");
    } else {
      alert("Connect to wallet!");
    }

    await contract.addStudent(address,name,cgpa,amount);
  
    setLoading(false);
    navigate(-1);
  };


    return(
        <div className="w-full content-center">
        <form
          className="bg-cyan-700 shadow-md p-10 max-w-xl mx-auto flex flex-col items-center text-black"
        >
          <h1 className="mb-10 text-3xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-3xl dark:text-white">
            Register Student
          </h1>
          <div className="mb-6 w-full">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              required
              className="outline-none font-medium w-full py-2 px-3 rounded-md border border-black border-opacity-20 focus:shadow focus:ring-1 focus:ring-black"
              maxLength={100}
            />
          </div>
          <div className="mb-6 w-full">
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder="Address"
              required
              className="outline-none font-medium w-full py-2 px-3 rounded-md border border-black border-opacity-20 focus:shadow focus:ring-1 focus:ring-black"
              maxLength={100}
            />
          </div>
          <div className="mb-6 w-full">
            <input
              id="cgpa"
              type="number"
              value={cgpa}
              onChange={(e) => {
                setCgpa(e.target.value);
              }}
              placeholder="CGPA"
              required
              className="outline-none font-medium w-full py-2 px-3 rounded-md border border-black border-opacity-20 focus:shadow focus:ring-1 focus:ring-black"
              maxLength={100}
            />
          </div>
          <div className="mb-6 w-full">
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Amount"
              required
              className="outline-none font-medium w-full py-2 px-3 rounded-md border border-black border-opacity-20 focus:shadow focus:ring-1 focus:ring-black"
              maxLength={100}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`mt-3 flex items-center bg-black hover:bg-opacity-70 px-3 py-2 text-white rounded-md ${
              loading ? "bg-opacity-70" : ""
            }`}
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="ml-2">
                Adding..
              </div>
            ) : (
              <div>Add</div>
            )}
          </button>
        </form>
      </div>
    )
}

export default Form;