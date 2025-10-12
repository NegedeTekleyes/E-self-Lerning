'use client';

import { useParams } from 'next/navigation';
import { courses } from '../../../data/courses';
import Image from 'next/image';
import CourseModuleSection from '@/components/CourseModuleSection';

export default function CoursePage() {
  const { slug } = useParams() as { slug: string };
  const course = courses.find((course) => course.id === slug);

  if (!course) return <div className="text-center py-20 text-gray-600">Course not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Course Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="w-full h-72 relative">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-muted-foreground mb-4">{course.description}</p>
          <p className="text-sm text-gray-700">{course.detailedDescription}</p>

          <div className="mt-6 space-y-2">
            <div><strong>Duration:</strong> {course.duration ?? 'N/A'} hours</div>
            <div><strong>Price:</strong> ${course.price ?? '0.00'}</div>
            <div><strong>Rating:</strong> ⭐ {course.rating ?? 'N/A'}</div>
            <div><strong>Category:</strong> {course.category ?? 'Uncategorized'}</div>
            <div>
              <strong>Instructor:</strong>{' '}
              {course.instructor
                ? `${course.instructor.name} (${course.instructor.rating}⭐)`
                : 'No instructor info'}
            </div>
          </div>
        </div>
      </div>

      {/* Course Modules Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
        {Array.isArray(course.modules) && course.modules.length > 0 ? (
          course.modules.map((module, index) => (
            <CourseModuleSection key={index} module={module} />
          ))
        ) : (
          <p className="text-gray-500">No modules available.</p>
        )}
      </div>
    </div>
  );
}
