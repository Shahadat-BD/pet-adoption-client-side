import React from 'react';
import about from '../../assets/images/about.jpg'
const AboutUs = () => {
    return (
        <div className="lg:my-20 my-10 lg:px-0 px-5">
        <div className="flex lg:flex-row flex-col items-center justify-around gap-5">
          <div className="lg:mb-0 mb-10 lg:w-1/3 w-full">
          <img className=" lg:w-[400px] lg:h-[550px] md:h-[500px] md:m-auto md:w-[400px] w-full h-[500px] rounded-lg " src={about} alt=""  />
          </div>
          <div className="lg:w-1/2 w-full">
            <h3 className="text-[#ef233c] font-semibold text-md">About Us</h3>
            <h5 className="lg:text-2xl text-2xl dark:text-white font-bold my-3">Welcome to Our Pet Adoption Community. Discover the Joy of Rescuing a Furry Friend and Join Us in Building Forever Bonds with Loving Companions.</h5>
            <p className="text-[#737373] dark:text-[#ffffffa1] font-normal lg:w-[90%]">
              
            Welcome to  Pet Adoption Website, where love finds a furry friend and homes are filled with joy. Our platform is dedicated to connecting loving individuals with pets in need of a forever home. At Your Website Name, we believe in the transformative power of adoption, fostering meaningful connections between people and their new animal companions. Our user-friendly interface showcases adorable pets ready to join your family.
            </p>
            <p className="text-[#737373] dark:text-[#ffffffa1] font-normal lg:w-4/5 my-3">
            Each adoption contributes to the broader mission of promoting responsible pet ownership and ensuring the well-being of animals. Explore our comprehensive profiles, featuring heartwarming stories and captivating images, and embark on a journey of companionship. Join us in making a difference—one paw at a time. Together, let's create homes filled with love and wagging tails
            </p>
            <button className="bg-[#ef233c] text-white px-4 py-2 rounded-md font-semibold">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;