import Link from 'next/link';
import { Course } from '../../data/courses';
import Image from 'next/image';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const {
    image = '/',
    title = 'Untitled Course',
    category = 'General',
    rating = 0,
    description = 'No description available.',
    duration = 0,
    price = 0,
    slug = '#',
  } = course || {};

  return (
    <div className="w-72 h-[400px] rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col"> 
      <Image
        src={image}
        alt={title}
        width={288}
        height={192}
        className="w-full h-48 object-cover"
        priority={true}
      />

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs bg-[#8E1616] text-white px-2 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center gap-1 text-sm">
            ⭐ {rating}
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-3 text-sm line-clamp-2 flex-grow">
          {description.substring(0, 100)}...
        </p>

        <div className="flex justify-between items-center mt-auto">
          <div className="text-sm">
            <span className="mr-2">🕒 {duration}h</span>
            <span className="font-semibold">${price}</span>
          </div>
          <Link href={`/courses/${slug}`}>
            <button className="bg-[#8E1616] text-white px-3 py-1 rounded-full text-xs hover:bg-[#D84040] transition-colors">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
