export default function Monitor(){
    return(
        <>
            {/* <h2>Vendor's Page</h2> */}

            <div className="vendor-header">

                <h2>Your Balance : 0.0 </h2>
                <button className="redeem">REDEEM</button>

            </div>
            
            
            <div className="txn-data">

                <div className="txn-box">

                    <p className="TX">TX</p>

                    <p className="Tid">transaction address</p>

                    <div className="transfer">
                        <p className="from">from : address</p>
                        <p className="to">to   : address</p>
                    </div>

                    <p>0.0 ETH</p>
                </div>

                <div className="txn-box">

                    <p className="TX">TX</p>

                    <p className="Tid">transaction address</p>

                    <div className="transfer">
                        <p className="from">from : address</p>
                        <p className="to">to    : address</p>
                    </div>
                    <p>0.0 ETH</p>
                </div>

                <div className="txn-box">

                    <p className="TX">TX</p>

                    <p className="Tid">transaction address</p>

                    <div className="transfer">
                        <p className="from">from : address</p>
                        <p className="to">to    : address</p>
                    </div>
                    <p>0.0 ETH</p>
                </div>
                
            </div>
        </>
    );
}