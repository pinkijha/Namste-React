import React, {createContext, lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
// import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import RestaurentsMenu from "./Components/RestaurentsMenu.js";
import Error from "./Components/Error.js";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { lazy } from "react";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./Components/Cart.js";

// RestCard inlineStyle
/* const styleCard = {
  backgroundColor: "#f0f0f0",
}; */

const Grocery = lazy(() => import ("./Components/Grocery.js"));
const About = lazy(() => import("./Components/About.js"));

// const userName = createContext();



const AppLayout = () => {  
const [userName, setUserName ] = useState();

useEffect (()=>{
  const data ={
    name: "Pinki Jha",
  };
  setUserName(data.name)
},[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value= {{logedInUser: userName, setUserName}}>
        <div className="app">      
          <Header />      
      <Outlet />
    </div>    
    </UserContext.Provider>
    </Provider>
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
        element: <Suspense fallback={<h1>Loading...</h1>}><About></About></Suspense>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery></Grocery></Suspense>
      },
      {
      path: "/restaurent/:resId",
      element: <RestaurentsMenu></RestaurentsMenu>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      }
    ],
    errorElement: <Error></Error>
  },
]) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
