import type { Metadata } from 'next';
import { CartProvider } from './context/CartContext';
import Header from './(components)/Header';
import Footer from './(components)/Footer';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'E-Self Learning Platform',
  description: 'Online learning platform with various courses',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-[#EEEEEE] text-[#1D1616]">
        <CartProvider>
          <Header />
          <main className="flex-1 container mx-auto p-4">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}