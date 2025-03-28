"use client";

import React from "react";
import Link from "next/link";

export default function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <div className="flex items-center">
        {/* Logo or Brand Name */}
        <Link href="/landing" className="text-xl font-bold min-w-fit">
          <span className="text-[#1D1616]">E</span>
          <span className="text-[#8E1616]">-Self</span>
        </Link>
      </div>
    </header>
  );
}