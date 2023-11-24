import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import PetListing from "../Pages/PetListing/PetListing";
import DonationCamPagins from "../Pages/DonationCamPagins/DonationCamPagins";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement : <ErrorPage/>,
      children : [
        {
            path : "/",
            element : <Home/>
        },
        {
          path : "/petListing",
          element : <PetListing/>
        },
        {
          path : "/donationCampaign",
          element : <DonationCamPagins/>
        },
        {
          path : "/login",
          element : <Login/>
        },
        {
          path : "/register",
          element : <Register/>
        }
      ]      
    }
])
export default router