'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Import Link for navigation

export default function InstructorSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication (replace with actual logic)
    localStorage.setItem('instructorAuth', 'true');
    router.push('/landing');
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <form onSubmit={handleSignIn} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
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
    </main>
  );
}
