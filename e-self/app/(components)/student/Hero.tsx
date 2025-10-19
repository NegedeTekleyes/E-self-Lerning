'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/public/hero-image.png'
const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-[#fef6f6] to-white overflow-hidden h-screen flex flex-col">
      {/* Decorative shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FAD2D2] rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#F8B6B6] rounded-full opacity-40 animate-pulse-slow"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center h-full">
        {/* Text Section */}
        <div
          className={`flex flex-col ${
            isSmallScreen
              ? 'justify-center items-center text-center px-6 py-12'
              : 'justify-center text-left lg:w-1/2 px-6 lg:px-12 py-12'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            <span className="block animate-fade-in">Welcome to E-Self</span>
            <span className="block text-[#8E1616] animate-fade-in delay-200">– A Great Choice!</span>
          </h1>

          <p className="mt-6 text-gray-600 sm:text-lg md:text-xl max-w-lg animate-fade-in delay-400">
            We provide high-quality courses at the best prices. Want to become an instructor? It’s easy and the perfect place to start!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 animate-fade-in delay-600">
            <Button className="bg-[#8E1616] hover:bg-[#D84040] text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              Get Started
            </Button>
            <Button variant="outline" className="text-[#8E1616] border-[#8E1616] hover:bg-gray-100 px-8 py-4 text-lg shadow-sm transform hover:scale-105 transition-transform duration-300">
              Live Demo
            </Button>
          </div>
        </div>

        {/* Image Section */}
        {!isSmallScreen && (
          <div className="lg:w-1/2 w-full flex justify-center items-center relative">
            <div className="rounded-xl overflow-hidden shadow-2xl animate-float">
              <Image
                src={heroImage}
                alt="Hero Image"
                width={500}
                height={500}
                className="object-cover lg:object-top w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="block w-3 h-3 border-b-2 border-r-2 border-[#8E1616] rotate-45 mb-2"></span>
        <span className="block w-3 h-3 border-b-2 border-r-2 border-[#8E1616] rotate-45"></span>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.78,22,104.53,22,158.12,8.3,48.37-12,95.27-33,144-43.5C390.41,2.71,438.36,0,480,0c82.12,0,130.52,38.16,208,49.42,61.77,9.16,113.38-11.86,172-28.35,50.13-14.15,98.76-28.62,150-28.62s93.87,11.36,144,27.92V0Z" fill="#fef6f6"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
