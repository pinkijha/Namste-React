import { useState, useEffect } from "react";
import { LOGO_IMAGE } from "../utils/constant";
import restObj from "../utils/mockData";
import { Link } from "react-router-dom";
// import RestaurentCard from "./RestaurentCard";
import useOnlineStatus from "../utils/useOnlineStatus";


//header
 const Header = () => {
  
  console.log("rendered header");
   const onlineStatus = useOnlineStatus();
  const [btnName, setbtnName] = useState("Login");
    return (
      <div className="items-center header flex justify-between shadow-xl">
        <div className="w-20 logo-container">
          <img
            className="ml-4 logo"
            src={LOGO_IMAGE}
          />
        </div>
       
        <div className="nav-item ">
          <ul className="font-bold text-lg p-4 m-4 flex">
            <li className="px-4 hover:text-green-600">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
            <li className=" px-4 hover:text-green-600"><Link to="/" className="link">Home</Link></li>
            <li className=" px-4 hover:text-green-600" ><Link to="/about" className="link">About</Link></li>
            <li className=" px-4 hover:text-green-600" ><Link to="/contact" className="link">Contact</Link></li>
            {/* <li className=" px-4 hover:text-green-600" ><Link to="/grocery" className="link">Grocery</Link></li> */}
            <li className=" px-4 hover:text-green-600" ><Link to="/cart" className="link">Cart</Link></li>
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