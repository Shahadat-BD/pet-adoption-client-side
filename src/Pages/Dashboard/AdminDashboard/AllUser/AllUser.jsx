import { useQuery } from '@tanstack/react-query';
import { FaUsers } from 'react-icons/fa';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';


const AllUser = () => {
    const axiosSecure = useAxiosSecure() 
    const {refetch , data : users = []} = useQuery({
        queryKey :['users'],
        queryFn : async()=>{
            const res = await axiosSecure.get('/user')
            return  res.data
        }
    })
      // create admin 
    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to admin this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I make admin this user!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/admin/${user._id}`)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "admin!",
                            text: `${user.name} is an admin now.`,
                            icon: "success"
                          });
                       refetch()
                    }
                })
            }
          })
    }



return (
        <div className='pt-5 lg:px-20  bg-[#F6F6F6] h-[100%]'>
            
          {/* all user data */}
          <div className='bg-[white] p-8 mb-10'>
             <p className='uppercase text-xl font-semibold logo mb-5'>Total Users : {users.length} </p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#2C3E50] text-white'>
                            <tr>
                                <th>NUMBER</th>
                                <th>Image</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}

                            {
                                 users.map((user,index) =>
                                    <tr key={user._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <img className='w-12 h-12 rounded-full' src={user.photoURL} alt="" srcset="" />
                                        </td>
                                        <td>
                                           {user.name}
                                        </td>
                                        <td>
                                           {user.email}

                                        </td>
                                        <td>
                                            { user.role === 'admin' ? "admin" : <button  onClick={()=>handleMakeAdmin(user)} className='bg-gray-500 p-2 rounded-md'><FaUsers className='text-white text-2xl'/></button>}
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

export default AllUser;