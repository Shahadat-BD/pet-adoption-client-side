import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateDonation = () => {
    const updateDonation = useLoaderData()
    const {petName,donationAmount,lastDate,shortInfo,longInfo,_id} = updateDonation
  
    const { register, handleSubmit} = useForm()
    const axiosPublic = useAxiosPublic ()
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
            const updateDonationInfo = {
                petName : data.petName,
                donationAmount : data.donationAmount,
                lastDate : data.lastDate,
                shortInfo : data.shortInfo,
                longInfo : data.longInfo,
                image : res.data.data.display_url
            }
            const updateDonation = await axiosSecure.patch(`/addCampaign/${_id}`,updateDonationInfo)
              if (updateDonation.data.modifiedCount > 0) {
                toast('donation campaign updated successfully')
              }
         }
    }
  

    return (
        <div className='lg:mx-24 mx-5  h-[100%] mb-5'>
        <h1 className='text-3xl font-bold my-5'> UPDATE DONATION</h1>
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
                  defaultValue={petName}
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
                  defaultValue={donationAmount}
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
                defaultValue={lastDate}
                placeholder='Last Date of Donation'/>
             </div>
             <div className='w-full'>
               <label>
                  <p className='label-text font-semibold'>short info</p>
               </label>
               <input className='form-control w-full bg-[#F5F2EB] border-none outline-none  p-3 pl-2 my-3 rounded-md' 
                {...register("shortInfo",{required:true})}
                type='text'
                defaultValue={shortInfo}
                placeholder='short info about donation campaign'/>
             </div>

             </div>
               <div>
               <label>
                  <p className='label-text font-semibold'>Long description</p>
               </label>
               <textarea className='form-control w-full bg-[#F5F2EB] border-none outline-none h-32 pl-2 my-3 rounded-md' 
                {...register("longInfo")}
                type='text'
                required
                defaultValue={longInfo}
                placeholder='pet description'/>
             </div>
               
               <div>
                  <label ><span className='font-semibold'>please added pet image</span></label>
                  <input {...register("image",{required:true})} required  type="file" className="w-full mt-5" />
               </div>
               
             <div>
              <button className='px-10 py-3 bg-[#ef233c] text-white rounded-md mt-6'  type="submit">
                  Donation campaign updated
              </button>
             </div>
        </form>
        <ToastContainer/>
  </div>
    );
};

export default UpdateDonation;