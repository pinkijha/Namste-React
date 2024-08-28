import { CDN_LINK } from "../utils/constant";
import ShimmerRestoMenu from "./ShimmerRestoMenu";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import useRestaurentsMenu from "../utils/useRestaurentsMenu";
import RestaurentCategories from "./RestaurentCategories";

const RestaurentsMenu = () => {
    const { resId } = useParams();

    // Custom hooks
    const restaurentInfo = useRestaurentsMenu(resId);

    const [showIndex, setshowIndex] = useState(false);

    // FontAwesome icons
    const starIcon = <FontAwesomeIcon icon={faStar} />;
    const locationIcon = <FontAwesomeIcon icon={faLocationDot} />;

    // Shimmer UI for loading state
    if (restaurentInfo === null) return <ShimmerRestoMenu />;

    // Destructuring data from API
    const { name, cloudinaryImageId, avgRating, city, totalRatingsString, costForTwoMessage, cuisines, sla } = restaurentInfo?.cards?.[2]?.card?.card?.info;

    const categories = restaurentInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="restoMenuContainer p-4 lg:p-8">
            <div className="resto-menu flex flex-col lg:flex-row lg:ml-[380px] sm:ml-[500px] mt-[30px] mr-[5px] h-auto lg:h-[250px] w-full lg:w-2/4 rounded-lg shadow-lg">
                <img 
                    className="menuImg mx-auto lg:mx-0 mt-[15px] cursor-pointer p-[1px] h-[200px] w-[200px] lg:h-auto lg:w-auto rounded-lg"
                    src={CDN_LINK + cloudinaryImageId}
                    alt="Restaurant"
                />
                <div className="resto-menu-cards pt-4 pl-0 lg:pl-[10px]">
                    <h1 className="mt-[12px] text-center lg:text-left">{name}</h1>
                    <h4 className="rating mt-[2px] font-bold text-center lg:text-left">
                        <span className="ratingStar text-orange-700">{starIcon}</span> {avgRating}
                        <span className="ml-[5px]">({totalRatingsString})</span>
                        <span className="ml-[5px]">{costForTwoMessage}</span>
                    </h4>
                    <h5 className="cuisines text-center lg:text-left">{cuisines.join(", ")}</h5>
                    <h4 className="text-center lg:text-left">
                        <FontAwesomeIcon icon={faLocationDot} /> {city}
                    </h4>
                    <h4 className="deliveryTime text-center lg:text-left">
                        {sla?.lastMileTravelString} <span className="ml-[5px]">|</span> {sla?.slaString}
                    </h4>
                </div>
            </div>

            {/* Accordion for categories */}
            <div className="mt-8">
                {categories?.map((category, index) => (
                    <RestaurentCategories
                        key={category?.card?.card?.data?.title}
                        data={category?.card?.card}
                        showItem={index === showIndex}
                        setshowIndex={() => setshowIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurentsMenu;
