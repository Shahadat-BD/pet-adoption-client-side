import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdDelete  } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
const AllPets = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch , data : allPets = []} = useQuery({
        queryKey :['allPets'],
        queryFn : async()=>{
            const res = await axiosSecure.get('/addPet')
            return  res.data
        }
    })
   const handleAdoptionStatus = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You want to adopted this pet!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I want to adopted this pet!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.put(`/addPet/${id}`,{adopted : true})
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "pet!",
                        text: `$ pet is an adopted now.`,
                        icon: "success"
                      });
                   refetch()
                }
            })
        }
      })
   } 

 
    const handleDeletePet = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this pet!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/addPet/${id}`)
                .then(res =>{
                   if (res.data.deletedCount > 0) {
                       Swal.fire({
                           title: "Deleted!",
                           text: "pet has been deleted successfully.",
                           icon: "success"
                         });
                      refetch()
                   }
                })
            }
          });
    }

    return (
        <div className='bg-[white]  p-5 mb-10'>
        <p className='uppercase text-xl font-semibold logo mb-5'>TOTAL PETS OF ALL USER : {allPets.length} </p>
           <div className="overflow-x-auto">
               <table className="table">
                   {/* head */}
                   <thead className='bg-[#2C3E50] text-white'>
                       <tr>
                           <th>#</th>
                           <th>EMAIL</th>
                           <th>IMAGE</th>
                           <th>PET NAME</th>
                           <th>CATEGORY</th>
                           <th>ADOPT REQ</th>
                           <th>UPDATE</th>
                           <th>DELETE</th>
                       </tr>
                   </thead>
                   <tbody>
                       {/* row */}

                       {
                            allPets.map((pets,index) =>
                               <tr key={pets._id}>
                                   <th>
                                       {index + 1}
                                   </th>
                                   <td>
                                   {pets.email}
                                   </td>
                                   <td>
                                   <img className='w-12 h-12 rounded-full' src={pets.image} alt="" srcset="" />
                                   </td>
                                   <td>
                                      {pets.petName}

                                   </td>
                                   <td>
                                     {pets.category}
                                   </td>
                                   <td>
                                    { pets.adopted === true ? 'adopted' : <button onClick={()=>handleAdoptionStatus(pets._id)}  className='bg-gray-500 text-white p-2 rounded-md'>not adopted</button>}
                                   </td>
                                   <td>
                                    <Link to={`/dashboard/updateItem/${pets._id}`}> <button  className='bg-gray-500 p-2 rounded-md'><FaEdit className='text-white text-2xl'/></button></Link>
                                   </td>
                                   <td>
                                   <button onClick={()=>handleDeletePet(pets._id)}   className='bg-[#ef233c] p-2 rounded-md'><MdDelete className='text-white text-2xl'/></button>
                                   </td>
                               </tr>
                           )
                       }

                   </tbody>
               </table>
           </div>

       </div>
    );
};

export default AllPets;