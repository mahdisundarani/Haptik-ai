import React from "react";
import Expertise from "../../assets/Contakt/Usage/10+ years expertise.webp";
import Advantage from "../../assets/Contakt/Usage/Advange.webp";
import Integration from "../../assets/Contakt/Usage/Seamless-Integrations-Icon-0302092.webp";
import Shrini from '../../assets/Contakt/Usage/upstox-shrini.webp'
import Upstox from '../../assets/Contakt/Usage/upstox-29-12-2022.svg'

const Usage = () => {
  return (
    <div className="">
      {/* content */}
      <div className="px-6 md:px-24">
        {/* heading  */}
        <div className="">
          {/* main heading  */}
          <h1 className="text-center text-xl md:text-3xl font-medium pb-3">
            Why Brands Love using Contakt
          </h1>
          {/* sub heading  */}
          <p className="hidden sm:block text-center">
            Know our product differentiators for increased efficiency & revenue
          </p>
        </div>
        {/* images  */}
        <div className="flex flex-col flex-wrap gap-12 md:flex-row md:justify-evenly py-10">
          <div className="px-4">
            <img
              className="mx-auto h-[63px] md:h-[108px]"
              src={Expertise}
              alt="/"
            />
            <div className="">
              <h1 className="text-center text-lg font-semibold py-4">
                10+ Years of AI Expertise
              </h1>
              <p className="text-center md:max-w-[200px] lg:max-w-[300px]">
                Haptik has been a pioneer in the field of AI for well over a
                decade, helping global brands unlock unprecedented success with
                our innovative solutions.
              </p>
            </div>
          </div>

          <div className="px-4">
            <img
              className="mx-auto h-[63px] md:h-[108px]"
              src={Advantage}
              alt="/"
            />
            <div className="">
              <h1 className="text-center text-lg font-semibold py-4">
                The OpenAI Advantage
              </h1>
              <p className="text-center md:max-w-[200px] lg:max-w-[300px]">
                Haptik’s integration with OpenAI helps you get early access to
                new cutting-edge ChatGPT features and reduce significant time in
                bot training.
              </p>
            </div>
          </div>

          <div className="px-4">
            <img
              className="mx-auto h-[63px] md:h-[108px]"
              src={Integration}
              alt="/"
            />
            <div className="">
              <h1 className="text-center text-lg font-semibold py-4">
                Seamless Third-Party Integrations
              </h1>
              <p className="text-center md:max-w-[200px] lg:max-w-[300px]">
                Integrate support and agent platforms, social channels, payment
                gateways, and any software APIs with third-party integrations.
              </p>
            </div>
          </div>
        </div>
        {/* quote  */}
        <div className="py-6">
            {/* heading  */}
          <h3 className="text-2xl md:text-3xl font-semibold">
            {/* <img className="inline" src={Top} alt="" /> */}
            <span className="text-4xl text-blue-500">"</span>
            Haptik has been pivotal in helping us explore the various engagement
            opportunities that come with an AI-powered chatbot, and giving us a
            competitive advantage in our mission to drive exceptional customer
            experiences at scale.
            <span className="text-4xl text-blue-500">"</span>
          </h3>
          {/* person  */}
          <div className="flex justify-center pt-7">
            <img className="rounded-full w-[68px] h-[68px]" src={Shrini} alt="" />
            <div className="pl-3">
            <h3 className="font-semibold text-2xl">Shrini Viswanath,</h3>
                <p>Co-Founder, Upstox</p>
                <img className="w-[120px] h-[40px]" src={Upstox} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
