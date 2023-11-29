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

   allPet.forEach(item => {
        const [month, day, year] = item.date.split('/');
        item.date = new Date(`20${year}`, month - 1, day); // Assuming the years are in the 21st century
      });
      
      // SortingallPet in descending order based on the 'date' property
     allPet.sort((a, b) => b.date - a.date);
      
      // Formatting date objects back to MM/DD/YY
     allPet.forEach(item => {
        const formattedDate = item.date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
        item.date = formattedDate;
      });

    return (
        <div className='pt-20 pb-20 lg:px-0 px-5'>
            <div className='flex lg:flex-row flex-col justify-between items-center'>
            <input type="search" onChange={(event)=>{setSearchItem(event.target.value)}} className='mb-10 mt-5 p-2 form-control outline-none border border-[#B3B3B3] rounded-md lg:w-1/3 w-full' placeholder="search pet name" name="" id="" />
             <Select
              className='lg:w-1/4 w-full mb-10 mt-5'
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
                          pets.adopted === false ? 
                           <div key={pets._id}>
                                <img className='h-[270px] w-full rounded-t-lg ' src={pets.image} alt="" srcset="" />
                               <div className='flex justify-between gap-2 items-center mt-3'>
                                    <p className='font-bold text-xl'>{pets.petName}</p>
                                    <p className='font-bold'>Date : {pets.date}</p>
                               </div>
                                <div className='flex justify-between items-center mt-2'>
                                    <p className='text-gray-600'> Age :{pets.petAge}</p>
                                    <p className='text-gray-600'> {pets.petLocation}</p>
                                </div>
                                <Link to={`/addPet/${pets._id}`}> <button className='mt-5 px-5 py-2 font-bold bg-[#ef233c] text-white rounded-sm'>pet details</button></Link>
                         </div>
                          : 
                          ''
                    )

                }
            </div>
        </div>
    );
};

export default PetListing;