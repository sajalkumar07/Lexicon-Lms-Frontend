/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import Robot from "./Images/guy.jpg";
import Computer from "./Images/3d.png";
import Computer2 from "./Images/codeani.gif";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <main
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${Robot})` }}
        >
          <div className="absolute bg-black opacity-70 inset-0"></div>

          <div className="flex justify-center items-center min-h-screen z-10 relative flex-col space-y-4">
            <motion.div
              className="cursor-pointer bg-white bg-opacity-10 p-3 w-60 h-18 flex justify-center items-center text-center space-x-2 rounded-full backdrop-blur-md shadow-lg hover:scale-105 duration-300"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="cursor-pointer text-white font-semibold tracking-normal flex items-center">
                Become Instructor
              </h1>
              <span className="flex justify-center items-center">
                <ArrowRight />
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Shape Your Future with{" "}
              <span className="text-orange-500">LEXICON</span>
            </motion.h1>

            <motion.p
              className="text-xl font-semibold text-center text-gray-400"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Unlock your potential with our free online coding and training
              platform designed <br />
              to empower you on your tech journey.
            </motion.p>

            <motion.div
              className="cursor-pointer bg-orange-700 p-3 w-28 h-18 flex justify-center items-center rounded-md hover:bg-orange-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
            >
              <h1 className="cursor-pointer text-black font-semibold tracking-normal">
                Explore
              </h1>
            </motion.div>
          </div>
        </main>

        <section className="space-y-28">
          <div className="flex justify-center items-center  ">
            <div className="flex justify-between items-center p-3 w-[80%]">
              <div className="space-y-5">
                <h1 className="text-4xl font-bold">
                  Get Ready to Code and{" "}
                  <span className=" text-purple-500">Conquer</span> with US
                </h1>
                <p className="text-lg text-gray-400">
                  Level up your skills (and your coffee intake) <br />
                  with our online coding playground, built to help you <br />{" "}
                  crush your tech goals. 🖥️💥
                </p>
              </div>
              <div className="relative w-80">
                <img
                  src={Computer}
                  alt="Computer"
                  className="relative z-10 rounded-3xl"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center  ">
            <div className="flex justify-between items-center p-3 w-[80%] ">
              <div className="relative w-80 ">
                <img src={Computer2} alt="Computer" className="rounded-lg " />
              </div>

              <div className="space-y-5 ">
                <h1 className="text-4xl font-bold">
                  Brace for epic{" "}
                  <span className="text-yellow-500">adventures</span> and coding
                  chaos!
                </h1>

                <p className="text-lg text-gray-400 text-right">
                  Boost your skills (and caffeine levels) <br />
                  with our coding playground, designed to help you <br />{" "}
                  conquer tech challenges like a pro. 🖥️⚡
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
