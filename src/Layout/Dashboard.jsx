import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png'
import useAdmin from '../hooks/useAdmin';
const Dashboard = () => {
    // TODO :
    const [isAdmin] = useAdmin()
    return (
        <div>
            <div className='flex lg:flex-row flex-col h-[100%]'>
                <div className='lg:w-[270px] w-full lg:h-[100vh] h-[100%] bg-[#2C3E50]'>
                    <ul className='menu'>
                        <div className='flex items-center text-center my-5'>
                          <img className='h-10' src={logo} alt="" srcset="" />
                           <p className='text-4xl text-white font-extrabold'>adopt</p>
                        </div>
                        {
                            isAdmin ?
                                <>
                                    <li className='text-lg font-medium'>
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? "#ef233c" : "white",
                                                background: isActive ? "none" : "none",
                                                fontWeight : 'bold'
                                        
                                            })}
                                            to={'/dashboard/users'}>ALL USER
                                        </NavLink>
                                    </li>
                                    <li className='text-lg font-medium'>
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? "#ef233c" : "white",
                                                background: isActive ? "none" : "none",
                                                fontWeight : 'bold'
                                            })}
                                            to={'/dashboard/allPets'}>ALL PETS
                                        </NavLink>
                                    </li>
                                    <li className='text-lg font-medium'>
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? "#ef233c" : "white",
                                                background: isActive ? "none" : "none",
                                                fontWeight : 'bold'
                                            })}
                                            to={'/dashboard/allDonation'}> ALL DONATION
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>

                                    <li className='text-lg font-medium'>
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? "#ef233c" : "white",
                                                background: isActive ? "none" : "none",
                                                fontWeight : 'bold'
                                            })}
                                            to={'/dashboard/addPet'}> ADD PET
                                        </NavLink>
                                    </li>
                                    <li className='text-lg font-medium'>
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? "#ef233c" : "white",
                                                background: isActive ? "none" : "none",
                                                fontWeight : 'bold'
                                            })}
                                            to={'/dashboard/myAddedPets'}>MY ADDED PETS
                                        </NavLink>
                                    </li>
                                    <li className='text-lg font-medium'>
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? "#ef233c" : "white",
                                                background: isActive ? "none" : "none",
                                                fontWeight : 'bold'
                                            })}
                                            to={'/dashboard/adoptionRequest'}> ADOPTION REQUEST
                                        </NavLink>
                                    </li>
                                    <li className='text-lg font-medium'>
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? "#ef233c" : "white",
                                                background: isActive ? "none" : "none",
                                                fontWeight : 'bold'
                                            })}
                                            to={'/dashboard/createDonationCampaign'}> CREATE DONATION CAMPAIGN
                                        </NavLink>
                                    </li>
                                    <li className='text-lg font-medium'>
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? "#ef233c" : "white",
                                                background: isActive ? "none" : "none",
                                                fontWeight : 'bold'
                                            })}
                                            to={'/dashboard/myDonationCampaign'}> MY DONATION CAMPAIGN
                                        </NavLink>
                                    </li>
                                    <li className='text-lg font-medium'>
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? "#ef233c" : "white",
                                                background: isActive ? "none" : "none",
                                                fontWeight : 'bold'
                                            })}
                                            to={'/dashboard/myDonation'}> MY DONATION
                                        </NavLink>
                                    </li>
                                </>
                        }

                        {/* shared nav link for admin and general users */}
                        <hr className='my-5' />
                        <li className='text-lg font-medium'>
                            <NavLink className={'hover:text-[#ef233c] text-white font-bold'}
                                style={({ isActive }) => ({
                                    background: isActive ? 'none' : 'none',
                                })}
                                to={'/'}> HOME
                            </NavLink>
                        </li>
                        <li className='text-lg font-medium'>
                            <NavLink className={'hover:text-[#ef233c] text-white font-bold'}
                                style={({ isActive }) => ({
                                    background: isActive ? 'none' : 'none',
                                })}
                                to={'/petListing'}>PET LISTING
                            </NavLink>
                        </li>
                        <li className='text-lg font-medium'>
                            <NavLink className={'hover:text-[#ef233c] text-white font-bold'}
                                style={({ isActive }) => ({
                                    background: isActive ? 'none' : 'none',
                                })}
                                to={'/donationCampaign'}>DONATION CAMPAIGN
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;