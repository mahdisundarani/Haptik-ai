import React from "react";
// swiper js start
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
//  end

import Retail from "../../assets/Home/Industry/Retial.webp";
import Fintech from "../../assets/Home/Industry/Fintech.webp";
import Insurance from "../../assets/Home/Industry/insurance-11-10-23.webp";
import HealthCare from "../../assets/Home/Industry/healthcare-11-10-23.webp";
import Travel from "../../assets/Home/Industry/travel-11-10-23.webp";
import Media from "../../assets/Home/Industry/Media&Ent-11-10-233.webp";
import Education from "../../assets/Home/Industry/education-11-10-23.webp";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Industry = () => {
  return (
    <div className="m-3 max-w-[85%] mx-auto my-12">
      {/* heading  */}
      <div className="my-10 md:my-4">
        {/* main heading  */}
        <h1 className="text-center text-xl font-semibold md:text-3xl mb-4">
          Solutions for Every Industry
        </h1>
        {/* sub heading  */}
        <p className="hidden md:block text-center ">
          Industry-specific use cases designed to increase leads, transactions,
          and repeat purchases
        </p>
      </div>

      {/* slide slick options */}

      <div className="m-2 flex">
        <button className="PrevSame text-5xl">
          <IoIosArrowDropleftCircle />
        </button>
        <Swiper
          // navigation={true}
          loop={true}
          modules={[Navigation]}
          navigation={{
            nextEl: ".NextSame",
            prevEl: ".PrevSame",
          }}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            {/* Retial */}
            <div className="px-7 py-4">
              <div className="text-center font-medium  focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl">
                Retial
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* fintech */}
            <div className="px-7 py-4">
              <div className="text-center font-medium focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl">
                Fintech
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* insurance */}
            <div className="px-7 py-4">
              <div className="text-center font-medium focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl">
                Insurance
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Healthcare */}
            <div className="px-7 py-4">
              <div className="text-center font-medium  focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl">
                Healthcare
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-7 py-4">
              <div className="text-center font-medium  focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl">
                Travel & Hospitality
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Media & Entertainment */}
            <div className="px-7 py-4">
              <div className="text-center font-medium  focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl">
                Media & Entertainment
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Education */}
            <div className="px-7 py-4">
              <div className="text-center font-medium  focus:bg-blue-200 focus:text-blue-700  focus:text-xl hover:text-xl hover:bg-blue-200 hover:text-blue-700 rounded-xl">
                Education
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="NextSame text-5xl">
          {" "}
          <IoIosArrowDroprightCircle value={{ color: "blue" }} />
        </button>
      </div>

      {/* content slider  */}
      <div className="">
        <Swiper
          loop={true}
          className="mySwiper"
          modules={[Navigation]}
          navigation={{
            nextEl: ".NextSame",
            prevEl: ".PrevSame",
          }}
        >
          {/* retial  */}
          <SwiperSlide>
            <div className="flex items-center w-[100%] ">
              <div className="flex flex-col md:flex-row mt-10">
                <div className="flex-1">
                  <h1 className="text-xl font-bold md:hidden">Retail</h1>
                  <img
                    className="w-[100%]  mx-auto"
                    src={Retail}
                    alt="/"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl hidden md:block font-bold ">
                    Retail
                  </h1>
                  <p className="my-4">
                    Tira, a personal care brand, partnered with Haptik to build
                    a Generative AI-powered Assistant that could engage in
                    natural conversations with buyers and help them find the
                    right products. With conversational product discovery and
                    personalized product recommendations enabled, the AI
                    Assistant offers a seamless shopping experience leading to
                    higher purchases and improved loyalty.
                  </p>
                  <h2 className="text-blue-500 font-medium text-xl">
                    Solutions for Retail &amp; eCommerce
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* fintech  */}
          <SwiperSlide>
            <div className="flex items-center w-[100%] ">
              <div className="flex flex-col md:flex-row mt-10">
                <div className="flex-1">
                  <h1 className="text-xl font-bold md:hidden">Fintech</h1>
                  <img
                    className="w-[100%]  mx-auto"
                    src={Fintech}
                    alt="/"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl hidden md:block font-bold ">
                    Fintech
                  </h1>
                  <p className="my-4">
                    Upstox, one of Asia’s largest investment platforms,
                    partnered with Haptik to build a WhatsApp chatbot to onboard
                    new users and guide them in their investment journey. Our
                    solution helped Upstox handle ~4M conversations and onboard
                    more than 220K customers.
                  </p>
                  <h2 className="text-blue-500 font-medium text-xl">
                    Solutions for Fintech
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Insurance  */}
            <div className="flex items-center w-[100%]">
              <div className="flex flex-col md:flex-row mt-10">
                <div className="flex-1">
                  <h1 className="text-xl font-bold md:hidden">Insurance</h1>
                  <img
                    className="w-[100%]  mx-auto"
                    src={Insurance}
                    alt="/"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl hidden md:block font-bold ">
                    Insurance
                  </h1>
                  <p className="my-4">
                    One of Asia's most prominent insurance companies, Kotak
                    Life, built a chatbot to enable policy purchases on
                    WhatsApp. The WhatsApp Chatbot has been highly rated by
                    users and has received a CSAT score of 82%.
                  </p>
                  <h2 className="text-blue-500 font-medium text-xl">
                    Solutions for Insurance
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* HealthCare  */}
            <div className="flex items-center w-[100%]">
              <div className="flex flex-col md:flex-row mt-10">
                <div className="flex-1">
                  <h1 className="text-xl font-bold md:hidden">HealthCare</h1>
                  <img
                    className="w-[100%]  mx-auto"
                    src={HealthCare}
                    alt="/"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl hidden md:block font-bold ">
                    HealthCare
                  </h1>
                  <p className="my-4">
                    Jio Health Hub had a goal to increase user engagement and
                    registrations, as well as provide proactive support. With
                    Haptik's help, JIVA was created- a WhatsApp virtual
                    assistant that led to a 21% growth in unique users.
                  </p>
                  <h2 className="text-blue-500 font-medium text-xl">
                    Solutions for HealthCare
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* Travel & hospitality  */}
            <div className="flex items-center w-[100%]">
              <div className="flex flex-col md:flex-row mt-10">
                <div className="flex-1">
                  <h1 className="text-xl font-bold md:hidden">
                    {" "}
                    Travel & hospitality{" "}
                  </h1>
                  <img
                    className="w-[100%]  mx-auto"
                    src={Travel}
                    alt="/"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl hidden md:block font-bold ">
                    {" "}
                    Travel & hospitality{" "}
                  </h1>
                  <p className="my-4">
                    Jio Health Hub had a goal to increase user engagement and
                    registrations, as well as provide proactive support. With
                    Haptik's help, JIVA was created- a WhatsApp virtual
                    assistant that led to a 21% growth in unique users.
                  </p>
                  <h2 className="text-blue-500 font-medium text-xl">
                    Solutions for Travel & hospitality{" "}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*Media*/}
            <div className="flex items-center w-[100%]">
              <div className="flex flex-col md:flex-row mt-10">
                <div className="flex-1">
                  <h1 className="text-xl font-bold md:hidden">
                    {" "}
                    Media & Entertainment{" "}
                  </h1>
                  <img
                    className="w-[100%]  mx-auto"
                    src={Media}
                    alt="/"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl hidden md:block font-bold ">
                    {" "}
                    Media & Entertainment{" "}
                  </h1>
                  <p className="my-4">
                    The goal of Disney Hotstar was to provide scalable customer
                    support with a fast and supremely efficient customer
                    experience. Haptik built an intuitive WhatsApp chatbot that
                    resulted in a 97% improvement in query resolution time,
                    reducing first response time from three hours to 30 seconds.
                  </p>
                  <h2 className="text-blue-500 font-medium text-xl">
                    Solutions for Media & Entertainment{" "}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*Education*/}
            <div className="flex items-center w-[100%]">
              <div className="flex flex-col md:flex-row mt-10">
                <div className="flex-1">
                  <h1 className="text-xl font-bold md:hidden"> Education</h1>
                  <img
                    className="w-[100%]  mx-auto"
                    src={Education}
                    alt="/"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl hidden md:block font-bold ">
                    Education{" "}
                  </h1>
                  <p className="my-4">
                    Ryan International, a leading education institution, uses
                    WhatsApp as a channel to regularly update students and push
                    them further in their learning journey. The chatbot sends
                    reminders, tips, progress reports, and learning materials on
                    a regular basis.
                  </p>
                  <h2 className="text-blue-500 font-medium text-xl">
                    Solutions for Education{" "}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Industry;
