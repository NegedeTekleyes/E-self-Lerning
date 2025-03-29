'use client';
import { useRef } from 'react';
import CourseCard from './CourseCard';
import { Course } from '../../data/courses';

interface CourseListSliderProps {
  title: string;
  courses: Course[];
}

export default function CourseListSlider({ title, courses }: CourseListSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-8 px-25"> 
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>

      <div className="relative">
        <div
          ref={sliderRef}
          className="flex gap-6 pb-4 overflow-x-auto scrollbar-hide"
        >
          {courses.map((course) => (
            <div key={course.slug} className="flex-shrink-0 w-72">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
}
