import Link from 'next/link';
import { Course } from '../data/courses';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="border p-4 rounded shadow bg-white hover:shadow-lg transition-shadow">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm bg-[#8E1616] text-white px-2 py-1 rounded">
          {course.category}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-sm">⭐ {course.rating}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description.substring(0, 100)}...</p>
      <div className="flex justify-between items-center">
        <div className="text-sm">
          <span className="mr-2">🕒 {course.duration}h</span>
          <span>${course.price}</span>
        </div>
        <Link href={`/courses/${course.slug}`}>
          <button className="bg-[#8E1616] text-white px-4 py-2 rounded hover:bg-[#D84040] transition-colors">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}