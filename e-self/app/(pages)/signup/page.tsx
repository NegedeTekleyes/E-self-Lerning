"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/app/api/auth'; // Adjust the import path if needed

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser({ email, password });
      router.push('/signin'); // Redirect to signin after successful registration
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100"> {/* Changed background color */}
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="w-full sm:w-1/2">
          {/* Keep the image */}
          <Image
            src="/sign-up.png"
            alt="Signup Image"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-center mb-6">Sign up with email</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
              Continue with email
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Already have an account? <Link href="/signin" className="text-blue-600">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
