import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css'
import Retail from '../../assets/Home/Industry/Retial.webp'
import Fintech from '../../assets/Home/Industry/Fintech.webp'
import Insurance from '../../assets/Home/Industry/insurance-11-10-23.webp'
import HealthCare from '../../assets/Home/Industry/healthcare-11-10-23.webp'
import Travel from '../../assets/Home/Industry/travel-11-10-23.webp'
import Media from '../../assets/Home/Industry/Media&Ent-11-10-233.webp'
import Education from '../../assets/Home/Industry/education-11-10-23.webp'

const Industry = () => {

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

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          className: "",
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          className: "",
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          className: "",
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      },
      {
        breakpoint: 800,
        settings: {
          className: "",
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          className: "",
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      }
    ]
  }


  const settings2 = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          className: "",
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          className: "",
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
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  }


  return (
    <div className='m-3 max-w-[85%] mx-auto my-12'>
      {/* heading  */}
      <div className='my-10 md:my-4'>
        {/* main heading  */}
        <h1 className='text-center text-xl font-semibold md:text-3xl mb-4'>Solutions for Every Industry</h1>
        {/* sub heading  */}
        <p className='hidden md:block text-center '>Industry-specific use cases designed to increase leads, transactions, and repeat purchases</p>
      </div>

      {/* slide slick options */}

      <div className='m-2 '>
        <Slider {...settings}>
          {/* Retial */}
          <div>
            <div className='text-center font-medium  focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Retial
            </div>
          </div>
          {/* fintech */}
          <div>
            <div className='text-center font-medium focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Fintech
            </div>
          </div>
          <div>
            <div className='text-center font-medium focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Insurance
            </div>
          </div>
          {/* Healthcare */}
          <div>
            <div className='text-center font-medium  focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Healthcare
            </div>
          </div>
          {/* Travel & Hospitality */}
          <div>
            <div className='text-center font-medium  focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Travel & Hospitality
            </div>
          </div>
          {/* Media & Entertainment */}
          <div>
            <div className='text-center font-medium  focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Media & Entertainment
            </div>
          </div>
          {/* Education */}
          <div>
            <div className='text-center font-medium  focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Education
            </div>
          </div>
        </Slider>
      </div>


      {/* content slider  */}
      <div className=''>
        <Slider {...settings2}>
          {/* Retail  */}
          <div className='flex items-center w-[100%]'>
            <div className='flex flex-col md:flex-row mt-10'>
              <div className="flex-1">
                <h1 className='text-xl font-bold md:hidden'>Retail</h1>
                <img className='w-[100%]  mx-auto' src={Retail} alt="/" />
              </div>
              <div className="flex-1">
                <h1 className='text-3xl hidden md:block font-bold '>Retail</h1>
                <p className='my-4'>Tira, a personal care brand, partnered with Haptik to build a Generative AI-powered Assistant that could engage in natural conversations with buyers and help them find the right products. With conversational product discovery and personalized product recommendations enabled, the AI Assistant offers a seamless shopping experience leading to higher purchases and improved loyalty.</p>
                <h2 className='text-blue-500 font-medium text-xl'>Solutions for Retail &amp; eCommerce</h2>
              </div>
            </div>
          </div>
          
          {/* fintech  */}
          <div className='flex items-center w-[100%]'>
            <div className='flex flex-col md:flex-row mt-10'>
              <div className="flex-1">
                <h1 className='text-xl font-bold md:hidden'>Fintech</h1>
                <img className='w-[100%]  mx-auto' src={Fintech} alt="/" />
              </div>
              <div className="flex-1">
                <h1 className='text-3xl hidden md:block font-bold '>Fintech</h1>
                <p className='my-4'>
                Upstox, one of Asia’s largest investment platforms, partnered with Haptik to build a WhatsApp chatbot to onboard new users and guide them in their investment journey. Our solution helped Upstox handle ~4M conversations and onboard more than 220K customers.
              </p>
                <h2 className='text-blue-500 font-medium text-xl'>Solutions for Fintech</h2>
              </div>
            </div>
          </div>
          
          
          {/* Insurance  */}
          <div className='flex items-center w-[100%]'>
            <div className='flex flex-col md:flex-row mt-10'>
              <div className="flex-1">
                <h1 className='text-xl font-bold md:hidden'>Insurance</h1>
                <img className='w-[100%]  mx-auto' src={Insurance} alt="/" />
              </div>
              <div className="flex-1">
                <h1 className='text-3xl hidden md:block font-bold '>Insurance</h1>
                <p className='my-4'>
                One of Asia's most prominent insurance companies, Kotak Life, built a chatbot to enable policy purchases on WhatsApp. The WhatsApp Chatbot has been highly rated by users and has received a CSAT score of 82%.
              </p>
                <h2 className='text-blue-500 font-medium text-xl'>Solutions for Insurance</h2>
              </div>
            </div>
          </div>
          
          {/* HealthCare  */}
          <div className='flex items-center w-[100%]'>
            <div className='flex flex-col md:flex-row mt-10'>
              <div className="flex-1">
                <h1 className='text-xl font-bold md:hidden'>HealthCare</h1>
                <img className='w-[100%]  mx-auto' src={HealthCare} alt="/" />
              </div>
              <div className="flex-1">
                <h1 className='text-3xl hidden md:block font-bold '>HealthCare</h1>
                <p className='my-4'>
                Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users.
              </p>
                <h2 className='text-blue-500 font-medium text-xl'>Solutions for HealthCare</h2>
              </div>
            </div>
          </div>
     
          {/* Travel & hospitality  */}
          <div className='flex items-center w-[100%]'>
            <div className='flex flex-col md:flex-row mt-10'>
              <div className="flex-1">
                <h1 className='text-xl font-bold md:hidden'> Travel & hospitality  </h1>
                <img className='w-[100%]  mx-auto' src={Travel} alt="/" />
              </div>
              <div className="flex-1">
                <h1 className='text-3xl hidden md:block font-bold '> Travel & hospitality  </h1>
                <p className='my-4'>
                Jio Health Hub had a goal to increase user engagement and registrations, as well as provide proactive support. With Haptik's help, JIVA was created- a WhatsApp virtual assistant that led to a 21% growth in unique users.
              </p>
                <h2 className='text-blue-500 font-medium text-xl'>Solutions for  Travel & hospitality  </h2>
              </div>
            </div>
          </div>
          
          {/*Media*/}
          <div className='flex items-center w-[100%]'>
            <div className='flex flex-col md:flex-row mt-10'>
              <div className="flex-1">
                <h1 className='text-xl font-bold md:hidden'> Media & Entertainment  </h1>
                <img className='w-[100%]  mx-auto' src={Media} alt="/" />
              </div>
              <div className="flex-1">
                <h1 className='text-3xl hidden md:block font-bold '> Media & Entertainment  </h1>
                <p className='my-4'>
                The goal of Disney Hotstar was to provide scalable customer support with a fast and supremely efficient customer experience. Haptik built an intuitive WhatsApp chatbot that resulted in a 97% improvement in query resolution time, reducing first response time from three hours to 30 seconds.
              </p>
                <h2 className='text-blue-500 font-medium text-xl'>Solutions for   Media & Entertainment   </h2>
              </div>
            </div>
          </div>
              
          {/*Education*/}
          <div className='flex items-center w-[100%]'>
            <div className='flex flex-col md:flex-row mt-10'>
              <div className="flex-1">
                <h1 className='text-xl font-bold md:hidden'> Education</h1>
                <img className='w-[100%]  mx-auto' src={Education} alt="/" />
              </div>
              <div className="flex-1">
                <h1 className='text-3xl hidden md:block font-bold '>Education </h1>
                <p className='my-4'>
                Ryan International, a leading education institution, uses WhatsApp as a channel to regularly update students and push them further in their learning journey. The chatbot sends reminders, tips, progress reports, and learning materials on a regular basis.
              </p>
                <h2 className='text-blue-500 font-medium text-xl'>Solutions for Education  </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Industry