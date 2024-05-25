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
        <RestaurentCard imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" name="Chinese Wok" delTime="4.2 • 20-25 mins" description="Chinese, Asian, Tibetan, Desserts Marathahalli" /> 
        <RestaurentCard imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" name="Pizza Hut" delTime="4 • 35-40 mins" description="Pizzas Marathahalli" /> 
        <RestaurentCard imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_198493.jpg" name="Leon's - Burgers.." delTime="4.3 • 30-35 mins" description="American, Snacks, Continental Whitefield" /> 
        <RestaurentCard imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tz4jybl8y0mwte9hyk3p" name="Awadhi Delights" delTime="3.9 • 30-35 mins" description="Biryani, North Indian, Awadhi MARATHAHALLI" /> 
        <RestaurentCard imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bnvciteie30q0rbiaxm8" name="EkDum Donne Biryani" delTime="4.3 • 35-40 mins" description="Biryani Kadubeesanahalli" />  
        <RestaurentCard imageUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qyqkbiryjgqn7w9gujfx" name="Lakeview Milk Bar" delTime="4.2 • 30-35 mins" description="Bakery, Desserts, Ice Cream Whitefield" />
      </div>
    </div>
  );
};



// restro cards
const RestaurentCard = ({imageUrl, name, delTime, description}) => {
  return (
    <div className="rest-cards" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-img"
        src={imageUrl} alt="rest-logo"
      />
      <div className="card-descr">
        <h3>{name}</h3>
        <span>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i> <b>{delTime}</b>
        </span>
        <p className="">{description}</p>
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
