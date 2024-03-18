import React from "react";
import Vedio from "../../assets/Contakt/Hero/tutorial.mp4";

const Hero = () => {
  return (
    <div className="flex justify-evenly md:h-auto m-10">
      <div className=" flex flex-col justify-center lg:flex-row md:max-w-[1100px] lg:max-w-[1300px] mx-10">
        {/* content  */}
        <div className="mr-4 my-auto flex-1">
          {/* heading */}
          <div className="m-4">
            <h1 className="text-6xl font-bold text-center ">
              Deliver Seamless Customer Experience at
              <span className="text-blue-600"> Scale</span>
            </h1>
          </div>
          {/* subheading */}
          <div className="m-8">
            <p>
              Powered by Generative AI, Contakt is the complete customer support
              suite to streamline support, unlock better agent efficiency, and
              drive superior customer satisfaction & loyalty.
            </p>
          </div>
          {/* button  */}
          <div className="mx-5 flex md:justify-center lg:justify-start">
            <button className="bg-blue-600 text-white h-10 mr-3 w-full md:w-40 font-bold rounded-md  mt-6 ">
              Get A Demo
            </button>
          </div>
        </div>
        {/* image  */}
        <div className="hidden md:flex flex-1 items-center m-16 ">
          <video src={Vedio} controls className="rounded-xl"></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
