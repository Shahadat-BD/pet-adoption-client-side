import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const CreateDonationCampaign = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

   //   current date and time
const currentDate =  new Date().toLocaleDateString()
const currentTime =  new Date().toLocaleTimeString();

    const onSubmit =  async (data) => {
        // image upload to imageBB and get url.then send to database with others data.
         const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers : {
                'content-type' : "multipart/form-data"
            }
        })
         if (res.data.success) {
            const campaignInfo = {
                  petName : data.petName,
                  donationAmount : data.donationAmount,
                  lastDate : data.lastDate,
                  email : user.email,
                  date : currentDate,
                  time : currentTime,
                  shortInfo : data.shortInfo,
                  longInfo : data.longInfo,
                  image : res.data.data.display_url
            }
              const campaignRes = await axiosSecure.post('/addCampaign',campaignInfo)
                   if (campaignRes.data.insertedId) {
                      toast('donation campaign info added in database successfully')
                   }
           reset()
         }
    }
    return (
        <div className='lg:mx-24 mx-5  h-[100%] mb-5'>
        <h1 className='text-xl font-bold my-5'>CREATE DONATION CAMPAIGN</h1>
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
                      <p className='label-text font-semibold'>Maximum Donation Amount</p>
                  </label>
                  <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md'
                  required 
                  type="number"
                  placeholder='Maximum Donation Amount'
                  {...register("donationAmount",{required:true})}
                  id="" />
               </div>
            </div>

             <div className='flex lg:flex-row flex-col lg:gap-5'>
             <div className='w-full'>
               <label>
                  <p className='label-text font-semibold'>Last Date of Donation</p>
               </label>
               <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  my-3 rounded-md' 
                type='date'
                {...register("lastDate",{required:true})}
                
                placeholder='Last Date of Donation'/>
             </div>
             <div className='w-full'>
               <label>
                  <p className='label-text font-semibold'>short info</p>
               </label>
               <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md' 
                {...register("shortInfo",{required:true})}
                type='text'
                placeholder='short info about donation campaign'/>
             </div>

             </div>
               <div>
               <label>
                  <p className='label-text font-semibold'>Long description</p>
               </label>
               <textarea className='form-control w-full bg-[#F5F2EB] border-none outline-none h-32 pl-2 my-3 rounded-md' 
                {...register("longInfo",{required:true})}
                type='text'
                placeholder='pet description'/>
             </div>
               
               <div>
                  <label >please added pet image</label>
                  <input {...register("image",{required:true})}  type="file" className="w-full mt-3" />
               </div>
               
             <div>
              <button className='px-10 py-3 bg-[#ef233c] text-white rounded-md mt-3'  type="submit">
                  add donation campaign
              </button>
             </div>
        </form>
        <ToastContainer/>
       </div>
    );
};

export default CreateDonationCampaign;