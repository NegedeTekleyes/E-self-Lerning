'use client';

import Link from 'next/link';
import { LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/instructor/landing" className="text-2xl font-extrabold tracking-tight flex items-center gap-1 hover:opacity-90 transition-opacity">
          <span className="text-[#1D1616]">E</span>
          <span className="text-[#8E1616]">-Self</span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Future Profile or Dashboard Button */}
          <Link
            href="/instructor/dashboard"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#8E1616] transition-colors"
          >
            <User size={16} />
            Dashboard
          </Link>

          {/* Sign Out Button */}
          <Button
            variant="outline"
            className="flex items-center gap-1 border-[#8E1616] text-[#8E1616] hover:bg-[#8E1616] hover:text-white transition-all duration-300"
            asChild
          >
            <Link href="/">
              <LogOut size={16} />
              Sign Out
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
