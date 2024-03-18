import React, { useState } from 'react'
import Logo from '../../assets/Home/Navbar/haptik-logo.webp'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className=' mx-4 max-w-[1500px] '>
            {/* large scareen navbar  */}
            <div className='flex justify-between xl:justify-evenly'>
                {/* <img className='h-14 m-3' src={Logo} alt="" /> */}
                <Link to="/"><img className='h-14 m-3' src={Logo} alt="" /></Link>
                {/* large screen nav bar options*/}
                <div className='hidden xl:flex items-center'>
                    <ul className='flex'>
                        <li onClick={() => setIsOpen(!isOpen)} className='text-lg px-4 py-3 font-medium  hover:bg-[#00cccc] rounded-3xl'>
                            Solution
                            {isOpen && (
                                <div className='absolute top-20 bg-white py-4 shadow-lg w-[450px] px-6 rounded-3xl'>
                                    <h1 className=' font-medium'>By Product</h1>
                                    <div className='flex justify-between pt-4'>
                                        <div>
                                            <h2 className='text-sm'> <Link to="/contakt">Contackt</Link> </h2>
                                            <h3 className='text-xs font-[300]'>Gen AI-Powered CX Suite</h3>
                                        </div>
                                        <div>
                                            <h2 className='text-sm mr-4'>Intrackt</h2>
                                            <h3 className='text-xs font-[300]'>#1 WhatsApp Business Solution</h3>
                                        </div>
                                    </div>
                                    <h1 className='py-4 font-medium'>By Industry</h1>
                                    <div className='flex '>
                                        <div>
                                            <h3 className='text-sm font-[400]'>Retail</h3>
                                            <h3 className='text-sm font-[400]'>Fintech</h3>
                                            <h3 className='text-sm font-[400]'>Gaming</h3>
                                        </div>
                                        <div className='pl-48'>
                                            <h3 className='text-sm font-[400]'>Travel</h3>
                                            <h3 className='text-sm font-[400]'>Ed Tech</h3>
                                            <h3 className='text-sm font-[400]'>Healthcare</h3>
                                        </div>
                                    </div>


                                </div>
                            )
                            }

                        </li>
                        <li className='text-lg px-4 py-3 font-medium  hover:bg-[#00cccc] hover:text-white rounded-3xl'>Platform</li>
                        <li className='text-lg px-4 py-3 font-medium  hover:bg-[#00cccc] hover:text-white rounded-3xl'>Resources</li>
                        <li className='text-lg px-4 py-3 font-medium  hover:bg-[#00cccc] hover:text-white rounded-3xl'>About Us</li>
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