
// JavaScript Code
/* const heading = document.createElement("h1");
heading.innerHTML = "hello world";

const root = document.querySelector(".root");
root.appendChild(heading); */


/* 
*   how to create nested element in html
*    <div class="parent">
    <div class="child">
        <h1></h1>
    </div>
    </div>
*
*
*
*/

// how to create nested structure in react
    const parent = React.createElement("div", {id:'parent'}, 
                   React.createElement("div", {id:'child'},
                   React.createElement("div", {}, 'I am an h1 tag')
                    )
                   
    );

// React Code
const heading = React.createElement("h1", {id:'heading', name:'pinki'}, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
console.log(parent);
root.render(parent);