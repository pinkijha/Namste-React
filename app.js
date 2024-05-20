
// JavaScript Code
/* const heading = document.createElement("h1");
heading.innerHTML = "hello world";

const root = document.querySelector(".root");
root.appendChild(heading); */

// React Code
const heading = React.createElement("h1", {}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);