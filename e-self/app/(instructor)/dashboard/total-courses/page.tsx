// app/instructor/total-courses/page.tsx
"use client";
import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa'; // Import icons
interface Course {
  id: number;
  title: string;
  description: string;
  enrolledStudents: number;
  publishDate: Date;
  status: 'published' | 'planned' | 'unfinished' | 'finished';
}

const sampleCourses: Course[] = [
  {
    id: 1,
    title: 'Advanced JavaScript',
    description: 'Master advanced JavaScript concepts and techniques.',
    enrolledStudents: 150,
    publishDate: new Date(2023, 10, 20),
    status: 'published',
  },
  {
    id: 2,
    title: 'React for Beginners',
    description: 'Learn React from scratch and build your first app.',
    enrolledStudents: 220,
    publishDate: new Date(2023, 11, 15),
    status: 'published',
  },
  {
    id: 3,
    title: 'Node.js Masterclass',
    description: 'Become a Node.js expert and build scalable applications.',
    enrolledStudents: 180,
    publishDate: new Date(2024, 0, 5),
    status: 'published',
  },
  {
    id: 4,
    title: 'Python for Data Science',
    description: 'Learn Python and its libraries for data analysis.',
    enrolledStudents: 120,
    publishDate: new Date(2024, 0, 20),
    status: 'planned',
  },
  {
    id: 5,
    title: 'Web Development Bootcamp',
    description: 'Intensive course to become a full-stack web developer.',
    enrolledStudents: 300,
    publishDate: new Date(2024, 1, 10),
    status: 'unfinished',
  },
  {
    id: 6,
    title: 'Graphic Design Basics',
    description: 'Learn the fundamentals of graphic design.',
    enrolledStudents: 80,
    publishDate: new Date(2023, 9, 1),
    status: 'finished',
  },
  {
    id: 7,
    title: 'Mobile App Development',
    description: 'Build native mobile apps for iOS and Android.',
    enrolledStudents: 250,
    publishDate: new Date(2024, 1, 28),
    status: 'published'
  }
];

function CourseList({ courses, title, color, isUnfinished, isPublished }: { courses: Course[], title: string, color: string, isUnfinished?: boolean, isPublished?: boolean }) {
  return (
    <div className="mb-8">
      <h2 className={`text-xl font-semibold mb-4 ${color}`}>{title}</h2>
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul className="space-y-4">
          {courses.map((course) => (
            <li
              key={course.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-600 font-medium">
                  {course.enrolledStudents} Students
                </span>
                {isUnfinished && (
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaPen />
                  </button>
                )}
                {isPublished && (
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function TotalCoursesPage() {
  const now = new Date();
  const oneWeekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
  const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

  const thisWeek = sampleCourses.filter(course => course.publishDate >= oneWeekAgo && course.status === 'published');
  const lastMonth = sampleCourses.filter(course => course.publishDate >= oneMonthAgo && course.publishDate < oneWeekAgo && course.status === 'published');
  const longTime = sampleCourses.filter(course => course.publishDate < oneMonthAgo && course.status === 'published');
  const planned = sampleCourses.filter(course => course.status === 'planned');
  const unfinished = sampleCourses.filter(course => course.status === 'unfinished');
  const finished = sampleCourses.filter(course => course.status === 'finished');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Total Courses</h1>
      <CourseList courses={thisWeek} title="Published This Week" color="text-green-600" isPublished />
      <CourseList courses={lastMonth} title="Published Last Month" color="text-yellow-600" isPublished />
      <CourseList courses={longTime} title="Published Long Time Ago" color="text-gray-600" isPublished />
      <CourseList courses={planned} title="Planned to Publish" color="text-blue-600" />
      <CourseList courses={unfinished} title="Unfinished Courses" color="text-red-600" isUnfinished />
      <CourseList courses={finished} title="Finished Courses" color="text-purple-600" />
    </div>
  );
}