// app/instructor/total-courses/page.tsx
"use client";
import React from 'react';

interface Course {
  id: number;
  title: string;
  description: string;
  enrolledStudents: number;
}

const sampleCourses: Course[] = [
  {
    id: 1,
    title: 'Advanced JavaScript',
    description: 'Master advanced JavaScript concepts and techniques.',
    enrolledStudents: 150,
  },
  {
    id: 2,
    title: 'React for Beginners',
    description: 'Learn React from scratch and build your first app.',
    enrolledStudents: 220,
  },
  {
    id: 3,
    title: 'Node.js Masterclass',
    description: 'Become a Node.js expert and build scalable applications.',
    enrolledStudents: 180,
  },
  {
    id: 4,
    title: 'Python for Data Science',
    description: 'Learn Python and its libraries for data analysis.',
    enrolledStudents: 120,
  },
  {
    id: 5,
    title: 'Web Development Bootcamp',
    description: 'Intensive course to become a full-stack web developer.',
    enrolledStudents: 300,
  },
];

export default function TotalCoursesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Total Courses</h1>
      {sampleCourses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul className="space-y-4">
          {sampleCourses.map((course) => (
            <li
              key={course.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>
              </div>
              <span className="text-blue-600 font-medium">
                {course.enrolledStudents} Students
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}