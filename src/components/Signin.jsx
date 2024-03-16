import React from 'react'
import Navbar from './Navbar'
import SwiperAni from './SwiperAni'
import Footer from './Footer'
import Badge from './Badge'
import Copyright from './Copyright'
import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className=''>
            <div>
                <Navbar />
            </div>

            <div className='px-4 md:px-16 py-8 flex flex-col lg:flex-row'>
                <div className='pr-14'>
                    {/* heading  */}
                    <h1 className='text-xl md:text-3xl font-medium text-center pb-6'><span className='text-blue-600'>Generative AI</span>-Powered Support to Win Lifelong Customers</h1>
                    {/* sub heading  */}
                    <h2 className='text-center md:text-xl font-medium pb-4'>With Haptik, you can:</h2>

                    <div className='py-3'>
                        <div className='flex'>
                            <span className='text-blue-500'>&#10004;</span>
                            <h1 className='px-2 font-bold'>Build a Generative AI Assistant in No Time!</h1>
                        </div>
                        <p className='text-center pl-5'>Turn your website into a chatbot & answer complex queries with dynamic APIs.</p>
                    </div>

                    <div className='py-3'>
                        <div className='flex'>
                            <span className='text-blue-500'>&#10004;</span>
                            <h1 className='px-2 font-bold'>Unlock Agent Efficiency with Agent Co-pilot</h1>
                        </div>
                        <p className='text-center pl-5'>Empower agents with Gen AI-powered chat suggestions, intent detection & other contextual information for effective query resolution.</p>
                    </div>

                    <div className='py-3'>
                        <div className='flex'>
                            <span className='text-blue-500'>&#10004;</span>
                            <h1 className='px-2 font-bold'>Drive Better Customer Outcomes with Analytics</h1>
                        </div>
                        <p className='text-center pl-5'>Retain customers and save on resources by improving average query resolution time, first-response time, ticket reopen rate, and more.</p>
                    </div>

                    <h1 className='text-blue-500 font-semibold text-center'>10+ Channels | 100+ Languages | Enterprise Grade Security</h1>
                </div>

                <div className='shadow-xl rounded-xl p-4 bg-blue-100 my-10 ml-10'>
                    <h1 className='text-center font-medium'>Sign up</h1>
                    <form className=''>
                        <input className='px-4 py-2 my-3 w-[100%] rounded-md' type="text" placeholder='First Name*' required/>
                        <input className='px-4 py-2 my-3 w-[100%] rounded-md' type="text" placeholder='Last Name' />
                        <input className='px-4 py-2 my-3 w-[100%] rounded-md' type="email" placeholder='Email*'required />
                        <input className='px-4 py-2 my-3 w-[100%] rounded-md' type="password" placeholder='New Password*' required/>
                        <input className='px-4 py-2 my-3 w-[100%] rounded-md' type="password" placeholder='Confirm Password*' required/>
                        <button className='p-2 bg-blue-600 w-[98%] rounded-lg text-white font-medium'>Sign up</button>
                        <p className='text-center text-blue-600 font-medium pt-5'><Link to="/login">Log in here!</Link></p>
                        <p className='text-center text-black-600 font-medium'><Link to="/login">Back</Link></p>
                    </form>
                </div>
            </div>

            <SwiperAni />
            <Footer />
            <Badge />
            <Copyright />
        </div>
    )
}

export default Signin