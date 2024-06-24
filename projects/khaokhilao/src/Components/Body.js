import RestaurentCard from "./RestaurentCard";
// import restObj from "../utils/mockData";
import { useState, useEffect } from "react";
// import { SPINNER_LOADING } from "../utils/constant";
import Shimmer from "./Shimmer";


// body Container
const Body = () => {
// Local State Variable --> Superpowerful variable
const [listOfRestaurents, setlistOfRestaurents] = useState([]);

useEffect(()=>{
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9692071&lng=77.7047042&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);

const json = await data.json();
console.log(json);

//optional chaining
setlistOfRestaurents(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

};

if(listOfRestaurents.length === 0){
  return  <Shimmer/>
};


// JS Variable
  // let listOfRestaurents2 = [];
    return (
      <div className="main-container">
        <div className="filter">
          <button className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4
           );
           setlistOfRestaurents(filteredList);
           }}
          >Top Rated Restaurants</button>
        </div>

        <h2 className="top-resto">Top restaurant chains in Bangalore</h2>
        <div className="rest-container">
          {
            listOfRestaurents.map((restaurant) => (
            <RestaurentCard key={restaurant.info.id} resData={restaurant}/>
            ))
        } 

        </div>
      </div>
    );
  };

  export default Body;