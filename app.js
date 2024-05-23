import React from "react";
import ReactDOM from "react-dom/client";

const para = (
    <p>Write here paragraph..</p>
);


const JsxHeading = () => (
<h1 id="heading">Namste React in JSX</h1>
);

const number = 1000;
    // Functional Components -- New Way
        const HeadingComponent = () =>( 
            <div id="container">
                {number}
                <JsxHeading />
                <JsxHeading></JsxHeading>
                {JsxHeading()}
        <h1> Namste Functional Components </h1>
                {para}
            </div>
    );
       
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)
// root.render(jsxHeading)

// React Component
    // Class Based Components -- OLD Way