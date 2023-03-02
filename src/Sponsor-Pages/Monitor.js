export default function Monitor(){
    return(
        <>
            <h2>Transaction History</h2>
            
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