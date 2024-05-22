import React from "react";
import ReactDOM from "react-dom/client";

// how to create nested structure in react
    const parent = React.createElement("div", {id:'parent'}, 
    [
                   React.createElement("div", {id:'child1'},
                   [React.createElement("h1", {}, 'Pinki Jha '),
                   React.createElement("p", {}, 'Right now i am learning React')]
                    ) ,
                    React.createElement("div", {id:'child2'},
                   [React.createElement("h1", {}, 'I am an h1 tag from child 2'),
                   React.createElement("p", {}, 'I am an Paragraph tag')]
                    )                  
                ]); 

// React Code
const heading = React.createElement("h1", {id:'heading', name:'pinki'}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
console.log(parent);
root.render(parent);

// const img = React.createElement('img', {src: 'https://www.india.com/wp-content/uploads/2021/03/bengaluru-feature-image-Twitter-1200.jpg', alt:'flowers'}, )
// root.render(img);
