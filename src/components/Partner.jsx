import React from 'react'
import Expertise from '../assets/Partner/expertise.webp'
import Product from '../assets/Partner/product.webp'
import Scale from '../assets/Partner/scale.webp'

const Partner = () => {
    return (
        <div className=''>
            {/* content */}
            <div className='px-6 md:px-24'>
                {/* heading  */}
                <div className=''>
                    {/* main heading  */}
                    <h1 className='text-center text-xl md:text-3xl font-medium pb-3'>Why Partner with Haptik</h1>
                    {/* sub heading  */}
                    <p className='hidden sm:block text-center'>500+ Companies Have Partnered with Haptik to Grow Their Business</p>
                </div>
                {/* images  */}
                <div className='flex flex-col flex-wrap gap-12 md:flex-row md:justify-evenly py-10'>
                    <div className='px-4'>
                        <img className='mx-auto h-[63px] md:h-[108px]' src={Expertise} alt="/" />
                        <div className=''>
                            <h1 className='text-center text-lg font-semibold py-4'>10+ Years of AI Expertise</h1>
                            <p className='text-center md:max-w-[200px] lg:max-w-[300px]'>Haptik has been a pioneer in the field of AI for well over a decade, helping global brands unlock unprecedented success with our innovative solutions.</p>
                        </div>
                    </div>

                    <div className='px-4'>
                        <img className='mx-auto h-[63px] md:h-[108px]' src={Product} alt="/" />
                        <div className=''>
                            <h1 className='text-center text-lg font-semibold py-4'>Gen AI First Product</h1>
                            <p className='text-center md:max-w-[200px] lg:max-w-[300px]'>Our Gen AI-first product &amp; expert-driven implementation help our global partners stay ahead of the curve and deliver unparalleled customer experiences.</p>
                        </div>
                    </div>

                    <div className='px-4'>
                        <img className='mx-auto h-[63px] md:h-[108px]' src={Scale} alt="/" />
                        <div className=''>
                            <h1 className='text-center text-lg font-semibold py-4'>Experience With Scale</h1>
                            <p className='text-center md:max-w-[200px] lg:max-w-[300px]'>Scale seamlessly as you grow your business. Brands such as Paisabazaar, Jio, Paytm have partnered with us to scale their support and engagement</p>
                        </div>
                    </div>
                </div>
                {/* stats  */}
                <div className='flex lg:flex-row flex-col gap-10 w-[80%] mx-auto py-10'> 
                    <div className='flex-1 flex flex-row justify-between'>
                        <div>
                            <h1 className='text-4xl md:text-5xl text-blue-600 font-medium text-center mx-5'>15B+</h1>
                            <p className='h-[27px] mx-5 text-center'>interaction processed</p>
                        </div>
                        <div className=''>
                            <h1 className='text-4xl md:text-5xl text-blue-600 font-medium text-center mx-5'>10M</h1>
                            <p className='h-[27px] mx-5 text-center'>transaction processed</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row justify-between">
                        <div>
                            <h1 className='text-4xl md:text-5xl text-blue-600 font-medium text-center mx-5'>4.5/5</h1>
                            <p className='h-[27px] mx-5 text-center'>rating on G2</p>
                        </div>
                        <div>
                            <h1 className='text-4xl md:text-5xl text-blue-600 font-medium text-center mx-5'>500</h1>
                            <p className='h-[27px] mx-5 text-center'>enterprice customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner