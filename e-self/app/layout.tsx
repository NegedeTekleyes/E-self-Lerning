// app/layout.tsx

import '../styles/globals.css';
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import LayoutClient from './layoutClient';

export const metadata = {
  title: 'E-Self Learning Platform',
  description: 'Online learning platform with various courses',
  openGraph: {
    title: 'E-Self Learning Platform',
    description: 'Online learning platform with various courses',
    url: 'https://www.your-site.com',
    images: [
      {
        url: 'https://www.your-site.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'E-Self Learning Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#EEEEEE] text-[#1D1616] antialiased">
        <AuthProvider>
          <CartProvider>
            <LayoutClient>{children}</LayoutClient>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
