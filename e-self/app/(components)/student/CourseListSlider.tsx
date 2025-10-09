'use client';

import { useRef } from 'react';
import CourseCard from '../../../components/CourseCard';
import { Course } from '../../types/course';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CourseListSliderProps {
  title: string;
  courses: Course[] | undefined | null;
}

export default function CourseListSlider({ title, courses }: CourseListSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const validCourses = Array.isArray(courses) ? courses : [];

  return (
    <section className="relative mb-12 px-4 sm:px-8 lg:px-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-100 hover:text-[#8E1616] transition-colors duration-200">
          {title}
        </h2>
        {/* Optional Scroll Buttons */}
        {validCourses.length > 0 && (
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#8E1616] hover:text-white transition-colors shadow-sm"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#8E1616] hover:text-white transition-colors shadow-sm"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Slider */}
      <div className="relative group">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>

        <div
          ref={sliderRef}
          className="flex gap-6 pb-4 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {validCourses.length > 0 ? (
            validCourses.map((course) =>
              course && course.id ? (
                <div
                  key={course.id}
                  className="flex-shrink-0 w-72 hover:scale-[1.02] transition-transform duration-200"
                >
                  <CourseCard course={course} />
                </div>
              ) : null
            )
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No courses available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
