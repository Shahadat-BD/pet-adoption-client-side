import './Banner.css'
const Banner = () => {
    return (
             <div className='banner-added'>
            <div className='flex items-center lg:h-[850px] h-[550px] lg:pl-20 pl-5'>
                <div>
                    <h1 className='lg:text-3xl md:text-2xl text-lg text-white font-extrabold'> welcome to </h1>
                     <p className='lg:text-5xl md:text-2xl text-xl text-white font-extrabold lg:my-3'> <span className='text-[#ef233c]'>pet adoption</span> platform</p>
                     <p className='lg:text-5xl md:text-2xl text-xl text-white font-extrabold'>In the world</p>
                     <p className='text-[#ffffffc9] lg:w-1/2 w-full text-left mt-5'>Welcome to our Pet adopt platform, where tails wag and hearts connect. Discover a sanctuary for love and companionship. Our pet adoption platform is dedicated to uniting families with furry friends. Browse, adopt, and embark on a journey of joy, one pawprint at a time. Your new adventure begins here! </p>
                <button className='text-white bg-[#ef233c] lg:px-8 lg:py-2 px-4 py-2  lg:mt-10 mt-5 font-bold lg:text-lg text-md items-center '>Explore Now </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;