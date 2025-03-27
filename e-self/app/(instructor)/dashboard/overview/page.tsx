"use client";

import React from "react";
import { FaBook, FaUserGraduate, FaMoneyBillWave } from "react-icons/fa";

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800">Instructor Overview</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaBook className="text-4xl text-red-600" />
          <div className="ml-4">
            <p className="text-lg font-semibold">Total Courses</p>
            <p className="text-xl font-bold">12</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaUserGraduate className="text-4xl text-red-600" />
          <div className="ml-4">
            <p className="text-lg font-semibold">Total Students</p>
            <p className="text-xl font-bold">1,245</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaMoneyBillWave className="text-4xl text-red-600" />
          <div className="ml-4">
            <p className="text-lg font-semibold">Total Earnings</p>
            <p className="text-xl font-bold">$5,320</p>
          </div>
        </div>
      </div>

      {/* Recent Courses Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Recent Courses</h2>
        <ul className="mt-4 space-y-4">
          <li className="bg-white p-4 rounded-lg shadow-md flex justify-between">
            <span>Advanced JavaScript</span>
            <span className="text-gray-600">120 Students</span>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md flex justify-between">
            <span>React for Beginners</span>
            <span className="text-gray-600">98 Students</span>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md flex justify-between">
            <span>Node.js Masterclass</span>
            <span className="text-gray-600">150 Students</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
