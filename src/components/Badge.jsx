import React from 'react'
import L1 from '../assets/Badge/left-1.svg'
import L2 from '../assets/Badge/left-2.svg'
import L3 from '../assets/Badge/left-3.svg'
import L4 from '../assets/Badge/left-4.svg'
import L5 from '../assets/Badge/left-5.svg'
import R5 from '../assets/Badge/right-1.webp'
import R4 from '../assets/Badge/right-2.svg'
import R3 from '../assets/Badge/right-3.svg'
import R2 from '../assets/Badge/right-4.svg'
import R1 from '../assets/Badge/right-5.svg'

const Badge = () => {
    return (
        <div className='px-6 md:px-16'>
            <hr className='py-5' />
            <div className='md:hidden flex justify-center flex-wrap  pb-10'>
                <img className='h-[18vh] px-2' src={L4} alt="" />
                <img className='h-[18vh] px-2' src={L4} alt="" />
                <img className='h-[18vh] px-2' src={L4} alt="" />
            </div>

            <div className='hidden md:flex justify-between  pb-10'>
                <div className='flex'>
                    <img className='h-[13vh]' src={L1} alt="" />
                    <img className='h-[13vh]' src={L2} alt="" />
                    <img className='h-[13vh]' src={L3} alt="" />
                    <img className='h-[13vh]' src={L4} alt="" />
                    <img className='h-[13vh]' src={L5} alt="" />
                </div>
                <div className='flex'>
                    <img className='h-[13vh]' src={R1} alt="" />
                    <img className='h-[13vh]' src={R2} alt="" />
                    <img className='h-[13vh]' src={R3} alt="" />
                    <img className='h-[13vh]' src={R4} alt="" />
                    <img className='h-[13vh]' src={R5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Badge