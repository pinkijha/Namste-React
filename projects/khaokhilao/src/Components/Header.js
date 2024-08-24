import { useState, useEffect, useContext } from "react";
import { LOGO_IMAGE } from "../utils/constant";
import restObj from "../utils/mockData";
import { Link } from "react-router-dom";
// import RestaurentCard from "./RestaurentCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


//header
 const Header = () => {

  const {logedInUser} = useContext(UserContext);

  //Selector
  const cartItems = useSelector((store)=>store.cart.items)
 
  const list = "px-4 hover:text-green-600";
  // console.log("rendered header");
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
            <li className={list}>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
            <li className={list}><Link to="/" className="link">Home</Link></li>
            <li className={list}><Link to="/about" className="link">About</Link></li>
            <li className={list} ><Link to="/contact" className="link">Contact</Link></li>
            {/* <li className={list} ><Link to="/grocery" className="link">Grocery</Link></li> */}
            <li className={list} ><Link to="/cart" className="link">Cart 
            <span className="bg-green-600 ml-2 p-1  rounded-xl text-white">{cartItems.length}</span></Link></li>
            <button onClick= {() =>
               {
                 btnName === 'Login' ?
                setbtnName ("Logout") :
                setbtnName ("Login");               
               }}>{btnName}</button>
               <li className={list}>{logedInUser}</li>
          </ul>
        </div>
      </div>
      
    );
    
  };
 
  export default Header;