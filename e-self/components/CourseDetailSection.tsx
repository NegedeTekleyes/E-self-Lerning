'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Course } from '../app/types/course';

interface Props {
  course: Course;
  isInCart: boolean;
  onAddToCart: () => void;
}

export default function CourseDetailSection({ course, isInCart, onAddToCart }: Props) {
  return (
    <div className="bg-white shadow-xl rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left - Course Image */}
      <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-md">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Right - Course Info */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <p className="text-md text-gray-600 mb-4 italic">{course.description}</p>

          <div className="space-y-2 text-sm text-gray-800">
            <p><span className="font-semibold">Duration:</span> {course.duration} hours</p>
            <p><span className="font-semibold">Price:</span> ${course.price}</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {course.rating} ({course.overallRating})</p>
            <p className="mt-3 text-gray-700 leading-relaxed"><span className="font-semibold">Overview:</span> {course.detailedDescription}</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <Button
            onClick={onAddToCart}
            disabled={isInCart}
            className="w-full bg-[#8E1616] hover:bg-[#D84040] text-white text-lg py-2"
          >
            {isInCart ? 'Already in Cart 🛒' : 'Add to Cart'}
          </Button>
        </div>
      </div>

      {/* Full Width Section */}
      <div className="col-span-1 md:col-span-2 mt-10 space-y-6">
        {/* Prerequisites */}
        {course.prerequisites.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800">📌 Prerequisites</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {course.prerequisites.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        )}

        {/* Learning Outcomes */}
        {course.learningOutcomes.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800">🎯 Learning Outcomes</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {course.learningOutcomes.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        )}

        {/* Included Materials */}
        {course.includes.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800">📦 What’s Included</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {course.includes.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        )}

        {/* Expectations */}
        {course.expectations && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800">💡 What to Expect</h2>
            <p className="text-gray-700 ml-1">{course.expectations}</p>
          </div>
        )}
      </div>
    </div>
  );
}
