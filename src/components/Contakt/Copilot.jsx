import React from "react";
import Agent from "../../assets/Contakt/Copilot/Agent_Co-pilot_20_09_23.webp";
import Check from "../../assets/Contakt/Copilot/circle-check-02-01-2023.svg";

const Support = () => {
  return (
    <div className=" px-6 md:px-24 py-10">
      <div className="flex items-center w-[100%] ">
        <div className="flex flex-col md:flex-row md:gap-36">
          <div className="flex-1 justify-between">
            {/* heading in small device */}
            <h3 className="text-blue-500 pb-2 font-semibold md:hidden text-center">
              AGENT CO-PILOT
            </h3>
            <h1 className=" text-xl font-bold md:hidden text-center">
              Amplify Agent Productivity with Generative AI-Powered Co-pilot
            </h1>
            {/* image  */}
            <img
              className="w-[100%]  mx-auto"
              src={Agent}
              alt="/"
            />
          </div>
          <div className="flex-1">
            {/* heading  */}
            <h3 className="hidden md:block text-blue-500 pb-2 font-semibold">
              AGENT CO-PILOT
            </h3>
            {/* subheading  */}
            <h1 className="hidden md:block text-4xl font-bold">
              Amplify Agent Productivity with Generative AI-Powered Co-pilot
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
                Equip agents with AI-powered chat suggestions and summaries to
                resolve queries based on customer sentiment.
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
                Identify customer intent with Generative AI and tailor responses
                for a seamless customer experience.
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
                Use contextual agent inbox to manage incoming messages from
                across channels and jump in for timely resolution.
              </h1>
            </div>
            <h1 className="text-blue-600 md:text-xl py-5">
              Explore Agent Co-Pilot
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
