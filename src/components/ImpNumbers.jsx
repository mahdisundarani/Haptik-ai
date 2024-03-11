import React from 'react'
import Jio from '../assets/ImpNumbers/jio.webp'
import Logo1 from '../assets/ImpNumbers/Netmeds_card-logo.webp'
import Logo2 from '../assets/ImpNumbers/Starhublogo-card-logo.webp'
import Logo3 from '../assets/ImpNumbers/paisabazaar-card-logo.webp'
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
        <div className='flex flex-wrap justify-between md:m-9 xl:w-[1000px] xl:mx-auto'>
            {/* card 1 */}
            <div className='shadow-xl  hover:scale-105 duration-300 rounded-xl mx-4 my-2 md:w-[44%] md:px-2 md:py-8 flex-block lg:w-auto xl:w-[20%]'>
                <h1 className='text-4xl md:text-5xl text-blue-600 font-medium text-center'>68%</h1>
                <p className='text-center mt-1 mb-10 flex md:block'>repeat rate on whatsapp</p>
                <img className='h-24 md:h-10 mx-auto' src={Jio} alt="" />
            </div>
            {/* card 2 */}
            <div className='shadow-xl  hover:scale-105 duration-300 rounded-xl mx-4 my-2 md:w-[44%] md:px-2 md:py-8 flex-block lg:w-auto xl:w-[20%]'>
                <h1 className='text-4xl md:text-5xl text-blue-600 font-medium text-center'>3X</h1>
                <p className='text-center mt-1 mb-10 flex md:block'>Increase in generated leads</p>
                <img className='h-24 md:h-10 mx-auto' src={Logo1} alt="" />
            </div>
            {/* card 3 */}
            <div className='shadow-xl  hover:scale-105 duration-300 rounded-xl mx-4 my-2 md:w-[44%] md:px-2 md:py-8 flex-block lg:w-auto xl:w-[20%]'>
                <h1 className='text-4xl md:text-5xl text-blue-600 font-medium text-center'>125%</h1>
                <p className='text-center mt-1 mb-10 flex md:block'>Improvment in NPS</p>
                <img className='h-[75px] md:h-10 mx-auto' src={Logo2} alt="" />
            </div>
            {/* card 4 */}
            <div className='shadow-xl  hover:scale-105 duration-300 rounded-xl mx-4 my-2 md:w-[44%] md:px-2 md:py-8 flex-block lg:w-auto xl:w-[20%]'>
                <h1 className='text-4xl md:text-5xl text-blue-600 font-medium text-center'>99%</h1>
                <p className='mt-1 mb-10 w-[90%] text-center md:block'>Improvement in time </p>
                <img className='h-14 md:h-10 mx-2 md:mx-auto' src={Logo3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ImpNumbers