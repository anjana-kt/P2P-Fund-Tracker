export default function Pay(){
    return(
        <>
            <h1>Select and Pay</h1>
            <div className="pay-form">
            <form action="">
                <input type="checkbox" id="Canteen" name="vehicle1" value="1"/>
                <label for="vehicle1">Canteen</label><br/>
                <input type="checkbox" id="store" name="vehicle2" value="2"/>
                <label for="vehicle2"> Store</label><br/>
                <input type="checkbox" id="fee" name="vehicle3" value="3"/>
                <label for="vehicle3"> Fee</label><br/><br/>
                <input className="donate" type="submit" value="Submit"/>
            </form>
            </div>
            

        </>
    )
}