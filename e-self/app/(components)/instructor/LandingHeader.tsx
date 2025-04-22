"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LandingHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Optional: hide header on certain pages
  if (pathname === "/instructor/signin" || pathname === "/instructor/signup") {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-3 flex items-center justify-between transition-shadow ${
        scrolled ? "shadow-md bg-white" : "bg-white"
      }`}
    >
      <Link href="/dashboard" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Instructor Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="text-xl font-semibold text-[#8E1616] hidden sm:inline">
          Instructor Panel
        </span>
      </Link>

      <div className="text-sm text-gray-600 hidden sm:block">
        Welcome back!
      </div>
    </header>
  );
}
