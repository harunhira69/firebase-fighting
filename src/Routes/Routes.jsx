import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import Signup from "../Pages/Signup";
const router = createBrowserRouter([
  {
    path: "/",
   Component:MainLayout,
   errorElement:<h3>404 Not Founbd</h3>,
   children:[
    {
        index:true,
        Component:Home
    },
    {
        path:'/home',
        Component:Home
    },
    {
        path:'/about',
        Component:About
    },
    {
        path:'/profile',
        Component:Profile
    },

    {
        path:'/signin',
        Component:SignIn

    },
    {
        path:'/signup',
        Component:Signup
    }
   ]

  },
]);
export default router