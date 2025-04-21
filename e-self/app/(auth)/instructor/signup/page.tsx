'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';  // If using context for auth
import Link from 'next/link';
import Image from 'next/image';

const InstructorSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth();  // Use context for login if needed
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      login(email, 'instructor'); // Set the role here
      router.push('/dashboard'); //redirect to the dashboard.
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EEEEEE]">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden sm:block sm:w-1/2 relative">
          <Image
            src="/signup1.png"
            alt="Sign Up Illustration"
            fill
            className="object-cover"
          />
        </div>

        {/* Right side - Sign Up Form */}
        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#1D1616]">Instructor Sign Up</h2>
          <form onSubmit={handleSignUp}>
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
            <div className="mb-6">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-[#8E1616]"
                required
              />
            </div>
            <button type="submit" className="w-full bg-[#8E1616] text-white py-2 rounded-md hover:bg-[#D84040] transition duration-300">
              Sign Up
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-xs text-[#1D1616]">
              Already have an account? <Link href="/instructor/signin" className="text-[#8E1616] hover:text-[#D84040]">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSignUp;
