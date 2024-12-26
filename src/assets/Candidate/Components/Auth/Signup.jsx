/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import LoginPng from "../../images/signup2.png";
import { registerUser } from "../../Services/SignupApi";

const pageVariants = {
  initial: {
    opacity: 0,
    filter: "blur(8px)", // Apply blur initially
  },
  in: {
    opacity: 1,
    filter: "blur(0px)", // Remove blur when fully visible
  },
  out: {
    opacity: 0,
    filter: "blur(8px)", // Apply blur again when exiting
  },
};
const pageTransition = {
  type: "tween",
  duration: 0.5,
};

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await registerUser({ name, email, password });
      console.log("signup successful", response);

      navigate("/login");
    } catch (err) {
      setError("Signup failed. Invalid credentials.");
    } finally {
      setError(false);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="flex justify-center items-center text-white bg-black"
    >
      <main className="flex flex-col md:flex-row  w-[100%] h-screen p-0 md:p-0 ">
        <div className="hidden md:flex h-full w-full md:w-[50%] items-center justify-center p-10 relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img src={LoginPng} className="object-cover rounded-xl" />
        </div>

        <div className="w-full md:w-[50%] h-full flex items-center justify-center p-0 md:p-0 ">
          <div className="w-full md:w-[80%]">
            <div className="flex items-center justify-center font-semibold text-[24px] md:text-[30px]">
              <h1>
                Be More Than a Spectator.{" "}
                <span className="text-glow"> Join Us Today !</span>
              </h1>
            </div>

            <form className="mt-10 flex flex-col gap-5" onSubmit={handleSignup}>
              <div className="flex justify-center flex-col">
                <label
                  htmlFor="Name"
                  className="mb-2 text-s font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="Name"
                  placeholder="John Doe"
                  className="h-[50px] p-5 rounded-l border-[1px] border-black outline-none "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="h-[50px] p-5 rounded-l border-[1px] border-black outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center mt-2">{error}</p>
              )}
              <button
                type="submit"
                className="bg-orange-500 text-white rounded h-[50px] flex justify-center items-center mt-4"
              >
                Signup
              </button>
            </form>

            <div className="flex flex-col items-center justify-center mt-10">
              <p className="text-white">- OR -</p>
              <p className="mt-5">
                Already have an account?{" "}
                <Link to="/login" className="text-[#2414ff] cursor-pointer">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Signup;
