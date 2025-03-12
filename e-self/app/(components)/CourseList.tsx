import CourseCard from './CourseCard';

interface CourseListProps {
  courses: {
    slug: string;
    title: string;
    description: string;
    duration: number;
    price: number;
    image: string;
    rating: number;
  }[];
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
    </div>
  );
}