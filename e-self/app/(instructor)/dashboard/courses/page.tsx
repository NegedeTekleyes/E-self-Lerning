'use client';

import React, { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import { courses as initialCourses } from '@/app/data/courses';
import { Course } from '@/app/types/course';

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  const handleDelete = (id: string) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard 
          key={course.id} 
          course={course} 
          onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
