import { useEffect } from "react";
import connectWallet from "./utils/Connect";

const Reciever = ()=>{
    useEffect(()=>{
        connectWallet();
    });
    return(
        <>
            <h1>Reciever Options</h1>
        </>
    );
}

export default Reciever;