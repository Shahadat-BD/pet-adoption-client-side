import React, { useContext, useState } from 'react';
import Select from 'react-select'
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddPet = () => {
  const [category, setCategory] = useState()
  const {user} = useContext(AuthContext)
//   current date and time
const currentDate =  new Date().toLocaleDateString()
const currentTime =  new Date().toLocaleTimeString();
//  pet  category 
const options = [
    { value: 'cat', label: 'Cat' },
    { value: 'dog', label: 'Dog' },
    { value: 'rabbit', label: 'Rabbit' },
    { value: 'goat', label: 'Goat' }
  ]

  const { register, handleSubmit,reset } = useForm()
  const axiosPublic = useAxiosPublic()
 
  const onSubmit =  async (data) => {
      // image upload to imageBB and get url.then send to database with others data.
       const imageFile = {image: data.image[0]}
      const res = await axiosPublic.post(image_hosting_api,imageFile,{
          headers : {
              'content-type' : "multipart/form-data"
          }
      })
       if (res.data.success) {
          const addPetInfo = {
                petName : data.petName,
                petAge : data.petAge,
                petLocation : data.petLocation,
                category : category.value,
                adopted : false,
                email : user.email,
                date : currentDate,
                time : currentTime,
                petOwnerInfo : data.petOwnerInfo,
                petDescription : data.petDescription,
                image : res.data.data.display_url
          }
            const petRes = await axiosPublic.post('/addPet',addPetInfo)
                 if (petRes.data.insertedId) {
                    toast('pet added in database successfully')
                 }
         reset()
       }
  }

    return (
        <div className='lg:mx-24 mx-5  h-[100%] mb-5'>
              <h1 className='text-4xl font-bold my-5'>ADD PET</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='flex lg:flex-row flex-col lg:gap-5'>
                     <div className='w-full'>
                        <label>
                            <p className='label-text font-semibold'>Pet Name</p>
                        </label>
                        <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md' 
                        type="text" 
                        {...register("petName",{required:true})}
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
                      
                      placeholder='pet location'/>
                   </div>
                   <div className='w-full'>
                     <label>
                        <p className='label-text font-semibold'>Pet owner info</p>
                     </label>
                     <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md' 
                      {...register("petOwnerInfo",{required:true})}
                      type='text'
                      placeholder='pet owner info'/>
                   </div>
                   </div>

                     <div>
                        <label className='label-text font-semibold'>category Name</label>
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
                      type='text'
                      placeholder='pet description'/>
                   </div>
                     
                     <div>
                        <label htmlFor="">please added pet image</label>
                        <input {...register("image",{required:true})} type="file" className="w-full" />
                     </div>
                     
                   <div>
                    <button className='px-10 py-3 bg-[#ef233c] text-white rounded-md mt-3'  type="submit">
                        add pet
                    </button>
                   </div>
              </form>
              <ToastContainer/>
        </div>
    );
};

export default AddPet;