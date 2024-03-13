import React from 'react'
import Sora from '../assets/Blog/OpenAI_Sora_160224.webp'
const Blog = () => {
    return (
        <div className='px-6 md:px-16 pt-6 pb-10'>
            {/* heading  */}
            <div className='py-6'>
                {/* heading  */}
                <h1 className='text-center font-semibold text-xl md:text-3xl pb-2'>Latest From Our Blog</h1>
                {/* sub heading  */}
                <p className='text-center hidden sm:block'>Resources to help your business grow better</p>
            </div>

            {/* blog  */}
            <div className='flex flex-col md:flex-row'>
                {/* image  */}
                <div className='py-5 flex-1'>
                    <img className='z-0 max-h-[300px] w-[100%]' src={Sora} alt="" />
                    <h1 className='z-1 text-2xl text-semibold bg-blue-100 rounded-b-md' >[Blog] Here's All You Need to Know About OpenAI's Text-To-Video Model 'Sora'</h1>
                </div>
                {/* content  */}
                <div className='flex-1 md:pl-10 pb-14'>
                    <div className='py-2 px-4'>
                        <h1 className='font-medium'>Tira &amp; Haptik Partner to Reimagine Customer Experience with Gen AI</h1>
                        <p className='text-blue-700 font-medium'>Read now &rarr;</p>
                    </div>

                    <div className='py-2 px-4'>
                        <h1 className='font-medium'>Jio Haptik Surpasses 15 Billion Conversations, Leading India’s AI Market</h1>
                        <p className='text-blue-700 font-medium'>Read now &rarr;</p>
                    </div>

                    <div className='py-2 px-4'>
                        <h1 className='font-medium'>Customer Service: 5 Ways Generative AI Is Transforming the Game</h1>
                        <p className='text-blue-700 font-medium'>Read now &rarr;</p>
                    </div>

                    <div className='py-2 px-4'>
                        <h1 className='font-medium'>10 Best AI Chatbots In India (Updated 2024)</h1>
                        <p className='text-blue-700 font-medium'>Read now &rarr;</p>
                    </div>

                    <div className='py-2 px-4'>
                        <h1 className='font-medium'>[eBook] The State of WhatsApp Marketing 2023</h1>
                        <p className='text-blue-700 font-medium'>Read now &rarr;</p>
                    </div>
                </div>
            </div>

            <div className='bg-blue-700 rounded-md lg:rounded-3xl text-xl lg:text-3xl font-medium h-[200px] flex flex-col lg:flex-row justify-evenly items-center my-10'>
                <h1 className='text-center text-white text-2xl lg:text-3xl px-7 max-w-[650px]'>Shape the New Era of Customer Service with Generative AI</h1>
                <div>
                    <button className='text-blue-700 bg-white py-2 px-6 rounded-sm text-sm'>Get A Demo</button>
                </div>
            </div>
        </div>
    )
}

export default Blog