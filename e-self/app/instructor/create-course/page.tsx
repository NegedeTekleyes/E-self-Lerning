'use client'; // Ensure it's a client-side component

import { useState } from 'react';
import { motion } from 'framer-motion'; // For animations

export default function CreateCourse() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    level: '',
    price: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You would typically send formData to your API or server here
    console.log('Course Created:', formData);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#EEEEEE] pt-4 pb-6 px-6">
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <motion.h1
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Create a New Course
        </motion.h1>

        {/* Course Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-semibold mb-2">
              Course Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-lg font-semibold mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-semibold mb-2">
              Course Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows={4}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="level" className="block text-lg font-semibold mb-2">
              Course Level
            </label>
            <input
              type="text"
              id="level"
              name="level"
              value={formData.level}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-lg font-semibold mb-2">
              Course Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#8E1616] text-white px-8 py-3 rounded-lg hover:bg-[#D84040] transition"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
