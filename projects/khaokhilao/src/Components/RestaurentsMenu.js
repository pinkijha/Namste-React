import { CDN_LINK } from "../utils/constant";
import ShimmerRestoMenu from "./ShimmerRestoMenu";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router-dom";
import useRestaurentsMenu from "../utils/useRestaurentsMenu";


const RestaurentsMenu = () => {
const {resId} = useParams();

// Custom hooks
const restaurentInfo = useRestaurentsMenu(resId)


    // useEffect(() => {
    //     fetchMenu();
    // },[])

    // const fetchMenu = async() => {
    //     const data = await fetch(MENU_URL +resId+"&catalog_qa=undefined&submitAction=ENTER"

    //     );
    //     const json = await data.json();
    //     console.log(json);
    //     setrestaurentInfo(json.data)
    // } 
    // fonta-wesome
    const element = <FontAwesomeIcon icon={faStar} />

    // shimmer UI
    if( restaurentInfo === null ) return <ShimmerRestoMenu />
    // defined names from api 
    const {name, cloudinaryImageId, avgRating, city, totalRatingsString, costForTwoMessage, cuisines, sla} = restaurentInfo?.cards?.[2]?.card?.card?.info;
 
 
    // const { 
    //     name = '',
    //     cloudinaryImageId = '',
    //     avgRating = '',
    //     city = '',
    //     totalRatingsString = '',
    //     costForTwoMessage = '',
    //     cuisines = [],
    //     sla = {}
    //   } = restaurentInfo?.cards?.[2]?.card?.card?.info || {};

    //   const {itemCards} =  restaurentInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //   console.log(itemCards)

    const {
        itemCards
    } = restaurentInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || {};
    console.log(itemCards);

    // if( restaurentInfo === 0 ) return <ShimmerRestoMenu />
    return(
        <div className="restoMenuContainer">
        <div className="resto-menu">
        <img className="menuImg"
        src={CDN_LINK + cloudinaryImageId}></img>
           <div className="resto-menu-cards">
                <h1>{name}</h1>
                <h4 className="rating"><span className="ratingStar">{element} </span>{avgRating}  
                    <span className="menuSpan">( {totalRatingsString} )</span>                  
                    <span className="menuSpan">{costForTwoMessage}</span>
                </h4>
                <h5 className="cuisines">{cuisines.join(" , ")}</h5>
                <h4 className="menuSpan"><FontAwesomeIcon icon={faLocationDot} /> {city}</h4>
                <h4 className="deliveryTime">{sla?.lastMileTravelString} 
                 <span className="menuSpan">|</span> {sla?.slaString}  
                </h4>
           </div>
        </div>
        
        <div className="FlatPriceContainer">
           <h2 className="FlatPriceHeading">Recommended </h2>
          
           {
           itemCards?.map((item) => (
                <div className="FlatPriceCard" key={item.card.info.id}>
                    <div>
                    <h3>{item.card.info.name}</h3>
                    <h5>RS. {item.card.info.price/100}</h5>
                    <p>{item.card.info.description}</p>
                    </div>
                    
                    <div className="FlatPriceImgContainer">
                    <img className="FlatPriceImg" src={CDN_LINK + item.card.info.imageId}></img>
                    <button className="add-btn">ADD +</button>
                    
                    </div>
                </div>
            ))} 

           </div>
           </div>

      
    )
}
export default RestaurentsMenu;