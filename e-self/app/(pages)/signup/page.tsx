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
    <div className="flex items-center justify-center min-h-screen bg-[#EEEEEE]"> 
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-md">
        <div className="w-full sm:w-1/2">
          <Image
            src="/sign-up.png"
            alt="Signup Image"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#1D1616]">Sign up with email</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#8E1616]"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#8E1616]"
                required
              />
            </div>
            <button type="submit" className="w-full bg-[#8E1616] text-white py-2 rounded-md hover:bg-[#D84040] transition duration-300">
              Continue with email
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-xs text-[#1D1616]">
              Already have an account? <Link href="/signin" className="text-[#8E1616] hover:text-[#D84040]">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
