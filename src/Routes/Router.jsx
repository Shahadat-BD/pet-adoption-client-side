import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import PetListing from "../Pages/PetListing/PetListing";
import DonationCamPagins from "../Pages/DonationCamPagins/DonationCamPagins";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AddPet from "../Pages/Dashboard/UserDashboard/AddPet/AddPet";
import MyAddedPets from "../Pages/Dashboard/UserDashboard/MyAddedPets/MyAddedPets";
import CreateDonationCampaign from "../Pages/Dashboard/UserDashboard/CreateDonationCampaign/CreateDonationCampaign";
import AllUser from "../Pages/Dashboard/AdminDashboard/AllUser/AllUser";
import AllPets from "../Pages/Dashboard/AdminDashboard/AllPets/AllPets";
import AllDonation from "../Pages/Dashboard/AdminDashboard/AllDonation/AllDonation";
import AdminRotes from "./AdminRotes";
import PetDetails from "../Pages/PetDetails/PetDetails";

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
          element : <PrivateRoute><PetListing/></PrivateRoute>
        },
         {
           path : "/addPet/:id",
           element : <PetDetails></PetDetails>,
           loader : ({params}) => fetch(`http://localhost:3000/addPet/${params.id}`)
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
    },
    {
      path : 'dashboard',
      element : <PrivateRoute><Dashboard/></PrivateRoute>,
      errorElement : <ErrorPage/>,
      children : [
        // => user => myAddedPets,adoptionRequest,createDonationCampaign,myDonationCampaign,myDonation
        // users,allPets,allDonation => admin
        {
          path : "addPet",
          element :<AddPet/>
        },
        {
          path : "myAddedPets",
          element :<MyAddedPets/>
        },
        {
          path : "createDonationCampaign",
          element :<CreateDonationCampaign/>
        },
        // only admin go to this route.
        {
          path : "users",
          element :<AdminRotes><AllUser/></AdminRotes>
        },
        {
          path : "allPets",
          element : <AllPets/>
        },
        {
          path : "allDonation",
          element :<AllDonation/>
        }
      ]
    }
])
export default router