'use client';

import { useAuth } from '../../../context/AuthContext';
import { useState } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ProfileEdit() {
  const { user, updateUser } = useAuth();
  const [username, setUsername] = useState(user?.username || '');
  const [profileImage, setProfileImage] = useState(user?.profileImage || '/default-profile.png');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ username, profileImage });
    alert('Profile updated (client-side only for now)');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fef6f6] to-[#ffffff] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-transform transform hover:scale-[1.01]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#1D1616]">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile image section */}
          <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden group shadow-md border-4 border-[#8E1616]/20">
            <Image
              src={profileImage}
              alt="Profile"
              fill
              className="object-cover transition-all duration-300 group-hover:opacity-80"
              sizes="100vw"
            />
            {/* Overlay upload icon */}
            <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-300">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Camera className="w-6 h-6 text-white" />
            </label>
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-2 text-gray-700">
              Username
            </label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full border-gray-300 focus:ring-[#8E1616] focus:border-[#8E1616] text-[#1D1616]"
            />
          </div>

          {/* (Optional) Bio field */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium mb-2 text-gray-700">
              Bio <span className="text-gray-400 text-xs">(optional)</span>
            </label>
            <textarea
              id="bio"
              placeholder="Tell us something about yourself..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#8E1616] focus:border-[#8E1616] text-[#1D1616] resize-none"
              rows={3}
            ></textarea>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#8E1616] hover:bg-[#D84040] text-white font-medium py-3 rounded-md transition-all duration-300"
          >
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
}
