import { CDN_LINK } from "../utils/constant";
import ShimmerRestoMenu from "./ShimmerRestoMenu";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router-dom";
import useRestaurentsMenu from "../utils/useRestaurentsMenu";
import RestaurentCategories from "./RestaurentCategories";


const RestaurentsMenu = () => {
const {resId} = useParams();

// Custom hooks
const restaurentInfo = useRestaurentsMenu(resId);

const [showIndex, setshowIndex] = useState(false);

    
    // fonta-wesome
    const element = <FontAwesomeIcon icon={faStar} />

    

    // shimmer UI
    if( restaurentInfo === null ) return <ShimmerRestoMenu />
    // defined names from api 
    const {name, cloudinaryImageId, avgRating, city, totalRatingsString, costForTwoMessage, cuisines, sla} = restaurentInfo?.cards?.[2]?.card?.card?.info;
    
        const {
            itemCards
        } = restaurentInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || {};
        // console.log("itemcards", itemCards);

    // console.log(restaurentInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

    const categories = restaurentInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        //  console.log(categories);

    // if( restaurentInfo === 0 ) return <ShimmerRestoMenu />
    
    const menuSpan =  "ml-[5px]";
    return(
        <div className="restoMenuContainer ">
        <div className="resto-menu lg:ml-[380px]  sm:ml-[500px]  flex mt-[30px] mr-[5px] h-[250px] w-2/4
         rounded-lg shadow-lg">
        <img className="menuImg ml-[20px] mt-[15px] mr-[5px] cursor-pointer
        p-[1px] h-[200px] w-[200px] rounded-lg"
        src={CDN_LINK + cloudinaryImageId}></img>
           <div className="resto-menu-cards  pt[10px] pl-[10px]">
                <h1 className="mt-[12px]"> {name}</h1>
                <h4 className="rating mt[2px] font-bold"><span className="ratingStar
                 text-orange-700">{element} </span>{avgRating}  
                    <span className={menuSpan }>( {totalRatingsString} )</span>                  
                    <span className={menuSpan}>{costForTwoMessage}</span>
                </h4>
                <h5 className="cuisines">{cuisines.join(" , ")}</h5>
                <h4 className={menuSpan}><FontAwesomeIcon icon={faLocationDot} /> {city}</h4>
                <h4 className="deliveryTime">{sla?.lastMileTravelString} 
                 <span className={menuSpan}>|</span> {sla?.slaString}  
                </h4>
           </div>
        </div>

        {/* All accordion Item categories */}

            {categories?.map((category, index) =>(

                <RestaurentCategories key={category?.card?.card?.data?.title}
                 data={category?.card?.card}
                showItem = {index === showIndex ? true : false}
                setshowIndex = {() => setshowIndex(index)}
                 />

            ))}

        
     
           </div>

      
    )
}
export default RestaurentsMenu;