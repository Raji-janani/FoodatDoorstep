import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
 
    const [btnName, setbtnName] = useState("login");

const onlineStatus = useOnlineStatus();

    return(
        <div className="flex justify-between bg-amber-700 p-4 mb-4">
            <div className="px-2 ml-2">
                <img className="w-28" src={require("./images/food-logo.png")}  />
            </div>
            <div className="">
                <ul className="flex items-center p-4 m-2">
                    <li className="px-4 hover:font-bold">Onlinestatus : { onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4 hover:font-bold"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:font-bold"><Link to="/about">About</Link></li>
                    <li className="px-4 hover:font-bold"><Link to="/contact">Contact US</Link></li>
                    <li className="px-4 hover:font-bold"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 hover:font-bold">CART</li>
                    <button className="border border-b-gray-700 py-1 px-4 bg-slate-50 rounded-md hover:font-bold" onClick={()=>{
                     btnName==="login"? setbtnName("logout") : setbtnName("login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;