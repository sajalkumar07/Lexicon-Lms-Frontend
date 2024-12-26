/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../../CommonComponent/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const getCourses = () => {
  return (
    <div className="">
      <div className="bg-black h-16 w-full fixed ">
        <Navbar />
      </div>
      <div>
        <main className="bg-gray-50">
          <div className="flex justify-center items-center min-h-screen flex-col space-y-9">
            <div className="relative w-[50%] flex justify-between items-center ">
              <input
                placeholder="Search your courses"
                className="w-full text-black placeholder-black px-5 py-2 rounded-md border border-black bg-transparent h-16 focus:outline-none "
              ></input>
              <div className="py-2 px-2 cursor-pointer right-1 absolute transform-y-1/2 text-black">
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </div>
            </div>
            <ul className="text-black flex justify-between space-x-10">
              <li className="cursor-pointer">Web Development</li>
              <li className="cursor-pointer">Machine Learning</li>
              <li className="cursor-pointer">Java Full Stack</li>
              <li className="cursor-pointer">MERN Full Stack</li>
              <li className="cursor-pointer">Data Analyst</li>
              <li className="cursor-pointer">DSA</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default getCourses;
