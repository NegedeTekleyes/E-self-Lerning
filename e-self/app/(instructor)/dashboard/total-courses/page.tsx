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

const Card = ({
  title,
  enrolled,
  accuracy,
  completionRate,
  category,
  urgency,
  editedAgo,
  questionCount,
}: {
  title: string;
  enrolled: number;
  accuracy: number;
  completionRate: number;
  category: string;
  urgency: string;
  editedAgo: string;
  questionCount: number;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
      <div className="flex justify-end">
        <span className="bg-purple-200 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
          {enrolled} Enrolled
        </span>
      </div>
      <div className="flex justify-center my-4">
        <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center">
          <span className="text-4xl text-purple-800">Aa</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <div className="flex justify-between mb-2">
        <div>
          <span className="text-sm font-medium">Accuracy</span>
          <p className="text-base font-bold">{accuracy}%</p>
        </div>
        <div>
          <span className="text-sm font-medium">Completion Rate</span>
          <p className="text-base font-bold">{completionRate}%</p>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          {category}
        </span>
        <span className="bg-red-200 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
          {urgency}
        </span>
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>Edited {editedAgo} ago</span>
        <span>{questionCount} Question</span>
      </div>
    </div>
  );
};

const QuizDashboard = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4">Fikri Studio</h1>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full mr-1"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full mr-1"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
          <button className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">+</button>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Upload</button>
      </div>
      <div className="flex items-center mb-4">
        <button className="text-purple-600 font-semibold mr-2">all course</button>
        <button className="text-purple-600 font-semibold mr-2">new course</button>
        <button className="text-purple-600 font-semibold mr-2">finish course</button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2">create course</button>
        <button className="text-purple-600 font-semibold mr-2">padding to publish</button>
        <button className="text-purple-600 font-semibold mr-2">popular course</button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-sm font-semibold mr-2">Total Question: 5 or more</span>
          <button className="text-purple-600 font-semibold mr-2">Reset</button>
          <button className="text-purple-600 font-semibold">Add Filter</button>
        </div>
        <button className="text-purple-600 font-semibold">Date Create</button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold">100 content</span>
        <input type="text" placeholder="Search..." className="border border-gray-300 rounded-md px-4 py-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          title="Mastering UI Design for Impactful Solutions"
          enrolled={10}
          accuracy={40}
          completionRate={60}
          category="UI/UX"
          urgency="Not Urgent"
          editedAgo="2h"
          questionCount={10}
        />
        <Card
          title="A Symphony of Colors in UI Design"
          enrolled={21}
          accuracy={20}
          completionRate={80}
          category="Instructional Design"
          urgency="Not Urgent"
          editedAgo="#h"
          questionCount={15}
        />
        <Card
          title="Bridging Users and UI in Harmony"
          enrolled={18}
          accuracy={100}
          completionRate={100}
          category="Experience Design"
          urgency="Urgent"
          editedAgo="23h"
          questionCount={25}
        />
        <Card
          title="Creating Engaging Learning Journeys: UI/UX Best Practices"
          enrolled={9}
          accuracy={20}
          completionRate={100}
          category="UI/UX"
          urgency="Urgent"
          editedAgo="5d"
          questionCount={30}
        />
        <Card
          title="Designing Intuitive User Interfaces"
          enrolled={12}
          accuracy={80}
          completionRate={80}
          category="User Interface (UI)"
          urgency="Not Urgent"
          editedAgo="2d"
          questionCount={15}
        />
        <Card
          title="Optimizing User Experience Educational Platforms"
          enrolled={7}
          accuracy={0}
          completionRate={0}
          category="User Experience"
          urgency="Urgent"
          editedAgo="4d"
          questionCount={25}
        />
      </div>
    </div>
  );
};

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
      <QuizDashboard />
    </div>
  );
}

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