import React from "react";
import webQA from "../../assets/Contakt/Support/AI-webQA-5-10.webp";
import Check from "../../assets/Contakt/Support/circle-check-02-01-2023.svg";

const Support = () => {
  return (
    <div className=" px-6 md:px-24 py-10">
      <div className="flex items-center w-[100%] ">
        <div className="flex flex-col md:flex-row md:gap-36">
          <div className="flex-1 justify-between">
            {/* heading in small device */}
            <h3 className="text-blue-500 pb-2 font-semibold md:hidden text-center">
              AI POWERED WEB Q&A
            </h3>
            <h1 className=" text-xl font-bold md:hidden text-center">
              Streamline Support with AI-Powered Web Q&A
            </h1>
            {/* image  */}
            <img
              className="w-[100%]  mx-auto"
              src={webQA}
              alt="/"
            />
          </div>
          <div className="flex-1">
            {/* heading  */}
            <h3 className="hidden md:block text-blue-500 pb-2 font-semibold">
              AI POWERED WEB Q&A
            </h3>
            {/* subheading  */}
            <h1 className="hidden md:block text-4xl font-bold">
              Streamline Support with AI-Powered Web Q&A
            </h1>

            <div className="flex gap-3 py-4 text-md">
              {/* tick mark image  */}
              <div className="w-7 h-10">
                <img
                  className=""
                  src={Check}
                  alt=""
                />
              </div>
              {/* tick mark content  */}
              <h1 className="">
            Answer wide-ranging customer queries using Generative AI & fetch
                relevant information from your website.
              </h1>
            </div>

            <div className="flex gap-3 py-4 text-md">
              {/* tick mark image  */}
              <div className="w-7 h-10">
                <img
                  className=""
                  src={Check}
                  alt=""
                />
              </div>
              {/* tick mark content  */}
              <h1 className="">
                Generate dynamic responses by interfacing with CRM & web APIs.
              </h1>
            </div>

            <div className="flex gap-3 py-4 text-md">
              {/* tick mark image  */}
              <div className="w-7 h-10">
                <img
                  className=""
                  src={Check}
                  alt=""
                />
              </div>
              {/* tick mark content  */}
              <h1 className="">
                Resolve customers' pre and post-sales queries, and trigger
                loyalty.
              </h1>
            </div>
            <h1 className="text-blue-600 md:text-xl py-5">Explore Gen AI Web Q&A</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
