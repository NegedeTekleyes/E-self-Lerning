'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function InstructorSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication (replace with actual logic)
    localStorage.setItem('instructorAuth', 'true');
    router.push('/instructor/landing');
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-6 md:space-x-12 w-full max-w-5xl">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image src="/signin.png" alt="Sign In" width={400} height={300} className="mb-6 md:mb-0 mx-auto" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSignIn} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Instructor Sign In</h2>

            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded mb-3"
              required 
            />

            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded mb-3"
              required 
            />

            <button type="submit" className="w-full bg-[#8E1616] text-white p-2 rounded hover:bg-[#D84040]">
              Sign In
            </button>

            <p className="mt-4 text-center">
              Don't have an account? <Link href="/instructor/signup" className="text-[#8E1616] hover:underline">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
