import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";

const Header = ()=>{

    const {loggedinUser} = useContext(UserContext);
    const [btnName, setbtnName] = useState("login");

const onlineStatus = useOnlineStatus();
const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems)

    return(
        <div className="flex justify-between bg-amber-700 p-4 mb-4">
            <div className="px-2 ml-2 flex-col text-center">
              <img className="w-20 rounded-full" src={LOGO}  />
                <span className="text-white text-xl font-bold">Foodoor</span>
            </div>
            <div className="">
                <ul className="flex items-center p-4 m-2">
                    <li className="px-4 hover:font-bold">Onlinestatus : { onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4 hover:font-bold"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:font-bold"><Link to="/about">About</Link></li>
                    <li className="px-4 hover:font-bold"><Link to="/contact">Contact US</Link></li>
                    <li className="px-4 hover:font-bold"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 hover:font-bold"><Link to="/cart">CART - {cartItems.length }</Link></li>
                    <button className="border border-b-gray-700 py-1 px-4 bg-slate-50 rounded-md hover:font-bold" onClick={()=>{
                     btnName==="login"? setbtnName("logout") : setbtnName("login");
                    }}>{btnName} : {loggedinUser}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;