import React from "react";
import Jio from "../../assets/Contakt/ImpNums/jio-19-12-2022.svg";
import Eureka from "../../assets/Contakt/ImpNums/Eureka-Forbes-Logo_new_updated.webp";
import Whirlpool from "../../assets/Contakt/ImpNums/Whirlpool-6-1-23.webp";
import Starhub from "../../assets/Contakt/ImpNums/starhub-80px.webp";
const ImpNums = () => {
  return (
    <div className="m-10">
      {/* heading  */}
      <div className="">
        <h1 className="font-medium text-xl md:text-3xl text-center mb-4">
          Haptik's Impact in Numbers
        </h1>
      </div>
      {/* subheading */}
      <div className="hidden md:flex justify-center pb-8">
        <p className="text-center">
          The tangible outcomes achieved by our clients
        </p>
      </div>
      {/* cards */}
      <div className="flex gap-6 sm:flex-wrap h-[200px]">
        {/* card 1 */}
        <div className="shadow-xl hover:scale-105 duration-300 flex-1 pb-3 py-6 rounded-lg">
          <h1 className="text-blue-600 font-medium text-center text-5xl">
            $3M+
          </h1>
          <p className="text-center pt-1 pb-5">
            saved in annual operating costs
          </p>
          <img
            className="p-1 h-[10vh] md:h-[43px] w-[100%]  md:w-auto md:mx-auto my-auto"
            src={Jio}
            alt=""
          />
        </div>
        {/* card 2 */}
        <div className="shadow-xl hover:scale-105 duration-300 flex-1 pb-3 py-6 rounded-lg">
          <h1 className="text-blue-600 font-medium text-center text-5xl">
            36%
          </h1>
          <p className="text-center pt-1 pb-5">reduction in support tickets</p>
          <img
            className="p-1 h-auto md:h-[43px] w-[100%]  md:w-auto md:mx-auto my-auto"
            src={Whirlpool}
            alt=""
          />
        </div>
        {/* card 1 */}
        <div className="hidden sm:block shadow-xl hover:scale-105 duration-300 flex-1 pb-3 py-6 rounded-lg">
          <h1 className="text-blue-600 font-medium text-center text-5xl">
            125%
          </h1>
          <p className="text-center pt-1 pb-5">improvement in NPS</p>
          <img
            className="p-1 h-auto md:h-[43px] w-[100%]  md:w-auto md:mx-auto my-auto"
            src={Starhub}
            alt=""
          />
        </div>
        {/* card 2 */}
        <div className="hidden sm:block shadow-xl hover:scale-105 duration-300 flex-1 pb-3 py-6 rounded-lg">
          <h1 className="text-blue-600 font-medium text-center text-5xl">
            200K+
          </h1>
          <p className="text-center pt-1 pb-5">agent hours saved</p>
          <img
            className="p-1 h-auto md:h-[43px] w-[100%]  md:w-auto md:mx-auto my-auto"
            src={Eureka}
            alt=""
          />
        </div>
      </div>

      <div className="sm:hidden flex gap-6 sm:flex-wrap pt-5 ">
        {/* card 1 */}
        <div className="shadow-xl hover:scale-105 duration-300 flex-1 pb-3">
          <h1 className="text-blue-600 font-medium text-center text-5xl">
            125%
          </h1>
          <p className="text-center pt-1 pb-5">improvement in NPS</p>
          <img
            className="p-1 h-auto md:h-[43px] w-[100%]  md:w-auto md:mx-auto my-auto"
            src={Starhub}
            alt=""
          />
        </div>
        {/* card 2 */}
        <div className="shadow-xl hover:scale-105 duration-300 flex-1 pb-3">
          <h1 className="text-blue-600 font-medium text-center text-5xl">
            200K+
          </h1>
          <p className="text-center pt-1 pb-5">agent hours saved</p>
          <img
            className="p-1 h-auto md:h-[43px] w-[100%] md:w-auto"
            src={Eureka}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImpNums;
