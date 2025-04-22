"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-3 flex items-center justify-between">
      <Link href="/dashboard" className="flex items-center gap-2">
        <Image
          src="/logo.svg" // Replace with your logo path
          alt="Instructor Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="text-xl font-semibold text-[#8E1616] hidden sm:inline">
          Instructor Panel
        </span>
      </Link>
    </header>
  );
}
