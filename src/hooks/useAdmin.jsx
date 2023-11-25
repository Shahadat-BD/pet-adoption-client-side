import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const {user,loading} = useContext(AuthContext)
     const {data : isAdmin, isPending : isAdminLoading} = useQuery({
         queryKey : [user?.email , 'isAdmin'],
         enabled : !loading,
         queryFn : async() =>{
            const res = await axiosSecure.get(`/user/admin/${user.email}`)
            console.log(res.data);
            return res.data?.admin;
         }
     })
     return [isAdmin,isAdminLoading]
};

export default useAdmin;