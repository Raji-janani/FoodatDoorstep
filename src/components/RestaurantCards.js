import { CDN_URL} from "../utils/constants"

const RestaurantCards = (props)=> {
    const {resData} = props;
    const {name, avgRating, cuisines, costForTwo} = resData?.info
    
    return(
        <div className="m-3 p-4 w-[250px] bg-white shadow-lg hover:bg-orange-700 rounded-md">
           <div className="pb-1">
               <img className="rounded-lg w-[220px] box-border h-[200px]" src={CDN_URL + resData.info.cloudinaryImageId} alt=""/>
               </div>
                <h2 className="font-bold pt-1">{name}</h2>
                      <div className="">{avgRating}</div>
                     <div className="">{cuisines.join(", ")}</div> 
                     <div>{costForTwo}</div>
         </div>
     )
 };

export const withOfferLabel = (RestaurantCards) =>{
    return (props)=>{
  return (
        <div>
             <label className="absolute text-white bg-black p-2 m-1 rounded-md ml-3">Recommended</label>
           <RestaurantCards {...props}/>
          
        </div>
     )
    }
 }

 export default RestaurantCards;