'use client';
import Link from 'next/link';

export default function LandingHeader() {
  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-8 py-3 bg-[#EEEEEE] shadow-md shadow-gray-500">
      <Link href="/" className="text-lg sm:text-xl font-bold">
        <span className="text-[#1D1616]">E</span>
        <span className="text-[#8E1616]">-Self</span>
      </Link>

      <nav className="flex items-center gap-4 sm:gap-6">
        <Link href="/instructor/signup" className="text-sm sm:text-base hover:text-[#8E1616]">
          Instructor
        </Link>
      </nav>
    </header>
  );
}
