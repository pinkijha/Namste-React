import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import RestaurentsMenu from "./Components/RestaurentsMenu.js";
import Error from "./Components/Error.js";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

// RestCard inlineStyle
/* const styleCard = {
  backgroundColor: "#f0f0f0",
}; */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
      path: "/restaurent/:resId",
      element: <RestaurentsMenu></RestaurentsMenu>,
      },
    ],
    errorElement: <Error></Error>
  },
]) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
