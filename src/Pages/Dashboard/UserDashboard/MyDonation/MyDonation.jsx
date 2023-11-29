import React, { useContext } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyDonation = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { data : myDonationInfo = []} = useQuery({
        queryKey :['myDonation'],
        queryFn : async()=>{
            const res = await axiosSecure.get('/donationUser')
            return  res.data
        }
    })
       const donatedInfo = myDonationInfo.filter(donatedUser => donatedUser.email === user.email)


       const handleRefund = donateInfo => {
             console.log(donateInfo);
       }


    return (
        <div className='pt-5 px-5  bg-[#F6F6F6] h-[100%]'>
            
        {/* all user data */}
        <div className='bg-[white] p-8 mb-10'>
           <p className='uppercase text-xl font-semibold logo mb-5'>TOTAL DONATED : {donatedInfo.length} </p>
              <div className="overflow-x-auto">
                  <table className="table">
                      {/* head */}
                      <thead className='bg-[#2C3E50] text-white'>
                          <tr>
                              <th>NUMBER</th>
                              <th>PET IMAGE</th>
                              <th>PET NAME</th>
                              <th>DONATED AMOUNT</th>
                              <th>ACTION</th>
                          </tr>
                      </thead>
                      <tbody>
                          {/* row */}

                          {
                               donatedInfo.map((donatedInfo,index) =>
                                  <tr key={donatedInfo._id}>
                                      <th>
                                          {index + 1}
                                      </th>
                                      <td>
                                          <img className='w-12 h-12 rounded-full' src={donatedInfo.image} alt="" srcset="" />
                                      </td>
                                      <td>
                                         {donatedInfo.petName}
                                      </td>
                                      <td>
                                         ${donatedInfo.donation}

                                      </td>
                                      <td>
                                           <button  onClick={()=>handleRefund(donatedInfo)} className='bg-gray-500 p-2 text-white rounded-md'>Refund</button>
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

export default MyDonation;