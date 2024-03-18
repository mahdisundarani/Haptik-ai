import React, { useState } from 'react'
import Logo from '../../assets/Home/Navbar/haptik-logo.webp'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    
    return (
            <div className=' mx-4 max-w-[1500px] '>
                {/* large scareen navbar  */}
                <div className='flex justify-between xl:justify-evenly'>
                    <img className='h-14 m-3' src={Logo} alt="" />
                    {/* large screen nav bar options*/}
                    <div className='hidden xl:flex items-center'>
                        <ul className='flex'>
                            <li className='text-lg p-4 font-bold  hover:bg-blue-300 rounded-3xl'>Solutions</li>
                            <li className='text-lg p-4 font-bold  hover:bg-blue-300 rounded-3xl'>Platform</li>
                            <li className='text-lg p-4 font-bold  hover:bg-blue-300 rounded-3xl'>Resources</li>
                            <li className='text-lg p-4 font-bold  hover:bg-blue-300 rounded-3xl'>About Us</li>
                        </ul>
                    </div>
                    {/* button  */}
                    <div className='hidden xl:flex'>
                        <button className='bg-blue-600 text-white h-10 w-full mr-3 sm:w-40 lg:w-40 xl:w-40 font-bold rounded-md ml-5 mt-6 '><Link to="/login">Get A Demo</Link></button>
                    </div>
                    {/* logic of toggle */}
                    <div onClick={handleNav} className='xl:hidden mt-6 mr-10'>
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>
                </div>

                    {/* small screen navbar  */}
                <div className=''>
                    <ul className={nav ? 'm-3 mt-8 xl:hidden bg-white h-screen ease-in-out duration-500' : 'ease-in-out duration-500 hidden'}>
                        <li className='text-lg p-4 font-bold'>Solutions</li>
                        <li className='text-lg p-4 font-bold'>Platform</li>
                        <li className='text-lg p-4 font-bold'>Resources</li>
                        <li className='text-lg p-4 font-bold'>About Us</li>
                        <button className='bg-blue-600 text-white h-10 w-full sm:w-40 lg:w-40 xl:w-40 font-bold rounded-md mx-auto mt-6'>Get A Demo</button>
                    </ul>
                </div>
            </div>

    )
}

export default Navbar