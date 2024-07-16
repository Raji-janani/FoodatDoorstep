import RestaurantCards,{withOfferLabel}  from "./RestaurantCards";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";

const Body = () =>{
    const [listofres, setListofres] = useState([]);
    const [filteredres , setFilteredres] = useState([]);
    const [searchtxt , setSearchtxt] = useState("");

    const RestaurantCardOffers = withOfferLabel(RestaurantCards);

    useEffect(()=>{
    fetchData();
}, []);

const fetchData = async () => {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const json = await data.json();

setListofres(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredres(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

const onlineStatus = useOnlineStatus();

if (onlineStatus === false){
    return(
        <h2>Your internet connection is low. Please check your internet!!</h2>
    )
}

const { loggedinUser, setUserName } = useContext(UserContext);

    return listofres.length === 0 ? ( 
    <Shimmer/> 
):(
        <div className="bodyContent">
               
          <div className="flex">  
                <div className="m-3 px-4">
                    <input type="text" className="border border-black" 
                    value={searchtxt} 
                    onChange={(e)=>{
                        setSearchtxt(e.target.value);
                    }
                } /> 
              
                    <button className="bg-gray-200 hover:bg-gray-400 border px-4 m-4 py-1 rounded-md" onClick={()=>{
                    const filteredres =  listofres.filter((res)=> {
                        return res.info.name.toLowerCase().includes(searchtxt.toLowerCase())
                    }
                       );
                       setFilteredres(filteredres);
                    }}>Search</button>
                  
                </div>
                <div className="m-3 px-4">
                    <button className="bg-gray-200 hover:bg-gray-400 border px-4 m-4 py-1 rounded-md" onClick={()=>{
                const filteredList = listofres.filter(
                        (res) => res.info.avgRating > 4.5
                        );
                        setFilteredres(filteredList);
                    }}>Top Rated Restaurant</button>
                </div>
                <div className="m-4 px-4 py-1">
                   <span>UserName: </span>
                    <input className="m-2 px-4 border border-black" value={loggedinUser} onChange={(e)=>{
                   setUserName(e.target.value)
                    }} />
                </div>
         </div>
         
                <div className="m-0 p-2 bg-gray-50">
                   <div className="flex flex-wrap space-x-4 lg:w-11/12 mx-auto p-2">
                    {
                        filteredres.map((restaurant) =>{
                        return (
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} >
                            
                    {
                            restaurant?.info?.avgRating > 4.2 ? (
                                <RestaurantCardOffers resData= {restaurant}/>
                                
                            ):
                          (
                            <RestaurantCards  resData= {restaurant}/>   
                      )
                    }
                            
                           </Link>
                        )
                        })
                    }
                </div>
          
        </div>
        </div>
    );

};

export default Body;