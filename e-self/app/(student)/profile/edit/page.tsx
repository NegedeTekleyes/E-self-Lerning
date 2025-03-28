// app/profile/edit/page.tsx
'use client';
import { useAuth } from '../../../context/AuthContext';
import { useState } from 'react';

export default function ProfileEdit() {
  const { user, updateUser } = useAuth();
  const [username, setUsername] = useState(user?.username || '');
  const [profileImage, setProfileImage] = useState(user?.profileImage || '');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add actual API call here
    updateUser({ username, profileImage });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-[#1D1616]">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 relative w-32 h-32 mx-auto">
          <img 
            src={profileImage || '/default-profile.png'} 
            className="w-full h-full rounded-full object-cover"
            alt="Profile"
          />
          <label className="absolute bottom-0 right-0 bg-[#8E1616] p-2 rounded-full cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
            </svg>
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-[#8E1616] text-white p-2 rounded-md hover:bg-[#D84040] transition-all"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}