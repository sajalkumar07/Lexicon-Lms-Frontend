/* eslint-disable no-unused-vars */
import React from "react";
import { Divider } from "@material-ui/core";

const DashboardNav = () => {
  return (
    <div>
      <aside className="bg-black min-h-screen w-64 text-white space-y-10 p-6">
        <div>
          <h1 className="text-xl font-bold whitespace-nowrap">
            <span className="text-orange-400">L</span>EXICON INSTRUCTOR
          </h1>
        </div>
        <div className="w-full border-t border-gray-700 mt-4"></div>
        <div>
          <ul className="space-y-6">
            <li>Courses</li>
            <li>Courses</li>
            <li>Courses</li>
            <li>Courses</li>
            <li>Courses</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DashboardNav;
