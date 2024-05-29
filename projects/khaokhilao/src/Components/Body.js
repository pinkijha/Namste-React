import RestaurentCard from "./RestaurentCard";
import restObj from "../utils/mockData";
import { useState } from "react";

// body Container
const Body = () => {
// Local State Variable --> Superpowerful variable
const [listOfRestaurents, setlistOfRestaurents] = useState([
  {
    "info": {
    "id": "489129",
    "name": "Chinese Wok",
    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    "locality": "Anand Nagar",
    "areaName": "Marathahalli",
    "costForTwo": "₹250 for two",      
    "avgRating": 4.2,
    
  },
   },
   {
    "info": {
    "id": "722329",
    "name": "Pizza Hut",
    "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
    "locality": "Hoodi",
    "areaName": "Marathahalli",
    "costForTwo": "₹350 for two",      
    "avgRating": 3.8,
    
  },
},
{
 "info": {
 "id": "600203",
 "name": "KFC",
 "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/6267ecd0-c240-4ef8-8050-527a15356426_600203.JPG",
 "locality": "Hoodi",
 "areaName": "Marathahalli",
 "costForTwo": "₹350 for two",      
 "avgRating": 4.5,
 
},
},
{
"info": {
"id": "660362",
"name": "Wow! Momo",
"cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
"locality": "Hoodi",
"areaName": "Marathahalli",
"costForTwo": "₹300 for two",      
"avgRating": 3.5,

},
},
{
"info": {
"id": "352796",
"name": "Grameen Kulfi",
"cloudinaryImageId": "z8ugqbgldizxu8ol6dh5",
"locality": "Chinnappanhalli",
"areaName": "Marathahalli",
"costForTwo": "₹120 for two",      
"avgRating": 4.8,

},
},
{
"info": {
"id": "89235",
"name": "Big Bowl",
"cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
"locality": "Anand Nagar",
"areaName": "Marathahalli",
"costForTwo": "₹250 for two",      
"avgRating": 4.2,

},
}  
])

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
          {/* <RestaurentCard imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" name="Pizza Hut" delTime="4 • 35-40 mins" description="Pizzas Marathahalli" /> 
          <RestaurentCard imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_198493.jpg" name="Leon's - Burgers.." delTime="4.3 • 30-35 mins" description="American, Snacks, Continental Whitefield" /> 
          <RestaurentCard imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tz4jybl8y0mwte9hyk3p" name="Awadhi Delights" delTime="3.9 • 30-35 mins" description="Biryani, North Indian, Awadhi MARATHAHALLI" /> 
          <RestaurentCard imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bnvciteie30q0rbiaxm8" name="EkDum Donne Biryani" delTime="4.3 • 35-40 mins" description="Biryani Kadubeesanahalli" />  
          <RestaurentCard imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qyqkbiryjgqn7w9gujfx" name="Lakeview Milk Bar" delTime="4.2 • 30-35 mins" description="Bakery, Desserts, Ice Cream Whitefield" /> */} 
        </div>
      </div>
    );
  };

  export default Body;