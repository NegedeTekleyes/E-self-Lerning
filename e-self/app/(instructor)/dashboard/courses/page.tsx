'use client';

import React, { useEffect, useState } from 'react';
import CourseCard from '@/components/CourseCard';
import { getLocalCourses } from '@/lib/localStorageUtils';

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  price: number;
  videoUrl: string;
  isPublished: boolean;
  // Add other properties as needed
}

export default function InstructorCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const storedCourses = getLocalCourses();
    setCourses(storedCourses || []);
  }, []);

  const handleDelete = (id: number) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
    localStorage.setItem('instructor-courses', JSON.stringify(updatedCourses));
  };

  const handlePublish = (id: number) => {
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, isPublished: true } : course
    );
    setCourses(updatedCourses);
    localStorage.setItem('instructor-courses', JSON.stringify(updatedCourses));
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Your Courses</h1>
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        courses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            onDelete={() => handleDelete(course.id)}
            onPublish={() => handlePublish(course.id)}
          />
        ))
      )}
    </div>
  );
}
