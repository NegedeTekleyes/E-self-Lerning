'use client';
import CourseList from '../../(components)/student/CourseList'; // Correct import path
import { courses } from '../../data/courses';
import { NextPage } from 'next';

interface CoursesPageProps {
  searchParams: {
    search?: string;
    category?: string;
  };
}

// No need for a custom CoursesPageProps interface. NextPage with searchParams works fine.
const CoursesPage: NextPage<CoursesPageProps> = ({ searchParams }) => {
  const searchQuery = searchParams?.search?.toLowerCase() || '';
  const categoryFilter = searchParams?.category?.toLowerCase() || '';

  const filteredCourses = courses.filter(course => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery) ||
      course.description.toLowerCase().includes(searchQuery);
    const matchesCategory = categoryFilter
      ? course.category.toLowerCase() === categoryFilter
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <CourseList courses={filteredCourses} /> {/* Pass the filtered courses to CourseList */}
    </div>
  );
};

export default CoursesPage;
