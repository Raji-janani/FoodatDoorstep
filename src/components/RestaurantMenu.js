import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{

     const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);

if (resInfo === null){ return (
    <Shimmer />
)
}

const { name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info

const { itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

      return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <p>{costForTwoMessage}</p>
           
                <h3>Recommended Menu</h3>
                <ul>
                    {itemCards.map( (items) => (
                    <div key={items.card.info.id} className="menuItems">
                        <p>{items.card.info.name}</p>
                        <p>Price - Rs.{items.card.info.price/100}</p>
                       <p>{items.card.info.description}</p>
                    </div>
                    
                )
                )}
               </ul>
          
        </div>
    )
}

export default RestaurantMenu;