import React from 'react';
import contact from '../../assets/images/contact_img.png'
import { FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa';
const ContactUs = () => {
    return (
        <div className='my-16 lg:px-0 px-5'>
            <div className='flex lg:flex-row flex-col justify-around gap-5'>
                <div className='lg:w-1/2 w-full'>
                  <h1 className='text-3xl text-[#0A303A] font-semibold'>Contact Us</h1>
                   <h4 className='lg:text-4xl text-3xl text-[#0A303A] font-bold'>Let's Talk Question.</h4>
                   <p className='my-5 text-[#727171]'> Your Journey to Unconditional Love Begins Here – Explore,  Adopt, and Transform Lives on Our Pet Adoption Platform</p>
                   <div>
                     <label htmlFor="">
                        <p className='label-text font-semibold'>Your Name</p>
                     </label>
                     <input className='form-control w-full bg-[#F5F2EB] border-none outline-none py-3 pl-2 my-3 rounded-md' type="text" placeholder='abdur rahim' id="" />
                   </div>
                   <div>
                     <label htmlFor="">
                        <p className='label-text font-semibold'>Your Email</p>
                     </label>
                     <input className='form-control w-full bg-[#F5F2EB] border-none outline-none py-3 pl-2 my-3 rounded-md' type="text" placeholder='abdurrahim@gamil.com' id="" />
                   </div>
                   <div>
                     <label htmlFor="">
                        <p className='label-text font-semibold'>Your Message</p>
                     </label>
                     <textarea className='form-control w-full bg-[#F5F2EB] border-none outline-none rounded-md h-24 pl-2 my-3 ' name="" id="" placeholder='Opinion'/>
                   </div>
                    <button className='bg-[#ef233c] text-white px-8 py-3 mt-3 rounded-md text-lg font-bold'>Send Now</button>
                </div>
                 <div className='lg:mb-0 mb-10 lg:w-1/3 w-full bg-[#F5F2EB] rounded-xl'>
                    <img className='h-[300px] lg:w-3/4 m-auto p-5' src={contact} alt="" srcset="" />
                     <div className=''>
                         <div className='flex gap-5 my-5 items-center lg:ml-16 ml-7'>
                            <div className='bg-[#fff] flex items-center justify-center w-12 h-12 rounded-full'>
                              <FaLocationArrow className='text-[#ef233c]'/>
                            </div>
                              <div>
                                <p>shahadat's Industries Ltd.</p>  
                                <p>Agrabad,chittagong.</p>
                              </div>
                         </div>
                         <div className='flex gap-5 my-5 items-center lg:ml-16 ml-7'>
                            <div className='bg-[#fff] flex items-center justify-center w-12 h-12 rounded-full'>
                              <FaPhone className='text-[#ef233c]'/>
                            </div>
                              <div>
                                <p>+09979475454</p>  
                              </div>
                         </div>
                         <div className='flex gap-5 my-5 items-center lg:ml-16 ml-7'>
                            <div className='bg-[#fff] flex items-center justify-center w-12 h-12 rounded-full'>
                              <FaMailBulk className='text-[#ef233c]'/>
                            </div>
                              <div>
                                <p>shahadat@gmail.com</p>
                              </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default ContactUs;