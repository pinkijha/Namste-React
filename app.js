import React from "react";
import ReactDOM from "react-dom/client";

// create ReactElemt ==> object ==> html element

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Namste React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);