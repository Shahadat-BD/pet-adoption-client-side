import React from 'react';
import category_1 from '../../assets/category/adopt-cat.jpg'
import category_2 from '../../assets/category/adopt-dog.jpeg'
import category_3 from '../../assets/category/adopt-goat.jpg'
import category_4 from '../../assets/category/adopt-rabbit.jpg'
const PetsCategory = () => {
    return (
        <div className='mt-16 lg:px-0 px-5'>
             <h1 className='text-3xl text-[#0A303A] font-bold my-5'>Our Pet Category</h1>
                <p className='mb-8 text-[#727171] lg:w-1/2 w-full'> This is a pets category section. only people can taken adopt above this pet.so taken any pet adopt please going to pet listing route.</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
               <div>
               <img className='lg:w-[300px] w-full h-[250px] rounded-lg' src={category_1} alt="" srcset="" />
                <p className='text-xl text-[#0A303A] font-bold my-2'>Charlie Cat</p>
                 <p>Meet your new feline friend! Our adorable cats are ready to bring joy and companionship into your home. Adopt today and experience the purrfect love of a forever friend. </p>
                
               </div>
                <div>
               <img className='lg:w-[300px] w-full h-[250px] rounded-lg' src={category_2} alt="" srcset="" />
                <p className='text-xl text-[#0A303A] font-bold my-2'>Bentley Dog </p>
                 <p>Discover joy and loyalty in a furry friend! Meet our lovable dogs awaiting a forever home. Adopt today and experience the unconditional love only a rescue dog can bring.</p>
                
               </div>
                <div>
               <img className='lg:w-[300px] w-full h-[250px] rounded-lg' src={category_3} alt="" srcset="" />
                <p className='text-xl text-[#0A303A] font-bold my-2'>Pinecone goat</p>
                 <p>Meet our charming goat waiting for a loving home! With a heart full of joy and a playful spirit, this delightful companion is ready to bring happiness to your farm. Adopt today and make a forever friend.</p>
                
               </div>
                <div>
               <img className='lg:w-[300px] w-full h-[250px] rounded-lg' src={category_4} alt="" srcset="" />
                <p className='text-xl text-[#0A303A] font-bold my-2'>Thumper Rabbit</p>
                 <p>Meet our adorable rabbit waiting for a loving home! Embrace joy and hop into companionship by adopting this furry friend. Your heart and home will be forever enriched!</p>
                
               </div>
            </div>
        </div>
    );
};

export default PetsCategory;