import { useState, useEffect } from "react";
import { LOGO_IMAGE } from "../utils/constant";
import restObj from "../utils/mockData";
import { Link } from "react-router-dom";
// import RestaurentCard from "./RestaurentCard";
import useOnlineStatus from "../utils/useOnlineStatus";




//header
 const Header = (listOfRestaurents, setlistOfRestaurents) => {
  const [searchText, setSearchText] = useState("");
 

  console.log("rendered header");
   const onlineStatus = useOnlineStatus();

  const [btnName, setbtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_IMAGE}
          />
        </div>
       
        <div className="nav-item">
          <ul>
            <li>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
            <li><Link to="/grocery" className="link">Grocery</Link></li>
            <li><Link to="/cart" className="link">Cart</Link></li>
            <button onClick= {() =>
               {
                 btnName === 'Login' ?
                setbtnName ("Logout") :
                setbtnName ("Login");               
               }}>{btnName}</button>
          </ul>
        </div>
      </div>
      
    );
    
  };
 
  export default Header;