// app/(components)/CourseListSlider.tsx
'use client';
import { useRef } from 'react';
import CourseCard from './CourseCard';
import { Course } from '../data/courses';

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
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>

      <div className="relative group">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
        >
          {courses.map((course) => (
            <div
              key={course.slug}
              className="flex-shrink-0 w-72" // Adjust width as needed
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#8E1616] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg hover:bg-[#D84040]"
        >
          &lt;
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#8E1616] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg hover:bg-[#D84040]"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}