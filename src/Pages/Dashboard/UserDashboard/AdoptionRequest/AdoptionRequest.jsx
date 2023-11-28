
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const AdoptionRequest = () => {
  
    const axiosSecure = useAxiosSecure()
    const {data: adoptRequest = []} = useQuery({
         queryKey : ['adoptRequest'],
         queryFn : async ()=>{
             const res = await axiosSecure.get('/adoptReq')
             return res.data
         }
    })

    return (
        
        <div className='pt-5 lg:px-5  bg-[#F6F6F6] h-[100%]'>
            
        {/* all pet adoption request user data */}
        <div className='bg-[white] p-8 '>
           <p className='uppercase text-xl font-semibold logo mb-5'>total adoption request : {adoptRequest.length} </p>
              <div className="overflow-x-auto">
                  <table className="table">
                      {/* head */}
                      <thead className='bg-[#2C3E50] text-white'>
                          <tr>
                              <th>NAME</th>
                              <th>EMAIL</th>
                              <th>PHONE NUMBER</th>
                              <th>LOCATION</th>
                              <th>PET NAME</th>
                              <th>REQUEST</th>
                              <th>REJECT</th>
                              
                          </tr>
                      </thead>
                      <tbody>
                          {/* row */}

                          {
                              adoptRequest.map((requestUser) =>
                                  <tr key={requestUser._id}>
                                
                                      <td>
                                        {requestUser.name}
                                      </td>
                                      <td>
                                         {requestUser.email}
                                      </td>
                                      <td>
                                         {requestUser.phoneNumber}

                                      </td>
                                      <td>
                                          { requestUser.address}
                                      </td>
                                      <td>
                                      {requestUser.petName}
                                      </td>
                                      <td>
                                         <button className='bg-gray-500 text-white p-2 rounded-md'>Accept</button>
                                      </td>
                                      <td>
                                      <button className='bg-red-500 text-white p-2 rounded-md'>Reject</button>
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

export default AdoptionRequest;