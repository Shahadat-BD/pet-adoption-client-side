import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DjonationCamListDetails = () => {
    const { register, handleSubmit, reset } = useForm()
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const donationCampaignInfo = useLoaderData()
    const { petName, donationAmount,_id, image , shortInfo, longInfo} = donationCampaignInfo

  
   
    const onSubmit = (data) => {
        const donationUserInfo = {
              name : user?.displayName,
              email :user?.email,
              phoneNumber : data.number,
              address : data.address,
              donation : data.donation,
              campaignId : _id
        }
        
      axiosPublic.post('/donationUser',donationUserInfo)
      .then(res => {
           if(res.data.insertedId){
              toast("your donation successfully added in database.")
           }
      })
      reset()
  }



    return (
        <div className='pt-20 pb-10 lg:w-1/2 m-auto lg:px-0 px-5'>
            <img className='w-full lg:h-[350px] h-[300px] rounded-sm' src={image} alt="" srcset="" />
            <p className='font-bold text-4xl my-3'>{petName}</p>
            <p className='text-white my-4 text-lg font-bold absolute -mt-[116px] p-3 bg-[#ef233c]'>Needed donation amount : ${donationAmount}</p>
            <div>
                <h1 className='my-3 text-lg font-semibold border-l-4 pl-2 border-l-[#ef233c]'>short Information about donation</h1>
                <p className='text-[#626161ea]'>{shortInfo}</p>
            </div>
            <div>
                <h2 className='my-3 text-lg font-semibold border-l-4 pl-2 border-l-[#ef233c]'>Long Description about donation</h2>
                <p className='text-[#626161ea]'>{longInfo}</p>
            </div>
         
            <div>
                <div className='flex'>
                    <button className="bg-[#ef233c] font-bold text-white px-16 text-xl py-3 rounded-sm mt-5" onClick={() => document.getElementById('my_modal_3').showModal()}>Donate Now</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute bg-[#ef233c] text-white right-2 top-2">✕</button>
                            </form>
                            <form onSubmit={handleSubmit(onSubmit)}>
                               <div className='flex lg:flex-row flex-col gap-2'>
                               <div>
                                    <label className='font-bold'>Your name</label>
                                    <input disabled className='w-full my-5 px-10 py-2 border-2 rounded-md border-gray-200 form-control'  {...register("name")} defaultValue={user?.displayName} type="text" id="" />
                                </div>
                                <div>
                                    <label className='font-bold'>Your email</label>
                                    <input disabled  className='w-full my-5 px-10 py-2 border-2 rounded-md border-gray-200 form-control'  {...register("email")} defaultValue={user?.email} type="email" id="" />
                                </div>
                               </div>
                                <div className='flex lg:flex-row flex-col gap-2'>
                                <div>
                                    <label className='font-bold'>Your phone number</label>
                                    <input   className='w-full my-5 px-10 py-2 border-2 rounded-md border-gray-200 form-control'  {...register("number", { required: true })} placeholder='your phone number'  type="number" id="" />
                                </div>

                                <div>
                                    <label className='font-bold'>Your address</label>
                                    <input  className='w-full my-5 px-10 py-2 border-2 rounded-md border-gray-200 form-control'  {...register("address", { required: true })} placeholder='your address'  type="text" id="" />
                                </div>
                                </div>

                                <div>
                                    <label className='font-bold'>Your donation amount</label>
                                    <input   className='w-full my-5 px-10 py-2 border-2 rounded-md border-gray-200 form-control'  {...register("donation", { required: true })} placeholder='your donation write here'  type="number" id="" />
                                </div>
                             
                                    <input className='bg-[#ef233c] text-white rounded-md px-8 py-2 cursor-pointer' type="submit" value="donation submit" />
                            
                            </form>
                        </div>
                    </dialog>
                    {/* modal end here */}
                </div>
            </div>
          
 <ToastContainer/>
        </div>
    );
};

export default DonationCamListDetails;