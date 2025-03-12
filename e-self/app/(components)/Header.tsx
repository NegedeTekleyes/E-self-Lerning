"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, X, Menu } from "lucide-react";

const Header = () => {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("en");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State to toggle the menu visibility
  const router = useRouter();

  const handleClearSearch = () => setSearch("");
  const handleLanguageChange = (lang: string) => setLanguage(lang);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 text-black">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>
        E-Self
      </div>

      {/* Search Bar for Small Screens */}
      <div className="relative w-1/3">
        {/* Show search icon on small screens */}
        {!showSearchBar && (
          <Search
            className="cursor-pointer sm:hidden"
            onClick={() => setShowSearchBar(true)}
          />
        )}
        {/* Show input field when showSearchBar is true */}
        {showSearchBar && (
          <div className="absolute top-0 left-0 w-full p-2 bg-gray-200 rounded-full">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full p-2 rounded-full bg-gray-200 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006CFF]"
            />
            {search && (
              <X
                className="absolute right-2 top-2 cursor-pointer"
                onClick={handleClearSearch}
              />
            )}
          </div>
        )}
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div className="sm:hidden flex items-center">
        <Menu
          className="cursor-pointer"
          onClick={() => setShowMenu(!showMenu)} // Toggle menu visibility
        />
      </div>

      {/* Menu for Small Screens */}
      {showMenu && (
        <div className="absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg sm:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/signup">
              <button className="bg-[#006CFF] px-4 py-2 rounded transition-all duration-300 hover:bg-[#339CFF]">
                Sign Up
              </button>
            </Link>

            <Link href="/signin">
              <button className="bg-[#006CFF] px-4 py-2 rounded transition-all duration-300 hover:bg-[#339CFF]">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Right Section */}
      <div className="hidden sm:flex items-center gap-4">
        {/* Cart Icon */}
        <ShoppingCart className="cursor-pointer" onClick={() => router.push("/cart")} />

        {/* Sign Up and Sign In Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Link href="/signup">
            <button className="bg-[#006CFF] px-4 py-2 rounded transition-all duration-300 hover:bg-[#339CFF]">
              Sign Up
            </button>
          </Link>

          <Link href="/signin">
            <button className="bg-[#006CFF] px-4 py-2 rounded transition-all duration-300 hover:bg-[#339CFF]">
              Sign In
            </button>
          </Link>
        </div>

        {/* Language Switcher */}
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="bg-gray-200 text-black p-2 rounded"
        >
          <option value="en">English</option>
          <option value="am">አማርኛ</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
