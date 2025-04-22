'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LandingHeader = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/instructor/landing" className="text-2xl font-bold flex items-center">
          <span className="text-[#1D1616]">E</span>
          <span className="text-[#8E1616]">-Self</span>
        </Link>

   

        {/* Sign out */}
        <Link
          href="/instructor/signout"
          className="px-4 py-2 border border-[#1D1616] rounded-md text-sm hover:bg-[#8E1616] hover:text-white transition"
        >
          Sign Out
        </Link>
      </div>
    </header>
  );
};

export default LandingHeader;
