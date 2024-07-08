import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
 
    const [btnName, setbtnName] = useState("login");

const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className="headerLogo">
                <img className="logo" src={require("./images/food-logo.png")}  />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Onlinestatus : { onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact US</Link></li>
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