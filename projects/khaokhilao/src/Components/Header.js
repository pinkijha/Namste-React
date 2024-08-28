import { useState, useContext } from "react";
import { LOGO_IMAGE } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// Header Component
const Header = () => {
  const { logedInUser } = useContext(UserContext);

  // Selector
  const cartItems = useSelector((store) => store.cart.items);

  const list = "px-4 py-2 hover:text-green-600";
  const onlineStatus = useOnlineStatus();
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header flex flex-col md:flex-row items-center justify-between p-4 shadow-xl bg-white">
      <div className="logo-container w-full md:w-20 flex justify-center md:justify-start">
        <img className="logo h-16 w-16 md:h-20 md:w-20" src={LOGO_IMAGE} alt="Logo" />
      </div>

      <div className="nav-item mt-4 md:mt-0 w-full md:w-auto flex justify-center md:justify-end">
        <ul className="font-bold text-lg flex flex-col md:flex-row items-center">
          <li className={list}>
            Online Status: {onlineStatus ? '✅' : '🔴'}
          </li>
          <li className={list}>
            <Link to="/" className="link">Home</Link>
          </li>
          <li className={list}>
            <Link to="/about" className="link">About</Link>
          </li>
          <li className={list}>
            <Link to="/contact" className="link">Contact</Link>
          </li>
          <li className={list}>
            <Link to="/cart" className="link">Cart
              <span className="ml-1 p-1 rounded-xl text-green-600">{cartItems.length}</span>
            </Link>
          </li>
          <button 
            className="px-4 py-2 bg-green-600 text-white rounded-md mt-2 md:mt-0 md:ml-4 transition duration-300 hover:bg-blue-700"
            onClick={() => {
              btnName === 'Login' ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className={`${list} mt-2 md:mt-0`}>
            {logedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
