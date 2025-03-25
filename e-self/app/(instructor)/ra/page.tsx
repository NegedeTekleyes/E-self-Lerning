"use client"; // Add this at the top!

import React, { useState } from "react";
import { FaChartLine, FaBook, FaGraduationCap } from "react-icons/fa";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import { MdLeaderboard } from "react-icons/md";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white w-64 p-5 shadow-md ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <button 
          onClick={() => setIsSidebarOpen(false)} 
          className="md:hidden text-xl"
        >
          {isSidebarOpen ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
        </button>
        <h2 className="text-xl font-bold mb-5">MENU</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 text-red-500 font-semibold">
            <FaChartLine /> <span>Overview</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaBook /> <span>Lessons</span>
          </li>
          <li className="flex items-center space-x-2">
            <MdLeaderboard /> <span>Leaderboard</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaGraduationCap /> <span>Certificates</span>
          </li>
          <li className="flex items-center space-x-2 relative">
            <FiMessageSquare /> <span>Messages</span>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full absolute right-0">5</span>
          </li>
          <li className="flex items-center space-x-2">
            <FiSettings /> <span>Settings</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 overflow-auto">
        <button 
          onClick={() => setIsSidebarOpen(true)} 
          className="md:hidden text-xl mb-5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold">Continue Learning</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {/* Courses */}
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="font-semibold">Advance UI/UX Design</h2>
            <p className="text-gray-500">Design</p>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-red-500 h-2 rounded-full w-1/2"></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">18/40 Lessons - 2 hours left</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="font-semibold">Basic Web Development</h2>
            <p className="text-gray-500">Development</p>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-red-500 h-2 rounded-full w-1/2"></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">18/40 Lessons - 2 hours left</p>
          </div>
        </div>

        {/* Recommended Courses */}
        <h2 className="text-2xl font-bold mt-8">Recommended Courses For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Webflow Course Thumbnail" className="w-full" />
            <div className="p-4">
              <p className="font-semibold">Webflow Tutorial: Build Your First Portfolio Website</p>
              <p className="text-gray-500 text-sm">Adam Smith</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img src="https://via.placeholder.com/400" alt="Design System Course Thumbnail" className="w-full" />
            <div className="p-4">
              <p className="font-semibold">Basic To Advance Design System With UX Strategies</p>
              <p className="text-gray-500 text-sm">Scott Warden</p>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden lg:block w-72 bg-white p-5 shadow-md">
        <h2 className="text-xl font-bold">Profile</h2>
        <div className="flex items-center space-x-3 mt-5">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <p className="font-semibold">Brooklyn Simmons</p>
            <p className="text-sm text-gray-500">UI/UX Designer & Developer</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-gray-500">876 Points</p>
          <p className="text-gray-500">54 Days Streak</p>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;