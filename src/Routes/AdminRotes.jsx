
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AdminRotes = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin()
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()


    if (loading || isAdminLoading) {
     return <div className='text-center'><span className="loading loading-spinner loading-xs my-20"></span></div>
  }
    if (user && isAdmin) {
        return children
    }

    return <Navigate to={'/'} state={{from : location}}></Navigate>
}
export default AdminRotes;