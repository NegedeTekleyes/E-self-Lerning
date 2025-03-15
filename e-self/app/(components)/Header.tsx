'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import CartButton from './CartButton';

export default function Header() {
  const [search, setSearch] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('fakeAuthToken'));
  }, []);

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/courses?search=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('fakeAuthToken');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <header className="flex items-center justify-between p-4 bg-[#EEEEEE] shadow-md gap-4">
      <Link href="/" className="text-xl font-bold min-w-fit">E-Self</Link>
      
      <div className="relative w-full max-w-2xl">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search courses..."
          className="w-full p-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8E1616]"
        />
        {search && (
          <X className="absolute right-10 top-2 cursor-pointer" onClick={() => setSearch('')} />
        )}
        <Search className="absolute right-2 top-2" />
      </div>

      <div className="flex items-center gap-4 min-w-fit">
        <CartButton />
        <div className="hidden md:flex items-center gap-4">
          <Link href="/instructor" className="hover:text-[#8E1616]">Instructor</Link>
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="bg-[#8E1616] px-4 py-2 rounded hover:bg-[#D84040] text-white"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link href="/signup" className="bg-[#8E1616] px-4 py-2 rounded hover:bg-[#D84040] text-white">
                Sign Up
              </Link>
              <Link href="/signin" className="bg-[#8E1616] px-4 py-2 rounded hover:bg-[#D84040] text-white">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}