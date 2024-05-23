import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// JSX is not HTML in JS, its look like HTML & XML
// JSX ==> ReactElement ==> ReactElement-object(JS) ==> html element (render)
const name = React;
const jsxHeading = <h1 id="heading">Namste React in JSX</h1>
root.render(jsxHeading)
