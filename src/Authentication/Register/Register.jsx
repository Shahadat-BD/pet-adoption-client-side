import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import {FiEye,FiEyeOff} from 'react-icons/fi'
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Register = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [showPassword,setShowPassword] = useState(false)
    const {googleSignIn,setUser,createSignInUser} = useContext(AuthContext)

    const handleRegisterForm = e =>{
           e.preventDefault()
           const name = e.target.name.value
           const email = e.target.email.value
           const password = e.target.password.value
           const photoURL = e.target.photoURL.value
       
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;

        if (password.length < 6) {
           toast('password must be 6 character')
        }
         else if (!regex.test(password)) {
             toast("at least one uppercase and one special character")
          } 
          else{
            createSignInUser(email,password)
            .then((result)=>{
              //  update user created
               updateProfile(result.user,{
                displayName : name,
                photoURL : photoURL,
               })
               .then(()=>{
                  console.log('profile updated');
                  window.location.reload(true)
               })
               setUser(result.user)
               toast('user created Successfully')
               navigate(location.state?.from.pathname || '/')
            })
            .catch((error)=>{
               toast(error.message)
            })
          }

    }
     
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result)=>{
            setUser(result.user)
            navigate(location.state?.from.pathname || '/')
            toast('user logged in successfully')
        })
        .catch((error)=>{
            toast(error.message)
        })
    }

  return (
    <div className="pt-20 pb-16">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-md bg-gray-200  dark:bg-base-100">
            <h1 className="text-3xl font-semibold text-center mt-3 text-[#ef233c]">
              Register Now
            </h1>
            <form className="px-5 pt-3" onSubmit={handleRegisterForm}>
              <div className="form-control mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="write your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="write your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-5">
                <input
                  type="text"
                  name="photoURL"
                  placeholder="write your photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mb-5"> 
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span onClick={()=>setShowPassword(!showPassword)} className='absolute lg:ml-[365px] ml-[300px] md:ml-[350px] mt-[15px] cursor-pointer'>{showPassword ? <FiEye/> : <FiEyeOff/>}</span>
              </div>

              <div className="form-control mt-6">
                <input  className="text-white border-none cursor-pointer bg-[#ef233c] py-3 text-lg font-semibold rounded-md"
                  type="submit"
                  value={'Register'}
                >
               
                </input>
              </div>
            <p className="text-center my-2">-----or-----</p>
            </form>
            <div onClick={handleGoogleSignIn} className="flex cursor-pointer justify-center items-center border border-pink-600 rounded-md py-3 mx-5 ">
              <FcGoogle className="text-lg font-semibold mr-4" />
              <button> Login With Google</button>
            </div>
            <div className="my-4">
              <p className="text-center">
                Already have an account ? please{" "}
                   <Link to={"/login"} className="text-[#ef233c]">
                     Login
                </Link>
              </p>
            </div>
          </div>
        </div>
   
      <ToastContainer/>
    </div>
  );
};

export default Register;