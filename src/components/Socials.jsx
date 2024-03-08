import React from 'react'
import Google from '../assets/Socials/google-social.webp'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import Border from '../assets/Socials/google-border.webp'
import Website from '../assets/Socials/Website-social.webp'
import Whatsapp from '../assets/Socials/whatsapp-social.webp'
import Instagram from '../assets/Socials/Instagram-social.webp'
import Messanger from '../assets/Socials/Messenger-social.webp'
const Socials = () => {

  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 6000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          className: "",
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 1400,
        settings: {
          className: "",
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          className: "",
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          className: "",
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          className: "",
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  }

  return (
    <div className='px-9 my-14 md:max-w-[1100px] lg:max-w-[1300px] mx-auto'>
      {/* heading  */}
      <div className='mb-10 sm:mb-2'>
        <h1 className='text-center text-xl sm:text-2xl lg:text-3xl font-medium'>Make Every Channel Count</h1>
      </div>
      {/* subheading  */}
      <div className='hidden sm:block mb-10'>
        <p className='text-center'>Offer a seamless customer experience with Generative AI-powered assistant</p>
      </div>
      {/* socials options */}
      <div className='flex space-x-8 justify-evenly overflow-hidden '>
        <div className=''>
          <button className='text-lg font-medium hover:text-lg hover:text-blue-600 hover:bg-blue-300 p-3 rounded-md focus:text-blue-600 focus:bg-blue-200'> Website</button>
        </div>
        <div className=''>
          <button className='text-lg font-medium hover:text-lg hover:text-blue-600 hover:bg-blue-300 p-3 rounded-md focus:text-blue-600 focus:bg-blue-200'> WhatsApp</button>
        </div>
        <div className=''>
          <button className='text-lg font-medium hover:text-lg hover:text-blue-600 hover:bg-blue-300 p-3 rounded-md focus:text-blue-600 focus:bg-blue-200'> Instagram</button>
        </div>
        <div className=''>
          <button className='text-lg font-medium hover:text-lg hover:text-blue-600 hover:bg-blue-300 p-3 rounded-md focus:text-blue-600 focus:bg-blue-200'> Messenger</button>
        </div>
        <div className=''>
          <button className='text-lg font-medium hover:text-lg hover:text-blue-600 hover:bg-blue-300 p-3 rounded-md focus:text-blue-600 focus:bg-blue-200'> Google</button>
        </div>
      </div>

      {/* Swiper */}
      <div className='h-auto w-[100%] overflow-hidden shadow-xl mt-10'>
        <Slider {...settings}>
          
          {/* Website */}
          <div className='flex items-center w-[100%]'>
            <div className='flex justify-center items-center flex-col md:flex-row '>
              <div className='md:w-[50%] mx-auto order-2 md:order-1 flex-1  '>
                <div className='flex px-3 py-5'>
                  <img className='' src={Border} alt="" />
                  <div className='flex flex-col justify-between px-10 py-9'>
                    <p className=''>Delight customer from your first interaction with them. Talk to them soon after they search for your brand on Google.</p>
                    <h1 className='text-xl text-blue-600 underline'>Explore Google Business Messages</h1>
                  </div>
                </div>
              </div>
              <div className='w-[70%] md:w-[50%] order-1 md:order-2 flex-1'>
                <img className='h-[400px] mx-auto' src={Website} alt="" />
              </div>
            </div>
          </div>
             
          {/* Whatsapp */}
          <div className='flex items-center w-[100%]'>
            <div className='flex justify-center items-center flex-col md:flex-row '>
              <div className='md:w-[50%] mx-auto order-2 md:order-1 flex-1  '>
                <div className='flex px-3 py-5'>
                  <img className='' src={Border} alt="" />
                  <div className='flex flex-col justify-between px-10 py-9'>
                    <p className=''>Maximize reach by connecting with customers on WhatsApp and improving their experience by enabling order tracking, appointment scheduling, product discovery & more. </p>
                    <h1 className='text-xl text-blue-600 underline'>Explore WhatsApp</h1>
                  </div>
                </div>
              </div>
              <div className='w-[70%] md:w-[50%] order-1 md:order-2 flex-1'>
                <img className='h-[400px] mx-auto' src={Whatsapp} alt="" />
              </div>
            </div>
          </div>
      
          {/* Instagram */}
          <div className='flex items-center w-[100%]'>
            <div className='flex justify-center items-center flex-col md:flex-row '>
              <div className='md:w-[50%] mx-auto order-2 md:order-1 flex-1  '>
                <div className='flex px-3 py-5'>
                  <img className='' src={Border} alt="" />
                  <div className='flex flex-col justify-between px-10 py-9'>
                    <p className=''>Improve response times, slash resolution times, and engage prospects with personalized product recommendations on the fourth-largest social media platform.</p>
                    <h1 className='text-xl text-blue-600 underline'>Explore Instagram</h1>
                  </div>
                </div>
              </div>
              <div className='w-[70%] md:w-[50%] order-1 md:order-2 flex-1'>
                <img className='h-[400px] mx-auto' src={Instagram} alt="" />
              </div>
            </div>
          </div>
          
      
          {/* Messanger */}
          <div className='flex items-center w-[100%]'>
            <div className='flex justify-center items-center flex-col md:flex-row '>
              <div className='md:w-[50%] mx-auto order-2 md:order-1 flex-1  '>
                <div className='flex px-3 py-5'>
                  <img className='' src={Border} alt="" />
                  <div className='flex flex-col justify-between px-10 py-9'>
                    <p className=''>Build strong customer relationships, slash support costs, and make it seamless for customers to contact your customer service in the blink of an eye. </p>
                    <h1 className='text-xl text-blue-600 underline'>Explore Messanger</h1>
                  </div>
                </div>
              </div>
              <div className='w-[70%] md:w-[50%] order-1 md:order-2 flex-1'>
                <img className='h-[400px] mx-auto' src={Messanger} alt="" />
              </div>
            </div>
          </div>
          
          {/* Google */}
          <div className='flex items-center w-[100%]'>
            <div className='flex justify-center items-center flex-col md:flex-row '>
              <div className='md:w-[50%] mx-auto order-2 md:order-1 flex-1  '>
                <div className='flex px-3 py-5'>
                  <img className='' src={Border} alt="" />
                  <div className='flex flex-col justify-between px-10 py-9'>
                    <p className=''>Engage and support your web visitors like never before with a Generative AI-powered Assistant. Say goodbye to slow response times & hello to instant, agile support 24/7. </p>
                    <h1 className='text-xl text-blue-600 underline'>Explore Web Channel </h1>
                  </div>
                </div>
              </div>
              <div className='w-[70%] md:w-[50%] order-1 md:order-2 flex-1'>
                <img className='h-[400px] mx-auto' src={Google} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Socials