import React from 'react';
import image_1 from '../../assets/insperationImage/insperational_image_1.jpg'
import image_2 from '../../assets/insperationImage/insperational_image_2.jpg'
import image_3 from '../../assets/insperationImage/insperational_image_3.jpg'
import image_4 from '../../assets/insperationImage/insperational_image_4.jpg'
import image_5 from '../../assets/insperationImage/insperational_image_5.jpg'
import image_6 from '../../assets/insperationImage/insperational_image_6.jpg'
import image_7 from '../../assets/insperationImage/insperational_image_7.jpg'
import image_8 from '../../assets/insperationImage/insperational_image_8.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay,  Pagination } from 'swiper/modules';

const CallToAction = () => {
    return (
      <div className='my-16 lg:px-0 px-5'>
     
     <h1 className='text-3xl text-[#0A303A] font-bold my-5'>Call To Action</h1>
     <p className='mb-8 text-[#727171] lg:w-1/2 w-full'> This is a pets insperational images with text.So that people encourages to adopt pets and give them a better life.</p>

          <Swiper
        autoplay={{
           delay : 2500
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
                 >
        
    
               <SwiperSlide>
                   <img className='w-full h-[250px] rounded-md' src={image_1} alt="" srcset="" />
               </SwiperSlide>
               <SwiperSlide>
                   <img className='w-full h-[250px] rounded-md' src={image_2} alt="" srcset="" />
               </SwiperSlide>
               <SwiperSlide>
                   <img className='w-full h-[250px] rounded-md' src={image_3} alt="" srcset="" />
               </SwiperSlide>
               <SwiperSlide>
                   <img className='w-full h-[250px] rounded-md' src={image_4} alt="" srcset="" />
               </SwiperSlide>
               <SwiperSlide>
                   <img className='w-full h-[250px] rounded-md' src={image_5} alt="" srcset="" />
               </SwiperSlide>
               <SwiperSlide>
                   <img className='w-full h-[250px] rounded-md' src={image_6} alt="" srcset="" />
               </SwiperSlide>
               <SwiperSlide>
                   <img className='w-full h-[250px] rounded-md' src={image_7} alt="" srcset="" />
               </SwiperSlide>
               <SwiperSlide>
                   <img className='w-full h-[250px] rounded-md' src={image_8} alt="" srcset="" />
               </SwiperSlide>
        
        </Swiper>
      </div>
    );
};

export default CallToAction;