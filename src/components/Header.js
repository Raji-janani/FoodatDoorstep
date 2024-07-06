import { useState } from "react";

const Header = ()=>{
 
    let [btnName, setbtnName] = useState("login");

    return(
        <div className="header">
            <div className="headerLogo">
                <img className="logo" src={require("./images/food-logo.png")}  />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact US</li>
                    <li>CART</li>
                    <button className="login-btn" onClick={()=>{
                     btnName==="login"? setbtnName("logout") : setbtnName("login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;