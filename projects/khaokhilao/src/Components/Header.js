import { LOGO_IMAGE } from "../utils/constant";
//header
 const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_IMAGE}
          />
        </div>
        <div className="search">
          <input type="text" placeholder="Searching.."></input>
          <button type="submit" className="search-btn">
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