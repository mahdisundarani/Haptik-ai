import React from "react";
import Assistant from "../../assets/Contakt/Asistant/AI-webQA-5-10.webp";
import Check from "../../assets/Contakt/Asistant/circle-check-02-01-2023.svg";

const Asistant = () => {
  return (
    <div className=" px-6 md:px-24 py-10">
      <div className="flex items-center w-[100%] ">
        <div className="flex flex-col md:flex-row md:gap-36">
          <div className="flex-1">
            {/* heading  */}
            <h3 className="hidden md:block text-blue-500 pb-2 font-semibold">
              AI ASSISTANT
            </h3>
            {/* subheading  */}
            <h1 className="hidden md:block text-4xl font-bold">
              Make Customer Support Intuitive with Generative AI-Powered
              Assistant
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
                Improve support quality by asking clarifying questions,
                responding to FAQs, and offering personalized solutions.
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
                Offer conversational buying guidance through seamless product
                discovery and product recommendations.
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
                Escalate complex queries that require human intervention & offer
                satisfactory resolution.
              </h1>
            </div>
            <h1 className="text-blue-600 md:text-xl py-5">
              Explore Gen AI Web Q&A
            </h1>
          </div>

          <div className="flex-1 justify-between">
            {/* heading in small device */}
            <h3 className="text-blue-500 pb-2 font-semibold md:hidden text-center">
              AI ASSISTANT
            </h3>
            <h1 className=" text-xl font-bold md:hidden text-center">
              Make Customer Support Intuitive with Generative AI-Powered
              Assistant
            </h1>
            {/* image  */}
            <img
              className="w-[100%]  mx-auto"
              src={Assistant}
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asistant;
