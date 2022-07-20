import React from "react";
import '../App.css';
function Regist(){
    return(
        
        <form className="registr" style={{width: '40%',
        padding: '15px', margin: '5px 0 22px 0',
        display: 'inline-block',
        border: 'none',
        color:'#181818'}}>
            
            <label>First Name</label>
            <input type={'text'} id='fname'></input>
            <br></br>

            <label htmlFor="last_name" id="lname">Last name</label>
            <input type="text" />
        </form>
    );
}
export default Regist;