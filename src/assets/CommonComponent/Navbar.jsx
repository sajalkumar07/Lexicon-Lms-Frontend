/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Robot from "./Images/guy.jpg";
import Computer from "./Images/boy-removebg-preview.png";
import Computer2 from "./Images/ani.gif";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <main
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${Robot})` }}
      >
        <div className="absolute bg-black opacity-70 inset-0"></div>
        <nav className="p-3 h-full w-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 z-10 relative">
          <header className="flex justify-between items-center">
            <div className="flex items-center ">
              <h1 className="text-3xl font-bold">
                <span className="text-orange-500">L</span>
                EXICON
              </h1>
            </div>
            <div>
              <ul className="flex justify-between items-center gap-8">
                <li>Home</li>
                <li>Courses</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex justify-between items-center gap-8">
              <div>Login</div>
              <div>Signup</div>
            </div>
          </header>
        </nav>
        <div className="flex justify-center items-center min-h-screen z-10 relative flex-col space-y-4">
          <div className="cursor-pointer bg-white bg-opacity-10 p-3 w-60 h-18 flex justify-center items-center text-center space-x-2 rounded-full backdrop-blur-md shadow-lg hover:scale-105 duration-300">
            <h1 className="cursor-pointer text-white font-semibold tracking-normal flex items-center">
              Become Instructor
            </h1>
            <span className="flex justify-center items-center">
              <ArrowRight />
            </span>
          </div>
          <h1 className="text-4xl font-bold">
            Shape Your Future with{" "}
            <span className="text-orange-500">LEXICON</span>
          </h1>
          <p className="text-xl font-semibold text-center text-gray-400">
            Unlock your potential with our free online coding and training
            platform designed <br />
            to empower you on your tech journey.
          </p>

          <div className="cursor-pointer bg-orange-700 p-3  w-28 h-18 flex justify-center items-center rounded-md hover:bg-orange-600">
            <h1 className=" cursor-pointer text-black font-semibold tracking-normal ">
              Explore
            </h1>
          </div>
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-15"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center  ">
          <div className="flex justify-between items-center p-3 w-[80%] ">
            <div className="relative w-80 ">
              <img src={Computer2} alt="Computer" className="rounded-lg " />

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-500 to-white-600 blur-xl opacity-45"></div>
            </div>

            <div className="space-y-5 ">
              <h1 className="text-4xl font-bold">
                Brace for epic{" "}
                <span className="text-yellow-500">adventures</span> and coding
                chaos!
              </h1>

              <p className="text-lg text-gray-400 text-right">
                Boost your skills (and caffeine levels) <br />
                with our coding playground, designed to help you <br /> conquer
                tech challenges like a pro. 🖥️⚡
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
