import { useFormik } from "formik";
import React from "react";
import { Demo } from "../../schemas";

const Customer = () => {
  const initialValues = {
    name: "",
    lname: "",
    cname: "",
    email: "",
    jtitle: "",
    pno: "",
  };
  
  const { errors, handleChange, handleBlur, handleSubmit, touched, values } =
    useFormik({
      initialValues: initialValues,
      validationSchema: Demo,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });

  return (
    <div className="px-6 md:px-24 py-6">
      <div className="bg-blue-100 rounded-lg px-7 py-9">
        <h1 className="text-center font-semibold text-blue-600 text-xl md:text-4xl px-7 py-5">
          Transform your Customer Support With Generative AI
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex-1">
            
            <input
              className="px-3 py-1 mb-2 border-solid border-slate-300 border-2 w-[76vw] sm:w-[80vw] md:w-[70vw] lg:w-[80vw] md:mx-3"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              placeholder="First Name*"
            />
            {errors.name && touched.name ? (
              <p className=" text-red-500 box-border ">{errors.name} </p>
            ) : null}
            <input
              className="px-3 py-1 mb-2 border-solid border-slate-300 border-2 w-[76vw] sm:w-[80vw] md:w-[70vw] lg:w-[80vw] md:mx-3"
              type="text"
              id="lname"
              name="lname"
              value={values.lname}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Last Name"
            />

            <input
              className="px-3 py-1 mb-2 border-solid border-slate-300 border-2 w-[76vw] sm:w-[80vw] md:w-[70vw] lg:w-[80vw] md:mx-3"
              type="text"
              id="cname"
              name="cname"
              onChange={handleChange}
              value={values.cname}
              onBlur={handleBlur}
              placeholder="Company Name*"
            />
            {errors.cname && touched.cname ? (
              <p className=" text-red-500 box-border ">{errors.cname} </p>
            ) : null}
          </div>
          <div className="flex-1">
            <input
              className="px-3 py-1 mb-2 border-solid border-slate-300 border-2 w-[76vw] sm:w-[80vw] md:w-[70vw] lg:w-[80vw] md:mx-3"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              placeholder="Business Email*"
            />
            {errors.email && touched.email ? (
              <p className=" text-red-500 box-border ">{errors.email} </p>
            ) : null}
            <input
              className="px-3 py-1 mb-2 border-solid border-slate-300 border-2 w-[76vw] sm:w-[80vw] md:w-[70vw] lg:w-[80vw] md:mx-3"
              type="text"
              id="jtitle"
              name="jtitle"
              onChange={handleChange}
              value={values.jtitle}
              onBlur={handleBlur}
              placeholder="Job Title*"
            />
            {errors.jtitle && touched.jtitle ? (
              <p className=" text-red-500 box-border ">{errors.jtitle} </p>
            ) : null}
            <select
              className="mb-2 md:ml-3 border-solid border-2 border-slate-300 h-[36px] w-[70px]"
              name=""
              id=""
            >
              <option value="india">india</option>
              <option value="dubai">dubai</option>
            </select>
            <input
              className="px-3 py-1 mb-2 border-solid border-slate-300 border-2 w-[70%] sm:w-[85%] md:w-[80%] lg:w-[85%]"
              type="text"
              id="pno"
              name="pno"
              onChange={handleChange}
              value={values.pno}
              onBlur={handleBlur}
              placeholder="Phone Number*"
            />
            {errors.pno && touched.pno ? (
              <p className=" text-red-500 box-border ">{errors.pno} </p>
            ) : null}
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
