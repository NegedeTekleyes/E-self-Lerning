'use client'; // Ensure it's a client-side component

import Image from 'next/image';
import { motion } from 'framer-motion';  // Ensure correct import

export default function InstructorLanding() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#EEEEEE] pt-4 pb-6 px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Welcome Text with Animation */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-7xl font-bold mb-6">
            <span className="text-black">Welcome</span>, <span className="text-[#8E1616]">Instructor!</span> {/* "Instructor" in #8E1616 */}
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Empower students by sharing your knowledge. Create and manage your courses easily.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/instructor/create-course"
              className="bg-[#8E1616] text-white px-6 py-3 rounded-lg hover:bg-[#D84040] transition"
            >
              Create a Course
            </a>
            <a
              href="/instructor/my-courses"
              className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Manage Courses
            </a>
          </div>
        </motion.div>

        {/* Right Side: Instructor Image with Animation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <Image
            src="/instructor.png"
            alt="Instructor"
            width={800}
            height={1000}
            className="rounded-lg shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </main>
  );
}
