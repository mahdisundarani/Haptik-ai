import React from 'react'
import Jio from '../../assets/Home/ImpNumbers/jio.webp'
import Netmeds from '../../assets/Home/ImpNumbers/Netmeds_card-logo.webp'
import StarHub from '../../assets/Home/ImpNumbers/Starhublogo-card-logo.webp'
import PaisaBazaar from '../../assets/Home/ImpNumbers/paisabazaar-card-logo.webp'
const ImpNumbers = () => {
    return (
        <div className='m-10'>
            {/* heading  */}
            <div className=''>
                <h1 className='font-medium text-xl md:text-3xl text-center mb-4'>Haptik's Impact in Numbers</h1>
            </div>
            {/* subheading */}
            <div className='hidden md:flex justify-center'>
                <p className='text-center'>The tangible outcomes achieved by our clients</p>
            </div>
            {/* cards */}
            <div className='flex gap-6 sm:flex-wrap'>
                {/* card 1 */}
                <div className='shadow-xl hover:scale-105 duration-300 flex-1 pb-3'>
                    <h1 className='text-blue-600 font-medium text-center text-5xl'>68%</h1>
                    <p className='text-center pt-1 pb-5'>repeat rate on whatsapp commerce</p>
                    <img className='p-1 h-auto md:h-[43px] w-[100%]  md:w-auto md:mx-auto my-auto' src={Jio} alt="" />
                </div>
                {/* card 2 */}
                <div className='shadow-xl hover:scale-105 duration-300 flex-1 pb-3'>
                    <h1 className='text-blue-600 font-medium text-center text-5xl'>3X</h1>
                    <p className='text-center pt-1 pb-5'>increase in general leads</p>
                    <img className='p-1 h-auto md:h-[43px] w-[100%]  md:w-auto md:mx-auto my-auto' src={PaisaBazaar} alt="" />
                </div>
                    {/* card 1 */}
                    <div className='hidden sm:block shadow-xl hover:scale-105 duration-300 flex-1 pb-3'>
                    <h1 className='text-blue-600 font-medium text-center text-5xl'>125%</h1>
                    <p className='text-center pt-1 pb-5'>improvement in NPS</p>
                    <img className='p-1 h-auto md:h-[43px] w-[100%]  md:w-auto md:mx-auto my-auto' src={StarHub} alt="" />
                </div>
                {/* card 2 */}
                <div className='hidden sm:block shadow-xl hover:scale-105 duration-300 flex-1 pb-3'>
                    <h1 className='text-blue-600 font-medium text-center text-5xl'>99%</h1>
                    <p className='text-center pt-1 pb-5'>Improvement in response time</p>
                    <img className='p-1 h-auto md:h-[43px] w-[100%]  md:w-auto md:mx-auto my-auto' src={Netmeds} alt="" />
                </div>
            </div>


            <div className='sm:hidden flex gap-6 sm:flex-wrap pt-5 '>
                {/* card 1 */}
                <div className='shadow-xl hover:scale-105 duration-300 flex-1 pb-3'>
                    <h1 className='text-blue-600 font-medium text-center text-5xl'>125%</h1>
                    <p className='text-center pt-1 pb-5'>improvement in NPS</p>
                    <img className='p-1 h-auto md:h-[43px] w-[100%]  md:w-auto md:mx-auto my-auto' src={StarHub} alt="" />
                </div>
                {/* card 2 */}
                <div className='shadow-xl hover:scale-105 duration-300 flex-1 pb-3'>
                    <h1 className='text-blue-600 font-medium text-center text-5xl'>99%</h1>
                    <p className='text-center pt-1 pb-5'>Improvement in response time</p>
                    <img className='p-1 h-auto md:h-[43px] w-[100%] md:w-auto' src={Netmeds} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ImpNumbers