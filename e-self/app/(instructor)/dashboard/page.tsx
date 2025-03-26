"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine, FaBook, FaGraduationCap, FaMoneyBillWave } from "react-icons/fa";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import { MdLeaderboard } from "react-icons/md";

import LandingHeader from "../../(components)/instructor/LandingHeader";

const menuItems = [
  { name: "Overview", icon: FaChartLine, link: "/dashboard/overview" },
  { name: "Create Course", icon: FaBook, link: "/dashboard/create-course" },
  { name: "Students", icon: MdLeaderboard, link: "/dashboard/students" },
  { name: "Modify Course", icon: FaBook, link: "/dashboard/modify-course" },
  { name: "Balance", icon: FaMoneyBillWave, link: "/dashboard/balance" },
  { name: "Get Certificate", icon: FaGraduationCap, link: "/dashboard/certificates" },
  { name: "Messages", icon: FiMessageSquare, link: "/dashboard/messages", badge: 5 },
  { name: "Settings", icon: FiSettings, link: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <>
      {/* Header */}
      <LandingHeader />

      {/* Sidebar + Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`bg-white h-screen fixed top-16 left-0 z-40 shadow-md transition-all duration-300 
            ${isSidebarOpen ? "w-64" : "w-19"} md:w-64`}
        >
          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute right-2 p-2 text-red-700 hover:bg-gray-200 text-3xl"
          >
            {isSidebarOpen ? ">" : "<"}
          </button>

          <ul className="mt-5 space-y-4 p-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 
                    ${pathname === item.link ? "bg-red-500 text-white" : "text-gray-700 hover:bg-gray-200"}`}
                >
                  {/* Large Icon Always Visible */}
                  <item.icon className="text-[#8E1616] text-3xl md:text-2xl" />

                  {/* Text: Hidden on small screens when sidebar is collapsed */}
                  <span className={`ml-2 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"} md:ml-64`}>
          {children}
        </main>
      </div>
    </>
  );
}