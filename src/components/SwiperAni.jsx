import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import Logo from '../assets/Swipe/1.webp'
import Logo2 from '../assets/Swipe/2.svg'
import Logo3 from '../assets/Swipe/3.webp'
import Logo4 from '../assets/Swipe/4.webp'
import Logo5 from '../assets/Swipe/5.webp'
import Logo6 from '../assets/Swipe/6.webp'
import Logo7 from '../assets/Swipe/7.webp'
import Logo8 from '../assets/Swipe/8.webp'
import Logo9 from '../assets/Swipe/9.svg'

const SwiperAni = () => {
    const settings = {
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
              }
            },
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
        <div className='m-24 xl:mx-32 max-w-[1500px] '>
            {/* heading */}
            <div>
                <h1 className='text-2xl lg:text-3xl xl:text-4xl font-medium mb-10 text-center'>Trusted by 500+ Leading Brands</h1>
            </div>
            {/* swipper */}
            <div  className='h-auto w-[100%] overflow-hidden'>
                <Slider {...settings}>
                    <div className='flex justify-center items-center'>
                        <img className='h-14 md:px-4 lg:px-6 xl:px-6 2xl:px-16' src={Logo} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14 md:px-4 lg:px-6 xl:px-6 2xl:px-16' src={Logo2} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14 md:px-4 lg:px-6 xl:px-6 2xl:px-16 ' src={Logo3} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14 md:px-4 lg:px-6 xl:px-6 2xl:px-16' src={Logo4} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14 md:px-4 lg:px-6 xl:px-6 2xl:px-16' src={Logo5} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14 md:px-4 lg:px-6 xl:px-6 2xl:px-16' src={Logo6} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14 md:px-4 lg:px-6 xl:px-6 2xl:px-16' src={Logo7} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14 md:px-4 lg:px-6 xl:px-6 2xl:px-16' src={Logo8} alt="" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='h-14 md:px-4 lg:px-6 xl:px-6 2xl:px-16' src={Logo9} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
 
export default SwiperAni