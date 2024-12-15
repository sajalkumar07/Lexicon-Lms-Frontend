/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <main className="">
        <nav className="fixed top-0 left-0 w-full p-3 bg-black bg-opacity-15 backdrop-blur-md shadow-md z-50">
          <header className="flex justify-between items-center">
            <div className="flex items-center ">
              <h1 className="text-3xl font-bold">
                <span className="text-orange-500">L</span>
                EXICON
              </h1>
            </div>
            <div>
              <ul className="flex justify-between items-center gap-8">
                <li className="relative group cursor-pointer">
                  Home
                  <span className="absolute left-1/2 bottom-0 block w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                </li>

                <li className="relative group cursor-pointer">
                  <span className="absolute left-1/2 bottom-0 block w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                  Courses
                </li>
                <li className="relative group cursor-pointer ">
                  <span className="absolute left-1/2 bottom-0 block w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                  About
                </li>
                <li className="relative group cursor-pointer">
                  <span className="absolute left-1/2 bottom-0 block w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                  Contact
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center gap-8">
              <Link to="/login">
                <div className="bg-transparent p-2  rounded-sm">Login</div>
              </Link>
              <Link to="/signup">
                <div className="bg-orange-400 p-2  text-black rounded-sm">
                  Signup
                </div>
              </Link>
            </div>
          </header>
        </nav>
      </main>
    </div>
  );
};

export default Navbar;
