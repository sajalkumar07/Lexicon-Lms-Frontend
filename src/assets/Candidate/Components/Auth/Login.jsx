/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import LoginPng from "../../assets/programmer.png";
import Loader from "../../assets/spin-unscreen.gif"; // The loading GIF import
import { loginUser } from "../../Services/LoginApi";

const pageVariants = {
  initial: {
    opacity: 0,
    filter: "blur(8px)",
  },
  in: {
    opacity: 1,
    filter: "blur(0px)",
  },
  out: {
    opacity: 0,
    filter: "blur(8px)",
  },
};
const pageTransition = {
  type: "tween",
  duration: 0.5,
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Replace this with your actual login function
      const response = await loginUser({ email, password });
      console.log("Login successful:", response);

      // Redirect to the home page ("/") after a successful login
      navigate("/");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="flex justify-center items-center"
    >
      <main className="flex flex-col md:flex-row w-full h-screen">
        {/* Left Section */}
        <div className="hidden md:flex h-full w-full md:w-1/2 items-center justify-center relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src={LoginPng}
            alt="Login Illustration"
            className="object-cover rounded-xl"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <div className="w-full md:w-4/5">
            {/* Header */}
            <div className="text-center font-semibold text-2xl md:text-3xl">
              <h1>
                Welcome Back!{" "}
                <span className="text-glow">Let's Get You In!</span>
              </h1>
            </div>

            {/* Loader - Displayed when loading */}
            {loading && (
              <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 bg-black z-50">
                <img src={Loader} alt="Loading..." className="w-50 h-50" />
              </div>
            )}

            {/* Login Form */}
            <form className="mt-10 flex flex-col gap-5" onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-[50px] p-5 rounded outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="h-[50px] p-5 rounded outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-sm text-center mt-2">{error}</p>
              )}

              {/* Login Button */}
              <button
                type="submit"
                className="bg-orange-500 text-white rounded h-[50px] flex justify-center items-center mt-4"
                disabled={loading}
              >
                Login
              </button>
            </form>

            {/* Alternate Actions */}
            <div className="flex flex-col items-center justify-center mt-10">
              <p className="text-white">- OR -</p>
              <p className="mt-5">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 cursor-pointer">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Login;
