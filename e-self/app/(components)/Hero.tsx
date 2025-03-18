// app/(components)/Hero.tsx
import Image from 'next/image';

export default function Hero() {
 return (
 <div className="relative bg-[#EEEEEE] overflow-hidden z-40">
 <div className="max-w-7xl mx-auto">
 <div className="relative z-10 pb-8 bg-[#EEEEEE] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
 <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
 <div className="sm:text-center lg:text-left">
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
 </main>
 </div>
 </div>
 <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
 <Image
 className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
 src="/hero-image.jpg"
 alt=""
 width={500} // Adjust as needed
 height={500} // Adjust as needed
 layout="responsive"
 />
 <div className="absolute bottom-0 right-0 p-6 bg-white bg-opacity-75 rounded-lg mr-4 mb-4">
 <p className="text-lg font-semibold">Unlock Your Potential with E-Self</p>
 </div>
 </div>
 </div>
 );
}