import Link from 'next/link';

interface CourseCardProps {
  course: {
    slug: string;
    title: string;
    description: string;
    duration: number;
    price: number;
    image: string;
    rating: number;
  };
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-2">{course.description.substring(0, 100)}...</p>
      <p>Duration: {course.duration} hours</p>
      <p>Price: ${course.price}</p>
      <Link href={`/courses/${course.slug}`}>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">View Details</button>
      </Link>
    </div>
  );
}