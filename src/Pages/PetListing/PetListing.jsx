import React, { useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Select from 'react-select'
import { Link } from 'react-router-dom';

const PetListing = () => {
    const axiosPublic = useAxiosPublic()
    const [searchItem,setSearchItem] = useState("")
    const options = [
        { value: 'cat', label: 'Cat' },
        { value: 'dog', label: 'Dog' },
        { value: 'rabbit', label: 'Rabbit' },
        { value: 'goat', label: 'Goat' }
      ]
    const { data : allPet = []} = useQuery({
        queryKey :['allPet'],
        queryFn : async()=>{
            const res = await axiosPublic.get('/addPet')
            return  res.data
        }
    })
  
    const handleChange = (e) => {
        console.log(e.value);
    }

    return (
        <div className='pt-20 pb-20 lg:px-0 px-5'>
            <div className='flex justify-between items-center'>
            <input type="search" onChange={(event)=>{setSearchItem(event.target.value)}} className='mb-10 mt-5 p-2 form-control outline-none border border-[#B3B3B3] rounded-md w-1/3' placeholder="search pet name" name="" id="" />
             <Select
              className='w-1/4 mb-10 mt-5'
              options={options}
              onChange={handleChange}
              />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
                {  
                    allPet.filter((val) => 
                     {    
                           if (searchItem === '') {
                                  return val;
                           }else if(val.petName.toLowerCase().includes(searchItem.toLowerCase())){
                                  return val;
                           }
                     }
                  ).map(pets => 
                    <div key={pets._id}>
                        <img className='h-[270px] w-full rounded-t-lg ' src={pets.image} alt="" srcset="" />
                        <p className='font-bold text-xl mt-3 mb-2'>{pets.petName}</p>
                        <p>{pets.date}</p>
                        <p>{pets.adopted === false ? 'not adopted' : "adopted"}</p>
                        <p className='text-gray-600'> Age : {pets.petAge}</p>
                        <p className='text-gray-600'> Location : {pets.petLocation}</p>
                       <Link to={`/addPet/${pets._id}`}> <button className='mt-2 px-5 py-2 font-bold bg-[#ef233c] text-white rounded-sm'>pet details</button></Link>
                    </div>
                    )

                }
            </div>
        </div>
    );
};

export default PetListing;