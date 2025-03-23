'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Course Created:', formData);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#EEEEEE] p-6">
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
        <motion.h1 className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Create a New Course
        </motion.h1>

        <form onSubmit={handleSubmit}>
          {['title', 'category', 'description', 'level', 'price'].map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-lg font-semibold mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === 'description' ? 'textarea' : 'text'}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          ))}

          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-[#8E1616] text-white px-8 py-3 rounded-lg hover:bg-[#D84040]">
              Create Course
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
