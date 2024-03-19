import React from "react";

const Customer = () => {
  return (
    <div className="px-6 md:px-24 py-6">
      <div className="bg-blue-100 rounded-lg px-7 py-9">
        <h1 className="text-center font-semibold text-blue-600 text-xl md:text-4xl px-7 py-5">
          Transform your Customer Support With Generative AI
        </h1>
        <form>
          <div className="flex-1">
            <input
              className="px-3 py-1 mb-4 border-solid border-slate-300 border-2 w-[100%] lg:w-[30%] md:mx-3"
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name*"
            />
            <input
              className="px-3 py-1 mb-4 border-solid border-slate-300 border-2 w-[100%] lg:w-[30%] md:mx-3"
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
            />
            <input
              className="px-3 py-1 mb-4 border-solid border-slate-300 border-2 w-[100%] lg:w-[30%] md:mx-3"
              type="text"
              id="cname"
              name="cname"
              placeholder="Company Name*"
            />
          </div>
          <div className="flex-1">
            <input
              className="px-3 py-1 mb-4 border-solid border-slate-300 border-2 w-[100%] lg:w-[30%] md:mx-3"
              type="email"
              id="email"
              name="email"
              placeholder="Business Email*"
            />
            <input
              className="px-3 py-1 mb-4 border-solid border-slate-300 border-2 w-[100%] lg:w-[30%] md:mx-3"
              type="text"
              id="jtitle"
              name="jtitle"
              placeholder="Job Title*"
            />
            <select
              className="mb-4 md:ml-3 border-solid border-2 border-slate-300 h-[36px] w-[50px]"
              name=""
              id=""
            >
              <option value="india">india</option>
              <option value="dubai">dubai</option>
            </select>
            <input
              className="px-3 py-1 mb-4 border-solid border-slate-300 border-2 w-[70%] sm:w-[85%] md:w-[17%] lg:w-[25%]"
              type="text"
              id="pnum"
              name="pnum"
              placeholder="Phone Number*"
            />
          </div>
          <div className="flex justify-center ">
            <button
              className="px-12 py-2 text-white bg-blue-600 rounded-md "
              type="submit"
            >
              Book a Demo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Customer;
