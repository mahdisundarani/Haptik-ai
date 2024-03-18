import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css'
import Jio from '../../assets/Home/Customers/JioMart_logo_200223.webp'
import Mark from '../../assets/Home/Customers/Mark_Zukerberg_220223.webp'
import Upstox from '../../assets/Home/Customers/upstox-27-1-23.svg'
import Shrini from '../../assets/Home/Customers/shrini-19-12-2022.webp'
import Kotak from '../../assets/Home/Customers/kotak-19-12-2022.svg'
import Kirti from '../../assets/Home/Customers/kotak-kirti-patil-19-12-2022.webp'
import Badge from '../../assets/Home/Customers/Badge-tile-.webp'

const Customers = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#006DEE" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#006DEE" }}
                onClick={onClick}
            />
        );
    }

    const settings = {

        className: "center",
        centerMode: true,
        centerPadding: "30px",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "30px",
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "30px",
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "30px",
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "40px",
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    className: "center",
                    centerMode: true,
                    centerPadding: "30px",
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            }
        ]
    }


    return (
        <div className='px-6 md:px-16'>
            {/* heading  */}
            <div className='pb-8'>
                <h1 className='text-center text-xl font-bold pb-3'>What Are Our Customers Saying?</h1>
                <p className='hidden md:block text-center'> About business impact achieved, solutions delivered & more</p>
            </div>

            {/* slider */}
            <div className='h-auto w-[100%] pb-8'>
                <Slider {...settings}>
                    {/* jio  */}
                    <div className='shadow-xl  hover:scale-105 duration-300 rounded-xl p-4 bg-blue-50 '>
                        <img className='h-[51px] mx-auto my-4' src={Jio} alt="" />
                        <p className='my-7'>"Excited to launch our partnership with JioMart in India. This is our first-ever end-to-end shopping experience on WhatsApp. People can now buy groceries from JioMart right in a chat."</p>
                        <hr className='py-3 font-bold' />
                        <div className='flex'>
                            <img className='h-[68px] rounded-full' src={Mark} alt="" />
                            <p className='p-4'> <span className='block font-medium'>Mark Zukerberg </span>  Founder & CEO, Meta</p>
                        </div>
                    </div>
                    {/* Upstocks  */}
                    <div className='shadow-xl  hover:scale-105 duration-300 rounded-xl p-4 bg-pink-50'>
                        <img className='h-[51px] mx-auto my-4' src={Upstox} alt="" />
                        <p className='my-7'>"Haptik has been pivotal in helping us explore the various engagement with an AI-powered chatbot, and giving us a competitive advantage in our mission to drive exceptional customer experiences at scale."</p>
                        <hr className='py-3 font-bold' />
                        <div className='flex'>
                            <img className='h-[68px] rounded-full' src={Shrini} alt="" />
                            <p className='p-4'> <span className='block font-medium'>Shrini Viswanath </span>  Founder & CEO, Upstox</p>
                        </div>
                    </div>
                    {/* Kotak  */}
                    <div className='shadow-xl  hover:scale-105 duration-300 rounded-xl p-4 bg-yellow-50'>
                        <img className='h-[51px] mx-auto my-4' src={Kotak} alt="" />
                        <p className='my-7'>"KAYA, Kotak Life’s AI-enabled virtual assistant, built along with Haptik, has helped improve customer servicing capabilities. Kotak Life is now resolving a large part of customer queries real-time 24/7."</p>
                        <hr className='py-3 font-bold' />
                        <div className='flex'>
                            <img className='h-[68px] rounded-full' src={Kirti} alt="" />
                            <p className='p-4'> <span className='block font-medium'>Kirti Patil </span>  Founder & CEO, Kotak Life</p>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* badge */}
            <div className='py-8 '>
                {/* heading  */}
                <h1 className='text-center text-2xl font-semibold pb-4'>Recognized as a Leading Software Across Categories</h1>
                {/* image  */}
                <img src={Badge} alt="" />
            </div>
        </div>
    )
}

export default Customers