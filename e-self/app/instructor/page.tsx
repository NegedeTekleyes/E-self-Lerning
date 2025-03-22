'use client'; // Make sure it's a client-side component

import Image from 'next/image';
import { motion } from 'framer-motion';  // Ensure correct import

export default function InstructorLanding() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#EEEEEE] p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Welcome Text with Animation */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-[#8E1616] mb-4">
            Welcome, Instructor!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
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
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/instructor.png"
            alt="Instructor"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </main>
  );
}
