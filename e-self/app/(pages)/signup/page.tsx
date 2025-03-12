"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="w-full sm:w-1/2">
          <Image
            src="/sign-up.png"  // Image source
            alt="Signup Image"
            width={600}
            height={400}  // Adjusted to match signup form height proportionally
            className="object-cover w-full h-full"
          />
        </div>

        {/* Signup Form Section */}
        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-center mb-6">Sign up with email</h2>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
              <span className="ml-2 text-sm text-gray-700">
                Send me special offers, personalized recommendations, and learning tips.
              </span>
            </label>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
            Continue with email
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Other sign up options</p>
            <div className="flex justify-center mt-2 space-x-2">
              <button className="border rounded-full p-2">G</button>
              <button className="border rounded-full p-2">f</button>
              <button className="border rounded-full p-2"></button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By signing up, you agree to our <Link href="#" className="text-blue-600">Terms of Use</Link> and <Link href="#" className="text-blue-600">Privacy Policy</Link>.
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Already have an account? <Link href="/signin" className="text-blue-600">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
