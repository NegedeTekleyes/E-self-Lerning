'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import CartButton from './CartButton';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const hideOnPaths = [
    '/dashboard',
    '/instructor',
    '/instructor/signin',
    '/instructor/signup',
  ];
  if (hideOnPaths.some((path) => pathname.startsWith(path))) return null;

  const handleSearch = () => {
    if (search.trim()) {
      console.log('Searching for:', search);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-1">
          <span className="text-[#1D1616] dark:text-white">E</span>
          <span className="text-[#8E1616]">-Self</span>
        </Link>

        {/* Search Bar (desktop) */}
        <div className="relative hidden lg:block w-full max-w-2xl mx-6">
          <Input
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="pr-10 bg-white dark:bg-gray-800 dark:text-gray-100 focus:ring-[#8E1616] focus:border-[#8E1616]"
          />
          {search && (
            <X
              className="absolute right-10 top-2.5 cursor-pointer text-gray-500 hover:text-[#8E1616]"
              onClick={() => setSearch('')}
            />
          )}
          <Search className="absolute right-4 top-2.5 text-gray-500" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <CartButton />

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Authenticated Section */}
          {user ? (
            <div className="hidden lg:flex items-center gap-4">
              {user.role === 'student' && (
                <>
                  <Link
                    href="/my-courses"
                    className="text-sm text-gray-700 dark:text-gray-200 hover:text-[#8E1616] transition-colors"
                  >
                    My Courses
                  </Link>
                  <Link
                    href="/profile"
                    className="text-sm text-gray-700 dark:text-gray-200 hover:text-[#8E1616] transition-colors"
                  >
                    Profile
                  </Link>
                </>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full h-9 w-9 p-0 border-gray-300 dark:border-gray-600 dark:text-gray-100"
                  >
                    <span className="text-sm font-bold">
                      {user.email ? user.email[0].toUpperCase() : '?'}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="dark:bg-gray-800 dark:text-gray-100">
                  <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/instructor/signup">
                <Button className="bg-[#8E1616] hover:bg-[#A02C2C] text-white shadow-sm">
                  Instructor
                </Button>
              </Link>
              <Link href="/student/signup">
                <Button className="bg-[#8E1616] hover:bg-[#A02C2C] text-white shadow-sm">
                  Sign Up
                </Button>
              </Link>
              <Link href="/student/signin">
                <Button className="bg-[#8E1616] hover:bg-[#A02C2C] text-white shadow-sm">
                  Sign In
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && !user && (
        <>
          <div
            className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700 animate-slide-down"
          >
            <div className="flex flex-col p-4 gap-3">
              <Link href="/instructor/signup" onClick={() => setMenuOpen(false)}>
                <Button className="w-full bg-[#8E1616] hover:bg-[#A02C2C] text-white">
                  Instructor
                </Button>
              </Link>
              <Link href="/student/signup" onClick={() => setMenuOpen(false)}>
                <Button className="w-full bg-[#8E1616] hover:bg-[#A02C2C] text-white">
                  Sign Up
                </Button>
              </Link>
              <Link href="/student/signin" onClick={() => setMenuOpen(false)}>
                <Button className="w-full bg-[#8E1616] hover:bg-[#A02C2C] text-white">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Backdrop when menu open */}
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-[2px] z-40"
          />
        </>
      )}
    </header>
  );
}
