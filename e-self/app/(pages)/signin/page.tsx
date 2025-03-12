// /app/signin/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here (e.g., authentication, form validation)
    console.log("Email:", email);
    console.log("Password:", password);
    // Redirect to the home page or dashboard after successful sign-in
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 text-black rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="w-full bg-[#006CFF] text-white p-2 rounded-md hover:bg-[#339CFF] transition-all">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
