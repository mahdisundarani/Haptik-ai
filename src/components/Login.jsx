import React from "react";
import Navbar from "./Navbar";
import SwiperAni from "./SwiperAni";
import Footer from "./Footer";
import Badge from "./Badge";
import Copyright from "./Copyright";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { logInSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: logInSchema,
      onSubmit: (values, action) => {
        console.log("🚀 ~ Login ~ values:", values);
        action.resetForm()
      },
    });
  console.log(errors);

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
          <h1 className="text-center font-medium">Login</h1>
          <form
            className=""
            onSubmit={handleSubmit}
          >
            <input
              className="px-4 py-2 my-3 w-[100%] rounded-md"
              type="text"
              placeholder="Name*"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name} </p>
            ) : null}
            <input
              className="px-4 py-2 my-3 w-[100%] rounded-md"
              type="email"
              placeholder="Email*"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email} </p>
            ) : null}
            <input
              className="px-4 py-2 my-3 w-[100%] rounded-md"
              type="password"
              placeholder="Password*"
              id="password"
              name="password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password} </p>
            ) : null}
            <button
              type="submit"
              className="p-2 bg-blue-600 w-[98%] rounded-lg text-white font-medium"
            >
              Login
            </button>
            <p className="text-center text-black-600  font-medium">
              havent sign In?
            </p>
            <p className="text-center text-blue-600 font-medium">
              <Link to="/signin">Sign in here!</Link>
            </p>
            <p className="text-center text-black-600 font-medium">
              <Link to="/">Back</Link>
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

export default Login;
