// app/layoutClient.tsx (Client Component)
'use client';

import { useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './(components)/student/Header';
import LandingHeader from './(components)/instructor/LandingHeader';
import Footer from './(components)/student/Footer';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/landing' && user && user.role !== 'instructor') {
    router.push('/student');
    return null;
  }

  return (
    <CartProvider>
      {user && user.role === 'instructor' && pathname === '/landing' ? (
        <LandingHeader />
      ) : (
        <Header />
      )}
      <main className="flex-1 container mx-auto p-4">{children}</main>
      <Footer />
    </CartProvider>
  );
}