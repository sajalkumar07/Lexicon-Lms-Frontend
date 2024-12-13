/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from "react";
import LoginPng from "../../assets/robo3.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <main className="flex flex-col md:flex-row  w-[90%] h-screen p-0 md:p-0 ">
        <div className="hidden md:flex h-full w-full md:w-[50%] items-center justify-center p-0 relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img src={LoginPng} className=" object-cover rounded-xl" />
        </div>

        <div className="w-full md:w-[50%]  h-full flex items-center justify-center p-0 md:p-0 ">
          <div className="w-full md:w-[80%]">
            <div className="flex items-center justify-center font-semibold text-[24px] md:text-[30px]">
              <h1 className="text-">Hey, Welcome Back !</h1>
            </div>

            <form className="mt-10 flex flex-col gap-5">
              <div className="flex justify-center flex-col">
                <label
                  htmlFor="Email"
                  className="mb-2 text-s font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-[50px] p-5 rounded-l border-[1px] border-black outline-none "
                  required
                />
              </div>
              <div className="flex justify-center flex-col">
                <label
                  htmlFor="Password"
                  className="mb-2 text-s font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-[50px] p-5 rounded-l border-[1px] border-black outline-none "
                  required
                />
              </div>

              <div className="flex justify-center bg-orange-500 rounded-l h-[50px] cursor-pointer mt-4">
                <button type="submit" className="text-white">
                  Login
                </button>
              </div>
            </form>

            <div className="flex flex-col items-center justify-center mt-10">
              <p className="text-white">- OR -</p>
              <p className="mt-5">
                Don't have an account ?{" "}
                <Link to="/signup" className="text-[#2414ff] cursor-pointer">
                  Sign-up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
