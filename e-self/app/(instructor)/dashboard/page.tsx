"use client";

import React from "react";
import { FaBook, FaUserGraduate, FaMoneyBillWave, FaExclamationCircle } from "react-icons/fa";

export default function Page() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    

      <div className="flex justify-between mt-6 bg-white p-4 rounded-lg shadow-md">
        <div>
          <p className="text-lg font-semibold text-gray-800">Hi, <span className="font-bold">Instructor Name</span></p>
          <p className="text-sm text-gray-600">Today's Report</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-800">Updates</p>
          <p className="text-sm text-red-600 flex items-center">
         
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {[
          { icon: FaBook, title: "Total Courses", value: "12" },
          { icon: FaUserGraduate, title: "Total Students", value: "1,245" },
          { icon: FaMoneyBillWave, title: "Total Earnings", value: "$5,320" }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <stat.icon className="text-4xl text-red-600" />
            <div className="ml-4">
              <p className="text-lg font-semibold">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Courses Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Courses</h2>
        <ul className="space-y-4">
          {["Advanced JavaScript", "React for Beginners", "Node.js Masterclass"].map((course, index) => (
            <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center">
              <span className="font-medium text-gray-700">{course}</span>
              <span className="text-gray-600">{Math.floor(Math.random() * 200) + 50} Students</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Analytics Button */}
      <div className="mt-6 text-center">
        <a
          href="/analytics"
          className="inline-block py-2 px-6 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
          View Analytics
        </a>
      </div>
    </div>
  );
}
