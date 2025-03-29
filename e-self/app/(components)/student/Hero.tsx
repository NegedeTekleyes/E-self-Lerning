"use client";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen w-screen bg-cover bg-center bg-no-repeat animate-bg-move"
      style={{ backgroundImage: "url('/Untitled (Website).png')" }} // Ensure image is inside public/ folder
    >
      <h1 className="text-white text-4xl font-bold">Welcome to Our Platform</h1>
      <style>
        {`
          @keyframes bgMove {
            0% { background-position: center center; }
            50% { background-position: center bottom; }
            100% { background-position: center center; }
          }
          .animate-bg-move {
            animation: bgMove 10s infinite alternate ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
