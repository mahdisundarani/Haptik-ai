import React from "react";
import Navbar from "./Navbar";
import SwiperAni from "./SwiperAni";
import Footer from "./Footer";
import Badge from "./Badge";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signInSchema } from "../schemas";

const Signin = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchema,
      onSubmit: (values, action) => {
        console.log(values)
        action.resetForm()
      },
    });

  return (
    <div className="">
      <div>
        <Navbar />
      </div>

      <div className="px-4 md:px-16 py-8 flex flex-col lg:flex-row">
        <div className="pr-14">
          {/* heading  */}
          <h1 className="text-xl md:text-3xl font-medium text-center pb-6">
            <span className="text-blue-600">Generative AI</span>-Powered Support
            to Win Lifelong Customers
          </h1>
          {/* sub heading  */}
          <h2 className="text-center md:text-xl font-medium pb-4">
            With Haptik, you can:
          </h2>

          <div className="py-3">
            <div className="flex">
              <span className="text-blue-500">&#10004;</span>
              <h1 className="px-2 font-bold">
                Build a Generative AI Assistant in No Time!
              </h1>
            </div>
            <p className="text-center pl-5">
              Turn your website into a chatbot & answer complex queries with
              dynamic APIs.
            </p>
          </div>

          <div className="py-3">
            <div className="flex">
              <span className="text-blue-500">&#10004;</span>
              <h1 className="px-2 font-bold">
                Unlock Agent Efficiency with Agent Co-pilot
              </h1>
            </div>
            <p className="text-center pl-5">
              Empower agents with Gen AI-powered chat suggestions, intent
              detection & other contextual information for effective query
              resolution.
            </p>
          </div>

          <div className="py-3">
            <div className="flex">
              <span className="text-blue-500">&#10004;</span>
              <h1 className="px-2 font-bold">
                Drive Better Customer Outcomes with Analytics
              </h1>
            </div>
            <p className="text-center pl-5">
              Retain customers and save on resources by improving average query
              resolution time, first-response time, ticket reopen rate, and
              more.
            </p>
          </div>

          <h1 className="text-blue-500 font-semibold text-center">
            10+ Channels | 100+ Languages | Enterprise Grade Security
          </h1>
        </div>

        <div className="shadow-xl rounded-xl p-4 bg-blue-100 my-10 ml-10">
          <h1 className="text-center font-medium">Sign up</h1>
          <form
            className=""
            onSubmit={handleSubmit}
          >
            <input
              className="px-4 py-2 my-3 w-[200px] sm:w-[500px] block rounded-md"
              type="text"
              placeholder="First Name*"
              id="Fname"
              name="Fname"
              value={values.Fname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Fname && touched.Fname ? (
              <p className="form-error text-red-500">{errors.Fname} </p>
            ) : null}
            <input
              className="px-4 py-2 my-3 w-[200px] sm:w-[500px] block rounded-md"
              type="text"
              placeholder="Last Name"
              id="Lname"
              name="Lname"
              value={values.Lname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Lname && touched.Lname ? (
              <p className="form-error text-red-500">{errors.Lname} </p>
            ) : null}
            <input
              className="px-4 py-2 my-3 w-[200px] sm:w-[500px] block rounded-md"
              type="email"
              placeholder="Email*"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error text-red-500">{errors.email} </p>
            ) : null}
            <input
              className="px-4 py-2 my-3 w-[200px] sm:w-[500px] block rounded-md"
              type="password"
              placeholder="New Password*"
              id="password"
              name="password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error text-red-500">{errors.password} </p>
            ) : null}
            <input
              className="px-4 py-2 my-3 w-[200px] sm:w-[500px] block rounded-md"
              type="password"
              placeholder="Confirm Password*"
              id="confirm_password"
              name="confirm_password"
              autoComplete="off"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error text-red-500">
                {errors.confirm_password}{" "}
              </p>
            ) : null}
            <button className="p-2 bg-blue-600 w-[98%] rounded-lg text-white font-medium">
              Sign up
            </button>
            <p className="text-center text-blue-600 font-medium pt-5">
              <Link to="/login">Log in here!</Link>
            </p>
            <p className="text-center text-black-600 font-medium">
              <Link to="/login">Back</Link>
            </p>
          </form>
        </div>
      </div>

      <SwiperAni />
      <Footer />
      <Badge />
      <Copyright />
    </div>
  );
};

export default Signin;
