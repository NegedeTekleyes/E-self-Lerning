'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  bio: string;
  avatar: File | null;
}

export default function EditProfilePage() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    fullName: 'Instructor Name',
    email: 'instructor@example.com',
    phone: '+251 9XX XXX XXX',
    bio: 'Write a short bio about yourself...',
    avatar: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle text & textarea changes
  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, avatar: e.target.files[0] });
    }
  };

  // Form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/dashboard');
      alert('Profile updated successfully!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-2xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Edit Profile
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-2 border-gray-300">
              {formData.avatar ? (
                <Image
                  src={URL.createObjectURL(formData.avatar)}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              ) : (
                <span className="flex items-center justify-center h-full text-gray-500 text-lg">
                  Avatar
                </span>
              )}
            </div>

            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleFileChange}
              className="text-sm text-gray-500"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleTextChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleTextChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleTextChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleTextChange}
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              onClick={() => router.back()}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-red-600 hover:bg-red-500 text-white"
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
