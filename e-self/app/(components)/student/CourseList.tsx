import CourseCard from './CourseCard'; // Import CourseCard component
import { Course } from '../../data/courses';

interface CourseListProps {
  courses: Course[]; // Accepts an array of courses
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} /> 
      ))}
    </div>
  );
}
