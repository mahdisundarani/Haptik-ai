import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'

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

  return (
    <div className='m-3 max-w-[85%]  mx-auto'>
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
            <div className='text-center font-medium p-1 focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Retial
            </div>
          </div>
          {/* fintech */}
          <div>
            <div className='text-center font-medium p-1 focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              fintech
            </div>
          </div>
          <div>
            <div className='text-center font-medium p-1 focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Insurance
            </div>
          </div>
          {/* Healthcare */}
          <div>
            <div className='text-center font-medium p-1 focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Healthcare
            </div>
          </div>
          {/* Travel & Hospitality */}
          <div>
            <div className='text-center font-medium p-1 focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Travel & Hospitality
            </div>
          </div>
          {/* Media & Entertainment */}
          <div>
            <div className='text-center font-medium p-1 focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Media & Entertainment
            </div>
          </div>
          {/* Education */}
          <div>
            <div className='text-center font-medium p-1 focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl'>
              Education
            </div>
          </div>
        </Slider>
      </div>


      {/* content slider  */}
      <div className='flex mt-10'>
        <div className="flex-1">
            <img src="" alt="" />
        </div>
        <div className="flex-1">
            whatsapp
        </div>
      </div>

    </div>
  )
}

export default Industry