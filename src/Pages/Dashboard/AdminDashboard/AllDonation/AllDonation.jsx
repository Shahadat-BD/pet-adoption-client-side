import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllDonation = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch, data : allDonation = []} = useQuery({
        queryKey :['allDonation'],
        queryFn : async()=>{
            const res = await axiosSecure.get('/addCampaign')
            return  res.data
        }
    }) 


    const handleDeleteDonation = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this donation!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/addCampaign/${id}`)
                .then(res =>{
                   if (res.data.deletedCount > 0) {
                       Swal.fire({
                           title: "Deleted!",
                           text: "donation campaign has been deleted successfully.",
                           icon: "success"
                         });
                      refetch()
                   }
                })
            }
          });
    }



    return (
        <div className='pt-5 lg:px-20  bg-[#F6F6F6] h-[100%]'>
            
        {/* all user data */}
        <div className='bg-[white] p-8 mb-10'>
           <p className='uppercase text-xl font-semibold logo mb-5'>ALL DONATION : {allDonation.length} </p>
              <div className="overflow-x-auto">
                  <table className="table">
                      {/* head */}
                      <thead className='bg-[#2C3E50] text-white'>
                          <tr>
                              <th>#</th>
                              <th>EMAIL</th>
                              <th>IMAGE</th>
                              <th>PET NAME</th>
                              <th>EDIT</th>
                              <th>DELETE</th>
                              <th>PAUSE</th>
                          </tr>
                      </thead>
                      <tbody>
                          {/* row */}

                          {
                               allDonation.map((donation,index) =>
                                  <tr key={donation._id}>
                                      <th>
                                          {index + 1}
                                      </th>
                                      <td>
                                      {donation.email}
                                      </td>
                                      <td>
                                      <img className='w-12 h-12 rounded-full' src={donation.image} alt="" srcset="" />
                                      </td>
                                      <td>
                                         {donation.petName}
                                      </td>

                                      <td>
                                          <Link to={`/dashboard/updateDonation/${donation._id}`}><button className='bg-gray-500 p-2 rounded-md'><FaEdit className='text-white text-2xl'/></button></Link>
                                      </td>
                                      <td>
                                         <button className='bg-[#ef233c] p-2 rounded-md' onClick={()=>handleDeleteDonation(donation._id)}><MdDelete className='text-white text-2xl'></MdDelete></button>
                                      </td>
                                      <td>
                                        <button className='bg-gray-500 text-white p-2 rounded-md'>paused</button>
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

export default AllDonation;