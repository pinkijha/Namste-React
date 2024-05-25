import React from "react";
import ReactDOM from "react-dom/client";

//header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhOXN4HFC4ywL02TF_4JYd59KCzUXYaUFFlM8XgveLg&s"
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

// RestCard inlineStyle
/* const styleCard = {
  backgroundColor: "#f0f0f0",
}; */
// body Container
const Body = () => {
  return (
    <div className="main-container">
      <h2 className="top-resto">Top restaurant chains in Bangalore</h2>
      <div className="rest-container">
        <RestaurentCard /> 
        <RestaurentCard /> 
        <RestaurentCard />
        <RestaurentCard /> 
        <RestaurentCard /> 
        <RestaurentCard />
      </div>
    </div>
  );
};

// restro cards
const RestaurentCard = () => {
  return (
    <div className="rest-cards" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
      />
      <div className="card-descr">
        <h3>Chinese Wok</h3>
        <span>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i> <b>4.2 • 20-25 mins</b>
        </span>
        <p className="">Chinese, Asian, Tibetan, Desserts Marathahalli</p>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
