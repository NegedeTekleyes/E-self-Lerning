'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image

export default function InstructorSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic for actual sign-up, and save instructor data
    localStorage.setItem('instructorAuth', 'true');
    router.push('/instructor/landing');
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col items-center">
        <Image src="/signup1.png" alt="Sign Up" width={400} height={300} className="mb-6" />
        <form onSubmit={handleSignUp} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Instructor Sign Up</h2>

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

          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded mb-3"
            required 
          />

          <button type="submit" className="w-full bg-[#8E1616] text-white p-2 rounded hover:bg-[#D84040]">
            Sign Up
          </button>

          <p className="mt-4 text-center">
            Already have an account? <Link href="/instructor/signin" className="text-[#8E1616] hover:underline">Sign In</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
