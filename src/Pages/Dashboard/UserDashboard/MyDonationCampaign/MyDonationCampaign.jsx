import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const MyDonationCampaign = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { data : addedDonation = []} = useQuery({
        queryKey :['myDonation'],
        queryFn : async()=>{
            const res = await axiosSecure.get('/addCampaign')
            return  res.data
        }
    })
   const addedDonationInfo = addedDonation.filter(addDonationCampaign => addDonationCampaign.email === user.email)
   
   const { data : donators = []} = useQuery({
       queryKey :['donators'],
       queryFn : async()=>{
           const res = await axiosSecure.get('/donationUser')
           return  res.data
       }
   })
const donatorInfo = donators.filter(donator=> donator.donationOwner === user.email)


// handle paused button for when campaign owner paused then no one can donate.
const handlePausedButton = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You want to paused this donation campaign!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I paused!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.put(`/addCampaign/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "user!",
                        text: `your campaign is paused now.`,
                        icon: "success"
                      });
                   refetch()
                }
            })
        }
      })

  }
// handle Unpaused button for when campaign owner unpaused then anyone can donate.
//  const handleUnpausedButton = request => {
//     Swal.fire({
//         title: "Are you sure?",
//         text: "You want to reject his/her adoption request!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, I want to reject this request!"
//       }).then((result) => {
//         if (result.isConfirmed) {
//             axiosSecure.put(`/adoptReq/${request._id}`,{accept: false})
//             .then(res => {
//                 if (res.data.modifiedCount > 0) {
//                     Swal.fire({
//                         title: "Adoption Request!",
//                         text: `adoption request for ${request.petName} is an rejected now.`,
//                         icon: "success"
//                       });
//                    refetch()
//                 }
//             })
//         }
//       })
//  }


    return (
        <div className='pt-5 lg:px-5 px-2  bg-[#F6F6F6] h-[100%]'>
            
        {/* all user data */}
        <div className='bg-[white] p-5 mb-10'>
           <p className='uppercase text-xl font-semibold logo mb-5'>TOTAL MY DONATION CAMPAIGNS : {addedDonationInfo.length} </p>
              <div className="overflow-x-auto">
                  <table className="table">
                      {/* head */}
                      <thead className='bg-[#2C3E50] text-white'>
                          <tr>
                              <th>#</th>
                              <th>PET NAME</th>
                              <th>DONATION</th>
                              <th>DONATION PROGRESS</th>
                              <th>EDIT</th>
                              <th>PAUSE</th>
                              <th>VIEW DONATORS</th>
                          </tr>
                      </thead>
                      <tbody>
                          {/* row */}

                          {
                               addedDonationInfo.map((addedCampaign,index) =>
                                  <tr key={addedCampaign._id}>
                                      <th>
                                          {index + 1}
                                      </th>
                                      <td>
                                        {addedCampaign.petName}
                                      </td>
                                      <td>
                                         {addedCampaign.donationAmount}
                                      </td>
                                      <td>
                                       <progress className="progress progress-primary w-56" value={1000} max={addedCampaign.donationAmount}></progress>
                                      </td>

                                      <td>
                                         <Link to={`/dashboard/updateDonation/${addedCampaign._id}`}> <button  className='bg-gray-500 p-2 rounded-md'><FaEdit className='text-white text-2xl'/></button></Link>
                                      </td>

                                      <td>
                                       { addedCampaign.paused === false ? <button  className='bg-gray-500 p-2 rounded-md text-white text-sm'> unpaused </button>  :    <button onClick={()=>handlePausedButton(addedCampaign._id)} className='bg-gray-500 p-2 rounded-md text-white text-sm'> paused </button> }
                                      </td>
                                      
                                      <td>
                                        
                                      
                                         <div className='flex'>
                              
                                        { donatorInfo && <button  className='bg-blue-500 p-2 rounded-md text-white text-sm' onClick={() => document.getElementById('my_modal_3').showModal()}>view donator</button> }
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute bg-[#ef233c] text-white right-2 top-2">✕</button>
                            </form>
                            <div className='pt-5 lg:px-5 px-2  bg-[#F6F6F6] h-[100%]'>
            
            {/* all user data */}
            <div className=''>
               <p className='uppercase text-xl font-semibold logo mb-5'>TOTAL MY DONATORS : {donators.length} </p>
                  <div className="overflow-x-auto">
                      <table className="table">
                          {/* head */}
                          <thead className='bg-[#2C3E50] text-white'>
                              <tr>
                                  <th>#</th>
                                  <th>NAME</th>
                                  <th>EMAIL</th>
                                  <th>NUMBER</th>
                                  <th>ADDRESS</th>
                                  <th>DONATION</th>
                              </tr>
                          </thead>
                          <tbody>
                              {/* row */}
    
                              {
                                  donatorInfo.map(donator => 
                                        <tr key={donator._id} >
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                          {donator.name}
                                        </td>
                                        <td>
                                           {donator.email}
                                        </td>
                                        <td>
                                          {donator.phoneNumber}
                                        </td>
  
                                        <td>
                                          {donator.address}
                                        </td>
  
                                        <td>
                                          {donator.donation}
                                        </td>
                                    </tr>
                                    )
                                
                                  
                              }
    
                          </tbody>
                      </table>
                  </div>
    
              </div>
          </div>
                        </div>
                    </dialog>
                    {/* modal end here */}
                </div>
                                      
                                      </td>
                                  </tr>
                              )
                          }

                      </tbody>
                  </table>
              </div>

          </div>
      </div>
    );
};

export default MyDonationCampaign;




