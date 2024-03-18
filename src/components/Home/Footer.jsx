import React from 'react'
import Twitter from '../../assets/Home/Footer/twitter.svg'
import Linkdin from '../../assets/Home/Footer/linkdin.svg'
import Facebook from '../../assets/Home/Footer/facebook.svg'
import Instagram from '../../assets/Home/Footer/instagram.svg'
import Youtube from '../../assets/Home/Footer/youtube.svg'

const Footer = () => {
    return (
        <div className='px-6 md:px-16 pt-14 md:flex md:flex-wrap'>
            <div className='mb-8 md:w-[33%] lg:w-[15vw] xl:px-4'>
                <h1 className='font-bold mb-3'>Platform</h1>
                <p className='text-sm text-medium mb-2'>Gen-AI Web Q&A</p>
                <p className='text-sm text-medium mb-2'>Gen AI Sales Assistant</p>
                <p className='text-sm text-medium mb-2'>Smart Agent Chat</p>
                <p className='text-sm text-medium mb-2'>Conversation Studio</p>
                <p className='text-sm text-medium mb-2'>WhatsApp</p>
                <p className='text-sm text-medium mb-2'>Instagram Direct</p>
                <p className='text-sm text-medium mb-2'>Google Business Messages</p>
                <p className='text-sm text-medium mb-2'>Facebook Messenger</p>
                <p className='text-sm text-medium mb-2'>SMS</p>
                <p className='text-sm text-medium mb-2'>Web</p>
                <p className='text-sm text-medium mb-2'>Enterprise Security</p>
            </div>

            <div className='mb-8 md:w-[33%] lg:w-[15vw] xl:px-4'>
                <h1 className='font-bold mb-3'>Solutions</h1>
                <p className='text-sm text-medium mb-2'>Contact</p>
                <p className='text-sm text-medium mb-2'>Interakt</p>
                <p className='text-sm text-medium mb-2'>Commerce</p>
                <p className='text-sm text-medium mb-2'>Marketing</p>
                <p className='text-sm text-medium mb-2'>Customer Care</p>
            </div>

            <div className='mb-8 md:w-[33%] lg:w-[15vw] xl:px-4'>
                <h1 className='font-bold mb-3'>Industries</h1>
                <p className='text-sm text-medium mb-2'>Education</p>
                <p className='text-sm text-medium mb-2'>Fintech</p>
                <p className='text-sm text-medium mb-2'>Healthcare</p>
                <p className='text-sm text-medium mb-2'>Insurance</p>
                <p className='text-sm text-medium mb-2'>Media & Entertainment</p>
                <p className='text-sm text-medium mb-2'>Mortgage</p>
                <p className='text-sm text-medium mb-2'>Retail</p>
                <p className='text-sm text-medium mb-2'>Telecom</p>
                <p className='text-sm text-medium mb-2'>Travel & Hospitality</p>
            </div>

            <div className='mb-8 md:w-[33%] lg:w-[15vw] xl:px-4'>
                <h1 className='font-bold mb-3'>Resources</h1>
                <p className='text-sm text-medium mb-2'>ROI Calculator</p>
                <p className='text-sm text-medium mb-2'>Reports & Research</p>
                <p className='text-sm text-medium mb-2'>Case Studies</p>
                <p className='text-sm text-medium mb-2'>Webinars</p>
                <p className='text-sm text-medium mb-2'>Tech Blog</p>
                <p className='text-sm text-medium mb-2'>Business Blog</p>
                <p className='text-sm text-medium mb-2'>Knowledge Center</p>
                <p className='text-sm text-medium mb-2'>Conversations on AI</p>
                <p className='text-sm text-medium mb-2'>Contakt vs Freshworks</p>
                <p className='text-sm text-medium mb-2'>Contakt vs Yellow.ai</p>
            </div>

            <div className='mb-4 md:w-[33%] lg:w-[13vw] xl:px-4'>
                <h1 className='font-bold mb-3'>Company</h1>
                <p className='text-sm text-medium mb-2'>Why Haptik</p>
                <p className='text-sm text-medium mb-2'>About Us</p>
                <p className='text-sm text-medium mb-2'>Careers</p>
                <p className='text-sm text-medium mb-2'>News & Media</p>
                <p className='text-sm text-medium mb-2'>Awards & Recognition</p>
                <p className='text-sm text-medium mb-2'>Contact Us</p>
                <p className='text-sm text-medium mb-2'>Partnerships</p>
                <p className='text-sm text-medium mb-2'>Investor Relations</p>
            </div>

            <div className='mb-8 md:w-[33%] lg:w-[15vw] xl:px-4'>
                <h1 className='font-bold mb-3'>Subscribe</h1>
                <p className='text-sm text-medium mb-6'>Sign up to recieve the latest updates</p>
                <input type="email" placeholder='Enter id*' className='block bg-slate-100 px-6 py-2' />
                <button className='text-white bg-blue-600 py-2 px-8 rounded-md text-sm font-semibold my-3'>Subscribe</button>
                <h1 className='font-bold mb-3'>Find us on </h1>
                <div className='flex'>
                    <img className='px-2' src={Twitter} alt="" />
                    <img className='px-2' src={Linkdin} alt="" />
                    <img className='px-2' src={Youtube} alt="" />
                    <img className='px-2' src={Instagram} alt="" />
                    <img className='px-2' src={Facebook} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer