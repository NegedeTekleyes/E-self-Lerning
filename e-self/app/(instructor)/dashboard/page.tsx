"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine, FaBook, FaGraduationCap, FaDollarSign } from "react-icons/fa";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import { MdLeaderboard } from "react-icons/md";

import LandingHeader from "../../(components)/LandingHeader";

const menuItems = [
  { name: "Overview", icon: <FaChartLine className="text-[#8E1616]" />, link: "/dashboard/overview" },
  { name: "Create Course", icon: <FaBook className="text-[#8E1616]" />, link: "/dashboard/create-course" },
  { name: "Students", icon: <MdLeaderboard className="text-[#8E1616]" />, link: "/dashboard/students" },
  { name: "Modify Course", icon: <FaBook className="text-[#8E1616]" />, link: "/dashboard/modify-course" },
  { name: "Balance", icon: <FaWallet className="text-[#8E1616]" />, link: "/dashboard/balance" },  // Changed icon to FaWallet for balance
  { name: "Get Certificate", icon: <FaGraduationCap className="text-[#8E1616]" />, link: "/dashboard/certificates" },
  { name: "Messages", icon: <FiMessageSquare className="text-[#8E1616]" />, link: "/dashboard/messages", badge: 5 },
  { name: "Settings", icon: <FiSettings className="text-[#8E1616]" />, link: "/dashboard/settings" },
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
        <aside className={`bg-white h-screen fixed top-16 left-0 z-40 shadow-md transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"}`}>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-3 text-gray-700 hover:bg-gray-200 w-full flex justify-center"
          >
            {isSidebarOpen ? "❌" : "☰"}
          </button>

          <ul className="mt-5 space-y-4 p-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`flex items-center space-x-2 p-3 rounded-lg ${pathname === item.link ? "bg-red-500 text-white" : "text-gray-700 hover:bg-gray-200"}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {isSidebarOpen && <span>{item.name}</span>}
                  {item.badge && isSidebarOpen && (
                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
          {children}
        </main>
      </div>
    </>
  );
}
