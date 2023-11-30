import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import PetListing from "../Pages/PetListing/PetListing";
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
import AdoptionRequest from "../Pages/Dashboard/UserDashboard/AdoptionRequest/AdoptionRequest";
import UpdatedPets from "../Pages/Dashboard/UpdatedPets/UpdatedPets";
import DonationCamListDetails from "../Pages/DonationCamListDetails/DonationCamListDetails";
import DonationCampaignList from "../Pages/DonationCampaignList/DonationCampaignList";
import MyDonation from "../Pages/Dashboard/UserDashboard/MyDonation/MyDonation";
import MyDonationCampaign from "../Pages/Dashboard/UserDashboard/MyDonationCampaign/MyDonationCampaign";
import UpdateDonation from "../Pages/Dashboard/UpdateDonation/UpdateDonation";

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
          element :<PetListing/>
        },
         {
           path : "/addPet/:id",
           element : <PrivateRoute><PetDetails></PetDetails></PrivateRoute>,
           loader : ({params}) => fetch(`https://pet-adoption-server-side-sigma.vercel.app/addPet/${params.id}`)
         },
        {
          path : "/donationCampaign",
          element : <DonationCampaignList/>
        },
        {
          path : "/addCampaign/:id",
          element :<PrivateRoute><DonationCamListDetails/></PrivateRoute>,
          loader : ({params}) => fetch(`https://pet-adoption-server-side-sigma.vercel.app/addCampaign/${params.id}`)
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
          path : "adoptionRequest",
          element : <AdoptionRequest/>
        },
        {
          path : "createDonationCampaign",
          element :<CreateDonationCampaign/>
        },
        {
          path : 'myDonationCampaign',
          element : <MyDonationCampaign/>,
        },
        {
          path : 'myDonation',
          element : <MyDonation/>
        },
        // Updated pet for user and admin
        {
          path : 'updateItem/:id',
          element : <UpdatedPets/>,
          loader : ({params}) => fetch(`https://pet-adoption-server-side-sigma.vercel.app/addPet/${params.id}`)
        },
         {
          path : "updateDonation/:id",
          element : <UpdateDonation/>,
          loader : ({params}) => fetch(`https://pet-adoption-server-side-sigma.vercel.app/addCampaign/${params.id}`)
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