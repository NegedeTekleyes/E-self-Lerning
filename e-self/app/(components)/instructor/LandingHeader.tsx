// LandingHeader.tsx (Instructor Header)
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import ProfileDropdown from '../../(components)/instructor/ProfileDropdown';

export default function LandingHeader() {
  const { user, logout } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <div className="flex items-center">
        <Link href="/landing" className="text-xl font-bold min-w-fit">
          <span className="text-[#1D1616]">E</span>
          <span className="text-[#8E1616]">-Self</span>
        </Link>
      </div>

      {user && (
        <div className="flex items-center gap-4 relative">
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
      )}
    </header>
  );
}