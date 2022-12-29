import { useEffect } from "react";
import connectWallet from "./utils/Connect";
const Vendor = ()=>{
    
    useEffect(()=>{
        connectWallet();
    });

    return(
        <>
            <h1>Vendor Options</h1>
        </>
    );
}

export default Vendor;