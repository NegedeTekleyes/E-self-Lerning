import { useState } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa"; // Profile icon
import Image from "next/image";

export default function LandingHeader() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <div className="flex items-center">
        {/* Logo or Brand Name */}
        <Link href="/dashboard" className="text-xl font-bold min-w-fit">
        <span className="text-[#1D1616]">E</span>
        <span className="text-[#8E1616]">-Self</span>
      </Link>
      </div>

      {/* Profile Section */}
      <div className="relative">
        <div
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center cursor-pointer"
        >
          {/* Profile Picture or Initials */}
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            {/* Replace with the dynamic profile image */}
            <Image src="/profile-pic.jpg" alt="Profile" width={40} height={40} className="rounded-full" />
          </div>
        </div>

        {/* Profile Options Dropdown */}
        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
            <ul className="space-y-3">
              <li>
                <Link href="/dashboard/profile" className="text-gray-700 hover:text-[#8E1616]">Edit Profile</Link>
              </li>
              <li>
                <Link href="/dashboard/settings" className="text-gray-700 hover:text-[#8E1616]">Settings</Link>
              </li>
              <li>
                <Link href="/dashboard/change-password" className="text-gray-700 hover:text-[#8E1616]">Change Password</Link>
              </li>
              <li>
                <Link href="/logout" className="text-gray-700 hover:text-[#8E1616]">Log Out</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
