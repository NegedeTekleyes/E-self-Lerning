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
    <div className="relative bg-white overflow-hidden z-40 h-screen">
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-full">
          <main
            className={` lg:min-h-[calc(100vh+100px)] ${
              !isSmallScreen ? "  lg:mb-100" : "pt-24 pb-24" //Added lg:mb-50 for full screen
            }`}
          >
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pt-20 ">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to E-Self</span>
                <span className="block text-[#8E1616] xl:inline"> – A Great Choice!</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We provide high-quality courses at the best prices. If you want to become an instructor, it’s easy and the perfect place to start!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#8E1616] hover:bg-[#D84040] md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#8E1616] bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 sm:w-full md:w-3/4 h-full">
              <Image
                src={isSmallScreen ? "/hero-.png" : "/Adobe Express - file.png"}
                className="w-full object-cover lg:object-top"
                alt="Hero Image"
                width={isSmallScreen ? 400 : 500}
                height={isSmallScreen ? 300 : 500}
                style={{
                  objectPosition: isSmallScreen ? "top" : "center",
                }}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;