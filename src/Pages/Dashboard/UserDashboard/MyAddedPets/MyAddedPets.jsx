import React, { useContext } from 'react';
import useAddedPets from '../../../../hooks/useAddedPets';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
const MyAddedPets = () => {
    const {user} = useContext(AuthContext)
    const [pets] = useAddedPets()

    // TODO :
    // axiosPublic.patch(`/addPet/${_id}`,{adopted : true})
    // .then(res => {
    //     console.log(res.data);
    // })

    // addPet
    
    return (
        <div className='pt-5 lg:px-20  bg-[#F6F6F6] h-[100%]'>
            
          {/* all user table */}
          <div className='bg-[white] p-8 mb-10'>
             <p className='uppercase text-xl font-semibold logo mb-5'>Total Pets : {pets.length} </p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#2C3E50]  text-white'>
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
                                 pets.map((pet,index) =>
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
                                           <Link to={`/updatePet`}> <button  className='bg-gray-500 p-1 rounded-md'><FaEdit className='text-white text-2xl'/></button></Link>
                                        </td>
                                         <td>
                                          <button  className='bg-[#ef233c] p-1 rounded-md'><MdDelete className='text-white text-2xl'/></button>
                                        </td>
                                        <td>
                                          <button  className='bg-gray-500 text-white p-2 rounded-md'>adopted</button>
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