import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../LayOuts/Mainlayout";
import Home from "../pages/Home";
import Login from "../components/Login/Login.jsx";
import Register from "../components/Login/Register.jsx";

  
export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout/>,
      children:[
        {
            path:"/",
            element: <Home/>,
        },
        {
            path:"/login",
            element: <Login/>,
        },
        {
            path:"/register",
            element: <Register/>,
        }
      ]
    },
  ]);