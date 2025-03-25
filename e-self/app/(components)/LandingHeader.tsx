'use client';
import Link from 'next/link';

export default function LandingHeader() {
  return (
    <header className="w-screen flex items-center justify-between p-4 bg-[#EEEEEE] shadow-md shadow-gray-500">
      <Link href="/" className="text-xl font-bold">
        <span className="text-[#1D1616]">E</span>
        <span className="text-[#8E1616]">-Self</span>
      </Link>

      <nav className="flex items-center gap-6">
        <Link href="/instructor/signup" className="hover:text-[#8E1616]">
          Instructor
        </Link>
      </nav>
    </header>
  );
}
