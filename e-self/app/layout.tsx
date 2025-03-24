// app/layout.tsx
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './(components)/Header';
import Footer from './(components)/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'E-Self Learning Platform',
  description: 'Online learning platform with various courses',
  openGraph: {
    title: 'E-Self Learning Platform',
    description: 'Online learning platform with various courses',
    url: 'https://www.your-site.com',
    image: '/path-to-your-image.jpg',  // Customize with an actual image path
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle',  // Replace with your Twitter handle
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Insert additional meta tags if needed */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body className="flex flex-col min-h-screen bg-[#EEEEEE] text-[#1D1616]">
        <AuthProvider>
          <CartProvider>
            <Header />
            <main className="flex-1 container mx-auto p-4">{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
