'use client';
import Link from 'next/link';

export default function LandingHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-[#EEEEEE] shadow-md w-full">
      <Link href="/" className="text-xl font-bold">
        <span className="text-[#1D1616]">E</span>
        <span className="text-[#8E1616]">-Self</span>
      </Link>

      <nav className="flex items-center gap-6">
    
        <Link href="/instructor/signup" className="hover:text-[#8E1616]">
          Instructor
        </Link>
        {/* <Link href="/signin" className="bg-[#8E1616] px-4 py-2 rounded hover:bg-[#D84040] text-white">
          Sign In
        </Link> */}
      </nav>
    </header>
  );
}
