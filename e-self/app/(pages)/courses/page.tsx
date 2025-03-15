// app/courses/page.tsx
import CourseList from '@/app/(components)/CourseList';
import { courses } from '@/app/data/courses';

interface CoursesPageProps {
  searchParams?: {
    search?: string;
    category?: string;
  };
}

export default function CoursesPage({ searchParams }: CoursesPageProps) {
  const searchQuery = searchParams?.search?.toLowerCase() || '';
  const categoryFilter = searchParams?.category?.toLowerCase() || '';

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery) ||
                         course.description.toLowerCase().includes(searchQuery);
    const matchesCategory = categoryFilter ? 
                          course.category.toLowerCase() === categoryFilter : 
                          true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <CourseList courses={filteredCourses} />
    </div>
  );
}