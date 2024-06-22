import { useState } from "react";
import { LOGO_IMAGE } from "../utils/constant";
import restObj from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}
//header
 const Header = () => {
  const [searchText, setSearchText] = useState("");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_IMAGE}
          />
        </div>
        <div className="search">
          <input type="text" placeholder="Search a restaurant you want..." 
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
           
           />
          <button type="submit" className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
          }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  
  export default Header;