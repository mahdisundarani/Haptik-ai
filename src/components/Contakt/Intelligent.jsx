import React from "react";
import Analysis from "../../assets/Contakt/Intelligent/Analytics_ Dashboard_010823.webp";
import Check from "../../assets/Contakt/Intelligent/circle-check-02-01-2023.svg";

const Intelligent = () => {
  return (
    <div className=" px-6 md:px-24 py-10">
      <div className="flex items-center w-[100%] ">
        <div className="flex flex-col md:flex-row md:gap-36">
          <div className="flex-1">
            {/* heading  */}
            <h3 className="hidden md:block text-blue-500 pb-2 font-semibold">
              INTELLIGENT ANALYTICS
            </h3>
            {/* subheading  */}
            <h1 className="hidden md:block text-4xl font-bold">
              Track Metrics That Truly Matter
            </h1>

            <div className="flex gap-3 py-4 text-md">
              {/* tick mark image  */}
              <div className="w-7 h-10">
                <img
                  className="pt-3"
                  src={Check}
                  alt=""
                />
              </div>
              {/* tick mark content  */}
              <h1 className="text-xl">
                Get custom-built analytics dashboards that offer 360-degree view
                to make data-driven decisions.
              </h1>
            </div>

            <div className="flex gap-3 py-4 text-md">
              {/* tick mark image  */}
              <div className="w-7 h-10">
                <img
                  className="pt-3"
                  src={Check}
                  alt=""
                />
              </div>
              {/* tick mark content  */}
              <h1 className="text-xl">
                Improve bot and agent performance by tracking relevant metrics
                to bridge gaps in customer support.
              </h1>
            </div>

            <div className="flex gap-3 py-4 text-md">
              {/* tick mark image  */}
              <div className="w-7 h-10">
                <img
                  className="pt-3"
                  src={Check}
                  alt=""
                />
              </div>
              {/* tick mark content  */}
              <h1 className="text-xl">
                Use analytics to drive superior customer outcomes & improve
                retention.
              </h1>
            </div>
            <h1 className="text-blue-600 md:text-xl py-5">
              Explore Intelligent Analytics
            </h1>
          </div>

          <div className="flex-1 justify-between">
            {/* heading in small device */}
            <h3 className="text-blue-500 pb-2 font-semibold md:hidden text-center">
              INTELLIGENT ANALYTICS
            </h3>
            <h1 className=" text-xl font-bold md:hidden text-center">
              Track Metrics That Truly Matter
            </h1>
            {/* image  */}
            <img
              className="w-[100%]  mx-auto"
              src={Analysis}
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intelligent;
