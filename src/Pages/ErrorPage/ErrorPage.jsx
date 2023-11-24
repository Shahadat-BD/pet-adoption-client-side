import React from 'react';
import notFound from "../../assets/404.gif";
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='lg:w-1/2 m-auto text-center'>
        <img className='w-full' src={notFound} alt="" srcset="" />
        <Link to={'/'}>
           <button className='bg-gradient-to-r from-[red] to-[white] text-white px-5 py-2 rounded-md'>Back To Home</button>
        </Link>
   </div>
    );
};

export default ErrorPage;