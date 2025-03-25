// components/LandingHeader.tsx
'use client';

import Link from 'next/link';
// app/landing/page.tsx
import LandingHeader from '../(components)/Header';

export default function LandingPage() {
  return (
    <div>
      <LandingHeader /> {/* This will render the custom header for the landing page */}
      <main className="mt-10 text-center">
        <h1 className="text-4xl font-bold text-[#8E1616]">Welcome to E-Self</h1>
        <p className="mt-4 text-lg text-gray-700">Your one-stop platform to learn and teach courses online.</p>
        <div className="mt-8">
          <Link href="/courses" className="bg-[#8E1616] px-6 py-2 rounded hover:bg-[#D84040] text-white">
            Explore Courses
          </Link>
        </div>
      </main>
    </div>
  );
}
