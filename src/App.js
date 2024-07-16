import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Errorpage from "./components/Errorpage";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () =>{
  const[username, setUserName]= useState("")

useEffect(()=>{
// api call to get data
const data = {
  user: "Raji"
}
setUserName(data.user)
},[])
    return (
      <Provider store={appStore}>
  <UserContext.Provider value={{loggedinUser : username, setUserName}} >
  <div className="app">
      <Header/>
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading..</h1>}>
          <Grocery/>
          </Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Errorpage />
  }
 
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);