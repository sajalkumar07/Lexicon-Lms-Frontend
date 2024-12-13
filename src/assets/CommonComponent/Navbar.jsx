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
                <li>Home</li>
                <li>Courses</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex justify-between items-center gap-8">
              <Link to="/login">
                <div>Login</div>
              </Link>
              <Link to="/signup">
                <div>Signup</div>
              </Link>
            </div>
          </header>
        </nav>
      </main>
    </div>
  );
};

export default Navbar;
