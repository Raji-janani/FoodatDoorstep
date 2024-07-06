import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () =>{
    const [Listofres, setListofres] = useState([]);
    const [filteredres , setFilteredres] = useState([]);
    const [searchtxt , setSearchtxt] = useState("");

    useEffect(()=>{
    fetchData();
}, []);

const fetchData = async () => {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const json = await data.json();

setListofres(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredres(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};


    return Listofres.length === 0 ? <Shimmer/> :(
        <div className="bodyContent">

          <div className="filters">  
                <div className="searchBox">
                    <input type="text" className="searchbox" 
                    value={searchtxt} 
                    onChange={(e)=>{
                        setSearchtxt(e.target.value);
                    }
                } /> 
                    <button className="filter-btn" onClick={()=>{
                    const filteredres =  Listofres.filter((res)=> {
                        return res.info.name.toLowerCase().includes(searchtxt.toLowerCase())
                    }
                       );
                       setFilteredres(filteredres);
                    }}>Search</button>
                </div>
                <div className="res-filter">
                    <button className="toprated-btn" onClick={()=>{
                const filteredList = Listofres.filter(
                        (res) => res.info.avgRating > 4.5
                        );
                        setFilteredres(filteredList);
                    }}>Top Rated Restaurant</button>
                </div>
         </div>
            <div className="res-container">
                   {
                    filteredres.map((restaurant) =>{
                      return <RestaurantCards key={restaurant.info.id} resData= {restaurant}/>
                    })
                   }
            </div>
        </div>
    );
};

export default Body;