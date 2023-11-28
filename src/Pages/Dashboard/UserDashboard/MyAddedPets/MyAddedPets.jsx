import React, { useContext } from 'react';
import useAddedPets from '../../../../hooks/useAddedPets';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
const MyAddedPets = () => {
    const {user} = useContext(AuthContext)
    const [refetch,pets] = useAddedPets()
    const axiosSecure = useAxiosSecure()
    const loggedInUserPet = pets.filter((pet) => pet.email === user.email)

    

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
        <div className='pt-5 lg:px-20  bg-[#F6F6F6] h-[100%]'>
            
          {/* all my added data */}
          <div className='bg-[white] p-8 mb-10'>
             <p className='uppercase text-xl font-semibold logo mb-5'>Added My total Pets : {loggedInUserPet.length} </p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#2C3E50] text-white'>
                            <tr>
                                <th>NUMBER</th>
                                <th>IMAGE</th>
                                <th>PET NAME</th>
                                <th>CATEGORY</th>
                                <th>STATUS</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                                <th>ADOPTED</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}

                            {
                                 loggedInUserPet.map((pet,index) =>
                                    <tr key={pet._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <img className='w-12 h-12 rounded-full' src={pet.image} alt="" srcset="" />
                                        </td>
                                        <td>
                                           {pet.petName}
                                        </td>
                                        <td>
                                           {pet.category}

                                        </td>
                                        <td>
                                            { pet.adopted === false ? "not adopted" : "adopted"}
                                        </td>
                                        <td>
                                           <Link to={`/dashboard/updateItem/${pet._id}`}> <button  className='bg-gray-500 p-2 rounded-md'><FaEdit className='text-white text-2xl'/></button></Link>
                                        </td>
                                         <td>
                                          <button onClick={()=>handleDeletePet(pet._id)}  className='bg-[#ef233c] p-2 rounded-md'><MdDelete className='text-white text-2xl'/></button>
                                        </td>
                                        <td>
                                            {
                                                pet.adopted === false ?  <button  onClick={()=>handleAdoptionStatus(pet._id)}  className='bg-gray-500 text-white p-2 rounded-md'>adopted</button>
                                                :
                                                <button  className='bg-gray-500 text-white p-2 rounded-md'>adopted</button> 
                                            }
                                         
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

export default MyAddedPets;