'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Progress } from '../../(components)/student/Progress';
import { handleSubmit } from './handleSubmit';

const steps = [
  'Basic Info', 'Details', 'Requirements', 'Outcomes', 'Extras', 'Instructor'
];

export default function CreateCourse() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    detailedDescription: '',
    duration: '',
    price: '',
    imageUrl: '',
    category: '',
    prerequisites: '',
    requirements: '',
    learningOutcomes: '',
    benefits: '',
    includes: '',
    expectations: '',
    level:'',
    instructorName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#EEEEEE] p-6">
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
        <motion.h1 className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Create a New Course
        </motion.h1>

        <Progress value={(step / (steps.length - 1)) * 100} className="mb-4" />
        <p className="text-center text-lg font-medium">{steps[step]}</p>

        <form onSubmit={handleSubmit(formData)} className="mt-4">
          {Object.keys(formData).slice(step * 2, step * 2 + 2).map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-lg font-semibold mb-2">
                {field.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          ))}

          <div className="flex justify-between mt-6">
            {step > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
              >
                Back
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#8E1616] text-white px-6 py-2 rounded-lg hover:bg-[#D84040]"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800"
              >
                Create Course
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
