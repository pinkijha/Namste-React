import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";

// RestCard inlineStyle
/* const styleCard = {
  backgroundColor: "#f0f0f0",
}; */

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
