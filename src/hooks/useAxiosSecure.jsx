import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const axiosSecure = axios.create({
    baseURL:'http://localhost:3000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    // request interceptor to add authorization header for every secure call 
    // to the api.
    axiosSecure.interceptors.request.use(function(config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stop by interceptors',token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    },function(error) {
        return Promise.reject(error)
    });

    //  interceptor 401 and 403 status 
    axiosSecure.interceptors.response.use(function (response)  {
         return response
    }, async(error) => {
        const status =  error.response.status;
        // console.log('status error in the interceptor',status);
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;