import avatar from "../images/avatar.png";

const AddFund=()=>{
    return (
        <>
            <div className="select-box">
                <img className="avatar" src={avatar} alt="user"/>
                <p>public address</p>
                <input type="checkbox" id="1" value="1" />
                <label for="1" >Amount for user 1 </label>
            </div>
            <div className="select-box">
                <img className="avatar" src={avatar} alt="user"/>
                <p>public address</p>
                <input type="checkbox" id="1" value="1" />
                <label for="1" >Amount for user 1 </label>
            </div>
            <div className="select-box">
                <img className="avatar" src={avatar} alt="user"/>
                <p>public address</p>
                <input type="checkbox" id="1" value="1" />
                <label for="1" >Amount for user 1 </label>
            </div>
            
            <button className="donate" onClick={''}>SEND</button>
        </>
    );
}

export default AddFund;