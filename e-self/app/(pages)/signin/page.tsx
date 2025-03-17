"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from '../../context/AuthContext';
import Image from "next/image";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email);
      router.push("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EEEEEE]">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden sm:block sm:w-1/2 relative">
          <Image 
            src="/signin.png" 
            alt="Sign In Illustration" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Right Side - Sign In Form */}
        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#1D1616]">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#8E1616]"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#8E1616]"
                placeholder="Enter your password"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#8E1616] text-white py-2 rounded-md hover:bg-[#D84040] transition-all">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
