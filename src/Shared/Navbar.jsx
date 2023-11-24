import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
 
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("user logOut successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  const link = <>
    <li className='pr-10' ><NavLink className="px-0 rounded-none font-bold text-md"
      style={({ isActive }) => ({
        color: isActive ? "#ef233c" : "black",
        borderBottom: isActive ? "2px solid #ef233c" : "none",
        background: isActive ? "none" : "none",
      })} to={'/'}>Home</NavLink></li>
    <li className='pr-10'><NavLink className="px-0 rounded-none font-bold text-md"
      style={({ isActive }) => ({
        color: isActive ? "#ef233c" : "black",
        borderBottom: isActive ? "2px solid #ef233c" : "none",
        background: isActive ? "none" : "none",
      })} to={'/petListing'}>Pet Listing</NavLink></li>
    <li className='pr-10'><NavLink className="px-0 rounded-none font-bold text-md"
      style={({ isActive }) => ({
        color: isActive ? "#ef233c" : "black",
        borderBottom: isActive ? "2px solid #ef233c" : "none",
        background: isActive ? "none" : "none",
      })} to={'/donationCampaign'}>Donation Campaign</NavLink></li>

  </>
  return (
    <div>
      <div className="navbar fixed z-20 bg-base-100 max-w-screen-xl m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {link}
            </ul>
          </div>
          <Link to={'/'}>
            <div className='flex items-center'>
              <img className='h-10' src={logo} alt="" srcset="" />
              <p className='text-4xl font-extrabold'>adopt</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
           {
             user ?
             ''
              : 
              <Link to={'/login'}>
                <button className='px-5 py-2 rounded-md text-white bg-[#ef233c] font-bold text-md'>login</button>
             </Link>

           }
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">
              {
              user
                ? 
                <img className="w-12 h-12  rounded-full mr-2" src={user.photoURL} alt="" />
                : ''
              }
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow text-black bg-base-100 rounded-box w-52">
              <li><p className=''>{user && user.displayName}</p></li>
              <li><p className=''> Dashboard </p></li>
              <li><button className='' onClick={handleLogOut}>Log Out</button></li>
            </ul>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Navbar;