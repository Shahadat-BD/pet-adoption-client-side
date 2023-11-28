import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAddedPets = () => {
     // USE Tan Stack Query
     const axiosSecure = useAxiosSecure()
    const {refetch,data: pets = []} = useQuery({
         queryKey : ['pets'],
         queryFn : async ()=>{
             const res = await axiosSecure.get('/addPet')
             return res.data
         }
    })
    return [refetch,pets]
};

export default useAddedPets;