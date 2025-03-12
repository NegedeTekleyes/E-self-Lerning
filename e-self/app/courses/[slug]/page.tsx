import { notFound } from 'next/navigation';
import courses from "../../api/data/courses";

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <img src={course.image} alt={course.title} className="w-full h-96 object-cover mb-4" />
      <p className="mb-2">{course.description}</p>
      <p className="mb-2">Duration: {course.duration} hours</p>
      <p className="mb-2">Price: ${course.price}</p>
      <button className="bg-green-500 text-white py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
}