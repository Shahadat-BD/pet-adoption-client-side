
import { useContext } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const AdoptionRequest = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {refetch,data: adoptRequest = []} = useQuery({
         queryKey : ['adoptRequest'],
         queryFn : async ()=>{
             const res = await axiosSecure.get('/adoptReq')
             return res.data
         }
    })


const userReqInfo = adoptRequest.filter(req => req.petOwnerEmail === user.email)
const userAdoptionInfo = adoptRequest.filter(req => req.email === user.email)


// petOwner accepted user adoption request.
  const handleAcceptButton = request => {
    Swal.fire({
        title: "Are you sure?",
        text: "You want to accept his/her adoption request!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I accept!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.patch(`/adoptReq/${request._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "user!",
                        text: `${request.petName} is an adopted now.`,
                        icon: "success"
                      });
                   refetch()
                }
            })
        }
      })

  }
//   rejected 
// petOwner reject user adoption request.
 const handleRejectButton = request => {
    Swal.fire({
        title: "Are you sure?",
        text: "You want to reject his/her adoption request!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I want to reject this request!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.put(`/adoptReq/${request._id}`,{accept: false})
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Adoption Request!",
                        text: `adoption request for ${request.petName} is an rejected now.`,
                        icon: "success"
                      });
                   refetch()
                }
            })
        }
      })
 }
    

    return (
        
        <div className='pt-5 lg:px-5 px-5  bg-[#F6F6F6] h-[100%]'>
            
        {/* all pet adoption request user data */}
        <div className='lg:bg-[white] lg:p-8 '>
           <p className='uppercase text-xl font-semibold logo mb-5'>total adoption request :{userReqInfo ? userReqInfo.length : userAdoptionInfo.length} </p>
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
                             userReqInfo &&
                             userReqInfo.map((requestUser) =>
                               
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
                                        { requestUser.accept === true ? <button  className='bg-blue-500 text-white p-2 rounded-md'>Accepted</button> : <button onClick={()=>handleAcceptButton(requestUser)} className='bg-gray-500 text-white p-2 rounded-md'>Accept</button>}
                                      </td>
                                      <td>
                                      { requestUser.accept === false ? <button  className='bg-red-500 text-white p-2 rounded-md'>Rejected</button> : <button onClick={()=>handleRejectButton(requestUser)}  className='bg-gray-500 text-white p-2 rounded-md'>Reject</button>}
                                      </td>
                                  </tr>
                              )
                          }
                          {
                            userAdoptionInfo && 
                            userAdoptionInfo.map((requestUser) =>
                               
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
                                         { requestUser.accept === true ?  <button  className='bg-blue-500 text-white p-2 rounded-md'>Accepted</button> : <button  className='bg-gray-500 text-white p-2 rounded-md'>Accept</button>}
                                      </td>
                                      <td>
                                       { requestUser.accept === false ? <button  className='bg-red-500 text-white p-2 rounded-md'>Rejected</button> : <button  className='bg-gray-500 text-white p-2 rounded-md'>Reject</button>}
                                      </td>
                                  </tr>
                              )
                          }

                          {/* {
                            adoptReq.filter()
                          } */}

                      </tbody>
                  </table>
              </div>

          </div>
      </div>

    );
};

export default AdoptionRequest;