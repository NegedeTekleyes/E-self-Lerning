'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Search, X, Menu } from 'lucide-react';
import Link from 'next/link';
import CartButton from './CartButton';
import { useAuth } from '../../context/AuthContext';
import ProfileDropdown from './ProfileDropdown';

export default function Header() {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout } = useAuth();

  if (pathname === '/landing') {
    return null; 
  }

  const handleSearch = () => {
    if (search.trim()) {
      console.log('Searching for:', search);
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-[#EEEEEE] shadow-md gap-4 w-full relative z-50">
      <Link href="/" className="text-xl font-bold min-w-fit">
        <span className="text-[#1D1616]">E</span>
        <span className="text-[#8E1616]">-Self</span>
      </Link>

      <div className="relative w-full max-w-2xl hidden lg:block">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search courses..."
          className="w-full p-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8E1616]"
        />
        {search && (
          <X
            className="absolute right-10 top-2.5 cursor-pointer text-gray-500 hover:text-black"
            onClick={() => setSearch('')}
          />
        )}
        <Search className="absolute right-4 top-2.5 text-gray-500" />
      </div>

      <div className="flex items-center gap-4">
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Search />
        </button>

        <CartButton />

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </button>

        {user ? (
          <div className="hidden lg:flex items-center gap-4 relative">
            {user.role === 'student' && (
              <>
                <Link href="/my-courses" className="hover:text-[#8E1616]">
                  My Courses
                </Link>
                <Link href="/profile" className="hover:text-[#8E1616]">
                  Profile
                </Link>
              </>
            )}

            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 hover:text-[#8E1616]"
            >
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                {user.email[0].toUpperCase()}
              </div>
            </button>
            <ProfileDropdown isOpen={profileOpen} onClose={() => setProfileOpen(false)} onLogout={logout} />
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-4">
          
            <Link href="/instructor/signup" className="bg-[#8E1616] px-4 py-2 rounded hover:bg-[#D84040] text-white">
              Instructor
            </Link>

            
            <Link href="/student/signup" className="bg-[#8E1616] px-4 py-2 rounded hover:bg-[#D84040] text-white">
              Sign Up (Student)
            </Link>
            <Link href="/student/signin" className="bg-[#8E1616] px-4 py-2 rounded hover:bg-[#D84040] text-white">
              Sign In (Student)
            </Link>
          </div>
        )}
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white shadow-lg rounded-md p-4 flex flex-col gap-3 lg:hidden z-[60]">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Menu</span>
            <button onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black">
              <X size={18} />
            </button>
          </div>
          <hr className="my-2" />
          
       
          <Link href="/instructor/signup" className="bg-[#8E1616] px-4 py-2 rounded hover:bg-[#D84040] text-white text-center">
            Instructor
          </Link>

          <Link href="/student/signup" className="bg-[#8E1616] px-4 py-2 rounded hover:bg-[#D84040] text-white text-center">
            Sign Up
          </Link>
          <Link href="/student/signin" className="bg-[#8E1616] px-4 py-2 rounded hover:bg-[#D84040] text-white text-center">
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}
