import RestaurantCards from "./RestaurantCards";
import { useState } from "react";
import { resList } from "../utils/mockData";


const Body = () =>{
    const [Listofres, setListofres] = useState(resList);
    return(
        <div className="bodyContent">
            <div className="searchBox">
                {/* <input type="text">Search</input> */}
            </div>
            <div className="res-filter">
                <button className="toprated-btn" onClick={()=>{
             const filteredList = Listofres.filter(
                    (res) => res.info.avgRating > 4.5
                    );
                    setListofres(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                   {
                    Listofres.map((restaurant) =>{
                      return <RestaurantCards key={restaurant.info.id} resData= {restaurant}/>
                    })
                   }
            </div>
        </div>
    )
}

export default Body;