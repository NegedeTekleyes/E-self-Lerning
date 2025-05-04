'use client';

import { useState } from 'react';
// Removed useRouter as it's not used
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Search, X, Menu } from 'lucide-react';
import CartButton from './CartButton';
import { useAuth } from '../../context/AuthContext';
import ProfileDropdown from './ProfileDropdown';

export default function Header() {
    const [search, setSearch] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const { user, logout } = useAuth();
    const pathname = usePathname();
    // Removed the unused router variable:
    // const router = useRouter();


    // Hide header on instructor pages
    const hideOnPaths = [
        '/dashboard',
        '/instructor',
        '/instructor/signin',
        '/instructor/signup',
    ];
    // Using some() with pathname is correct and doesn't require the router object
    if (hideOnPaths.some((path) => pathname.startsWith(path))) return null;


    const handleSearch = () => {
        if (search.trim()) {
            console.log('Searching for:', search);
            // If you intended to navigate on search, you would use router.push here.
            // For now, it's just console logging.
        }
    };

    return (
        <header className="flex items-center justify-between p-4 bg-[#EEEEEE] shadow-md w-full z-50">
            <Link href="/" className="text-xl font-bold text-[#1D1616]">
                <span className="text-[#1D1616]">E</span>
                <span className="text-[#8E1616]">-Self</span>
            </Link>

            {/* Search bar */}
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
                        className="absolute right-10 top-2.5 cursor-pointer text-gray-500"
                        onClick={() => setSearch('')}
                    />
                )}
                <Search className="absolute right-4 top-2.5 text-gray-500" />
            </div>

            {/* Right-side buttons */}
            <div className="flex items-center gap-4">
                <CartButton />
                <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    <Menu />
                </button>

                {/* Authenticated User */}
                {user ? (
                    <div className="hidden lg:flex items-center gap-4">
                        {user.role === 'student' && (
                            <>
                                <Link href="/my-courses" className="hover:text-[#8E1616]">My Courses</Link>
                                <Link href="/profile" className="hover:text-[#8E1616]">Profile</Link>
                            </>
                        )}
                        <button
                            className="flex items-center gap-2"
                            onClick={() => setProfileOpen(!profileOpen)}
                        >
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-[#1D1616] font-bold">
                                {/* Assuming user.email exists and is a string */}
                                {user.email ? user.email[0].toUpperCase() : ''}
                            </div>
                        </button>
                        {/* ProfileDropdown might use router internally, but Header component doesn't need to pass it */}
                        <ProfileDropdown isOpen={profileOpen} onClose={() => setProfileOpen(false)} onLogout={logout} />
                    </div>
                ) : (
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/instructor/signup" className="bg-[#8E1616] px-4 py-2 rounded text-white hover:bg-[#D84040]">Instructor</Link>
                        <Link href="/student/signup" className="bg-[#8E1616] px-4 py-2 rounded text-white hover:bg-[#D84040]">Sign Up</Link>
                        <Link href="/student/signin" className="bg-[#8E1616] px-4 py-2 rounded text-white hover:bg-[#D84040]">Sign In</Link>
                    </div>
                )}
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-16 right-4 bg-white w-48 shadow-lg p-4 rounded-md flex flex-col gap-3 lg:hidden">
                    <Link href="/instructor/signup" className="bg-[#8E1616] px-4 py-2 rounded text-white text-center">Instructor</Link>
                    <Link href="/student/signup" className="bg-[#8E1616] px-4 py-2 rounded text-white text-center">Sign Up</Link>
                    <Link href="/student/signin" className="bg-[#8E1616] px-4 py-2 rounded text-white text-center">Sign In</Link>
                </div>
            )}
        </header>
    );
}