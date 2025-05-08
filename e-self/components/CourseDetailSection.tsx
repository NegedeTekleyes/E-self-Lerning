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
    <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative w-full h-72 rounded overflow-hidden">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
        <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

        <div className="text-gray-800 mb-4">
          <p><strong>Detailed Description:</strong> {course.detailedDescription}</p>
          <p><strong>Duration:</strong> {course.duration} hours</p>
          <p><strong>Price:</strong> ${course.price}</p>
          <p><strong>Rating:</strong> ⭐ {course.rating}</p>
        </div>

        <div className="mb-4">
          {course.prerequisites && (
            <div className="mb-2">
              <strong>Prerequisites:</strong>
              <ul className="list-disc ml-5">
                {course.prerequisites.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {course.learningOutcomes && (
            <div className="mb-2">
              <strong>Learning Outcomes:</strong>
              <ul className="list-disc ml-5">
                {course.learningOutcomes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {course.includes && (
            <div className="mb-2">
              <strong>Materials Included:</strong>
              <ul className="list-disc ml-5">
                {course.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {course.expectations && (
            <p className="mt-2"><strong>Expectations:</strong> {course.expectations}</p>
          )}
        </div>

        <Button
          onClick={onAddToCart}
          disabled={isInCart}
          className="bg-[#8E1616] hover:bg-[#D84040]"
        >
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
}
