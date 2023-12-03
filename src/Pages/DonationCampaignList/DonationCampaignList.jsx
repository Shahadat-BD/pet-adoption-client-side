import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const DonationCampaignList = () => {
    const axiosSecure = useAxiosSecure()
    const { data : campaign = []} = useQuery({
        queryKey :['campaign'],
        queryFn : async()=>{
            const res = await axiosSecure.get('/addCampaign')
            return  res.data
        }
    })



    campaign.forEach(item => {
        const [month, day, year] = item.date.split('/');
        item.date = new Date(`20${year}`, month - 1, day); // Assuming the years are in the 21st century
      });
      
      // Sortingcampaign in descending order based on the 'date' property
     campaign.sort((a, b) => b.date - a.date);
      
      // Formatting date objects back to MM/DD/YY
     campaign.forEach(item => {
        const formattedDate = item.date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
        item.date = formattedDate;
      });



    return (
        <div className='pt-20 pb-20 lg:px-0 px-5'>
          
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7'>
                {  
                    campaign.map(donationCam => 
                    <div key={donationCam._id}>
                        <img className='h-[270px] w-full rounded-t-lg ' src={donationCam.image} alt="" srcset="" />
                        <p className='font-bold text-xl mt-3 mb-2'>{donationCam.petName}</p>
                        <p>Date : {donationCam.date}</p>
                        <p className='text-gray-600 font-bold'> donation amount : {donationCam.donationAmount}</p>
                        <p className='text-gray-600'> Donated Amount : 00 </p>
                       <Link to={`/addCampaign/${donationCam._id}`}> <button className='mt-2 px-5 py-2 font-bold bg-[#ef233c] text-white rounded-sm'>view details</button></Link>
                    </div>
                    )

                }
            </div>
        </div>
    );
};

export default DonationCampaignList;