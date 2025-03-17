'use client';
import Link from 'next/link';

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export default function ProfileDropdown({ isOpen, onClose, onLogout }: ProfileDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-12 bg-white shadow-lg rounded-md p-4 w-48 z-50">
      <Link
        href="/profile/edit"
        className="block py-2 px-4 hover:bg-gray-100 rounded-md"
        onClick={onClose}
      >
        Edit Profile
      </Link>
      <Link
        href="/profile/change-password"
        className="block py-2 px-4 hover:bg-gray-100 rounded-md"
        onClick={onClose}
      >
        Change Password
      </Link>
      <Link
        href="/settings"
        className="block py-2 px-4 hover:bg-gray-100 rounded-md"
        onClick={onClose}
      >
        Settings
      </Link>
      <button
        onClick={() => {
          onLogout();
          onClose();
        }}
        className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded-md text-red-600"
      >
        Logout
      </button>
    </div>
  );
}
