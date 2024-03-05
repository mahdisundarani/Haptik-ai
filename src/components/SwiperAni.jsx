import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import Logo from '../assets/1.webp'
import Logo2 from '../assets/2.svg'
import Logo3 from '../assets/3.webp'
import Logo4 from '../assets/4.webp'
import Logo5 from '../assets/5.webp'
import Logo6 from '../assets/6.webp'
import Logo7 from '../assets/7.webp'
import Logo8 from '../assets/8.webp'
import Logo9 from '../assets/9.svg'
const SwiperAni = () => {
    const settings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return (
        <div className='m-8'>
            {/* heading */}
            <div>
                <h1 className='text-2xl font-bold mb-10 text-center'>Trusted by 500+ Leading Brands</h1>
            </div>
            {/* swipper */}
            <div  className='h-auto w-[90%] overflow-hidden ml-20'>
                <Slider {...settings}>
                    <div className='flex justify-center items-center'>
                        <img className='h-14' src={Logo} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14' src={Logo2} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14 ml-5' src={Logo3} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14' src={Logo4} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14' src={Logo5} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14' src={Logo6} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14' src={Logo7} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14' src={Logo8} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14' src={Logo9} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
 
export default SwiperAni