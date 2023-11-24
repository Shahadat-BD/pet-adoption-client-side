import React from 'react';
import logo from '../assets/logo.png'
import { FaGoogle, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import img_1 from '../assets/footerImg/cat.jpg'
import img_2 from '../assets/footerImg/dog.jpg'
import img_3 from '../assets/footerImg/goat-1.jpg'
import img_4 from '../assets/footerImg/rabiit.jpg'
const Footer = () => {
    return (
        <div className='bg-[#0A303A] text-white'>
            <footer className="footer p-10">
                <aside>
                    <div className='flex items-center'>
                        <img className='h-10' src={logo} alt="" srcset="" />
                        <p className='text-4xl font-extrabold'>adopt</p>
                    </div>
                    <p className='text-lg'>shahadat's Industries Ltd.<br />Agrabad,chittagong.</p>
                     <div className='flex items-center gap-2 mb-5'>
                      <FaPhone/> 
                      <p>+880188234933</p>
                     </div>
                    <div className='flex gap-5'>
                        <FaGoogle className='text-2xl'/>
                        <FaLinkedin className='text-2xl'/>
                        <FaInstagram className='text-2xl'/>
                        <FaTwitter className='text-2xl'/>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">adopt dog</a>
                    <a className="link link-hover">adopt cat</a>
                    <a className="link link-hover">adopt Rabbit</a>
                    <a className="link link-hover">adopt Goat</a>
                    <a className="link link-hover">adopt cat</a>
                    <a className="link link-hover">adopt Rabbit</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Category</a>
                    <a className="link link-hover">pet List</a>
                    <a className="link link-hover">Review</a>
                    <a className="link link-hover">Dashboard</a>
                    <a className="link link-hover">donation campaign</a>
    
                </nav>
                <nav>
                   <header className="footer-title">Company</header>
                    <div className='grid grid-cols-2 gap-5'>
                        <img className='w-24 h-20 rounded-md' src={img_1} alt="" srcset="" />
                        <img className='w-24 h-20 rounded-md' src={img_2} alt="" srcset="" />
                        <img className='w-24 h-20 rounded-md' src={img_3} alt="" srcset="" />
                        <img className='w-24 h-20 rounded-md' src={img_4} alt="" srcset="" />
                    </div>
                </nav>
            </footer>
            <p className='text-center py-5'>all right reserved.created by shahadat hossain</p>
        </div>
    );
};

export default Footer;