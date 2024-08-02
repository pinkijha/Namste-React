import RestaurentCard from "./RestaurentCard";
// import restObj from "../utils/mockData";
import { useState, useEffect } from "react";
// import { SPINNER_LOADING } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


// body Container
const Body = () => {
// Local State Variable --> Superpowerful variable
const [listOfRestaurents, setlistOfRestaurents] = useState([]);
const [filteredRestaurents, setfilteredRestaurents] = useState([]);
const [searchText, setSearchText] = useState("");

useEffect(()=>{
  fetchData()
}, []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9692071&lng=77.7047042&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);

const json = await data.json();
// console.log(json);


//optional chaining
setlistOfRestaurents(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setfilteredRestaurents(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
};

const onlineStatus = useOnlineStatus();

if (onlineStatus === false) 
return (
<h1 style={{backgroundColor:"red"}}>Looks like you are offline, Please check your internet Connection!!</h1>
);

// conditional Rendering

    return listOfRestaurents?.length === 0 ? (<Shimmer/>) : (
      <div className="main-container">       

      <div className="search">
          <input type="text" placeholder="Search a restaurant you want..." 
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
           
           />
          <button type="submit" className="search-btn"
          onClick={ () => {
            const filteredRestaurents = listOfRestaurents.filter((res) => 
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurents(filteredRestaurents);
          }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>


        <div className="filter">
          <button className="filter-btn"
          onClick={() => {
            // console.log(searchText)
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4
           );
           setfilteredRestaurents(filteredList);
           }}
          >Top Rated Restaurants</button>
        </div>

        <h2 className="top-resto">Top restaurant chains in Bangalore</h2>
        <div className="rest-container">
          {
            filteredRestaurents?.map((restaurant) => (
            <Link 
            className="cardLink" 
            key={restaurant.info.id} 
            to={"/restaurent/" + restaurant.info.id}>
              <RestaurentCard resData={restaurant}/></Link>
            ))
        } 

        </div>
      </div>
    );
  };

  export default Body;