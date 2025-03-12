"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, X } from "lucide-react";

const Header = () => {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("en");
  const router = useRouter();

  const handleClearSearch = () => setSearch("");
  const handleLanguageChange = (lang: string) => setLanguage(lang);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>
        E-Self
      </div>

      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        {search && (
          <X className="absolute right-10 top-2 cursor-pointer" onClick={handleClearSearch} />
        )}
        <Search className="absolute right-2 top-2" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Cart Icon */}
        <ShoppingCart className="cursor-pointer" onClick={() => router.push("/cart")} />

        {/* Signup/Login */}
        <Link href="/signup">
          <button className="bg-blue-500 px-4 py-2 rounded">Sign Up</button>
        </Link>

        {/* Language Switcher */}
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option value="en">English</option>
          <option value="am">አማርኛ</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
