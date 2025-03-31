// app/layout.tsx (Server Component)
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Footer from './(components)/student/Footer';
import '../styles/globals.css';
import React from 'react';
import LayoutClient from '../app/layoutClient'; 

export const metadata = {
  title: 'E-Self Learning Platform',
  description: 'Online learning platform with various courses',
  openGraph: {
    title: 'E-Self Learning Platform',
    description: 'Online learning platform with various courses',
    url: 'https://www.your-site.com',
    image: '/path-to-your-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle',
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body className="flex flex-col min-h-screen bg-[#EEEEEE] text-[#1D1616]">
        <AuthProvider>
          <LayoutClient children={children} />
        </AuthProvider>
      </body>
    </html>
  );
}