import avatar from "../images/avatar.png";

const AddFund=()=>{
    return (
        <>
        <h1>Select a student to donate</h1>
        <div className="select-container">
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
            
            <button className="donate" onClick={''}>SEND</button>
        </>
    );
}

export default AddFund;