import React from "react";
import ReactDOM from "react-dom/client";


//using React.createElement
const heading = React.createElement("div", { className: "title" }, 
  React.createElement("h1", {}, "heading-1"),
  React.createElement("h2", {}, "heading-2"),
  React.createElement("h3", {}, "heading-3"),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// using jsx
const heading1 = (
  <div>
    <h1 id="head1">heading-1 JSX</h1>
    <h2 className="head2">heading-2 JSX</h2>
    <img src="https://m.media-amazon.com/images/I/61AeVyv35HL._AC_UF1000,1000_QL80_.jpg" alt="flower"></img>
    <h3 id="head3">heading-3 JSX</h3>
  </div>
)
root.render(heading1);

// another Function Component
const Para = () =>(
  <p>kbvbervbqerivbhqjerv </p>
)

//  Create a functional component of the same with JSX
const Heading2 =() => (
  <div>
    {heading1}
    <h1>heading-1 functional component</h1>
    <Para></Para>
    <h2>heading-2 functional component</h2>
    <h3>heading-3 functional component</h3>
  </div>
)
root.render(<Heading2 />);