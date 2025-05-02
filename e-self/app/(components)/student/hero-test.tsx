"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative flex items-center justify-center bg-gray-100 px-6 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-black">
            Welcome to E-Self–
            <span className="relative">
              <span className="before:absolute before:w-12 before:h-1 before:bg-black before:bottom-1 before:left-0"></span>
            </span>
          </h1>
          <h2 className="text-4xl font-bold text-purple-600 mt-2">
            A Great Choice!
          </h2>
          <p className="mt-4 text-gray-700">
            We provide high-quality courses at the best prices. If you want to
            become an instructor, it’s easy and the perfect place to start!
          </p>
        </div>

        {/* Right Side: Image with Shape Effect */}
        <div className="md:w-1/2 relative mt-10 md:mt-0">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-y-0 right-0 w-3/4 bg-gray-200 skew-x-12"></div>
            <Image
              src={isSmallScreen ? "/hero-png.png" : "/Untitled (Website).png"} // Conditionally set image source
              width={500}
              height={500}
              alt="Instructor"
              className="relative z-10 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
