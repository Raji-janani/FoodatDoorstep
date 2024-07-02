import { CDN_URL} from "../utils/constants"

const RestaurantCards = (props)=> {
    const {resData} = props;
    const {name, avgRating, cuisines, costForTwo } = resData?.info
     return(
        <div className="card-detail">
            <figure>
               <img src={CDN_URL + resData.info.cloudinaryImageId} alt=""/>
                 <figcaption>
                     <h2 className="res-name">{name}</h2>
                      <div className="rating">{avgRating}</div>
                     <div className="cuisine">{cuisines.join(", ")}</div> 
                     <div>{costForTwo}</div>
                 </figcaption>
          </figure>
         </div>
     )
 }

 export default RestaurantCards;