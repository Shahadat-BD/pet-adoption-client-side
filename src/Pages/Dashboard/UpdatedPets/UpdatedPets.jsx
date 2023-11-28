import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Select from 'react-select'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdatedPets = () => {
    const updatePets = useLoaderData()
    const [category, setCategory] = useState()   
  //  pet  category 
  const options = [
      { value: 'cat', label: 'Cat' },
      { value: 'dog', label: 'Dog' },
      { value: 'rabbit', label: 'Rabbit' },
      { value: 'goat', label: 'Goat' }
    ]
  
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
   
    const onSubmit =  async (data) => {
        // image upload to imageBB and get url.then send to database with others data.
         const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers : {
                'content-type' : "multipart/form-data"
            }
        })
         if (res.data.success) {
            const petUpdateInfo = {
                  petName : data.petName,
                  petAge : data.petAge,
                  petLocation : data.petLocation,
                  category : category.value,
                  petOwnerInfo : data.petOwnerInfo,
                  petDescription : data.petDescription,
                  image : res.data.data.display_url
            }
            const updatePetRes = await axiosSecure.patch(`/addPet/${updatePets._id}`,petUpdateInfo)
            if (updatePetRes.data.modifiedCount > 0) {
                toast('pet updated successfully')
            }
         }
    }
  

    return (
        <div className='lg:mx-24 mx-5  h-[100%] mb-5'>
        <h1 className='text-3xl font-bold my-5'> UPDATE PET</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex lg:flex-row flex-col lg:gap-5'>
               <div className='w-full'>
                  <label>
                      <p className='label-text font-semibold'>Pet Name</p>
                  </label>
                  <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md' 
                  type="text" 
                  {...register("petName",{required:true})}
                  defaultValue={updatePets.petName}
                  placeholder='pet name' 
                  id="" />
               </div>
               <div className='w-full'>
                  <label>
                      <p className='label-text font-semibold'>Pet age</p>
                  </label>
                  <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md'
                  required 
                  type="number"
                  placeholder='pet age'
                  {...register("petAge",{required:true})}
                  defaultValue={updatePets.petAge}
                  id="" />
               </div>
            </div>

             <div className='flex lg:flex-row flex-col lg:gap-5'>
             <div className='w-full'>
               <label>
                  <p className='label-text font-semibold'>Pet location</p>
               </label>
               <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md' 
                type='text'
                {...register("petLocation",{required:true})}
                defaultValue={updatePets.petLocation}
                
                placeholder='pet location'/>
             </div>
             <div className='w-full'>
               <label>
                  <p className='label-text font-semibold'>Pet owner info</p>
               </label>
               <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md' 
                {...register("petOwnerInfo",{required:true})}
                defaultValue={updatePets.petOwnerInfo}
                type='text'
                placeholder='pet owner info'/>
             </div>
             </div>

               <div>
                  <label className='label-text font-semibold'>category Name =  <span className='text-lg'>{updatePets.category}</span></label>
                  <Select
                       styles={{
                          control: (provided) => ({
                            ...provided,
                            boxShadow: "none",
                            border: "none",
                            padding : '6px',
                            marginTop : "12px",
                            marginBottom : '10px',
                            backgroundColor: "#F5F2EB",
                            width:"100%",
                          })
          
                        }}
                    options={options}
                    onChange={category => setCategory(category)}
                    required
                    />
               </div>

               <div>
               <label>
                  <p className='label-text font-semibold'>Pet description</p>
               </label>
               <textarea className='form-control w-full bg-[#F5F2EB] border-none outline-none h-32 pl-2 my-3 rounded-md' 
                {...register("petDescription",{required:true})}
                defaultValue={updatePets.petDescription}
                type='text'
                placeholder='pet description'/>
             </div>
               
               <div>
                  <label ><span className='font-semibold'>please added pet image</span></label>
                  <input {...register("image")}
                    type="file" 
                    className="w-full mt-3"
                    required
                    />
               </div>
               
             <div>
              <button className='px-10 py-3 bg-[#ef233c] text-white rounded-md mt-3'  type="submit">
                  update pet
              </button>
             </div>
        </form>
        <ToastContainer/>
  </div>
    );
};

export default UpdatedPets;