'use client';
import { useCart } from '../../../context/CartContext';
import { courses } from '@/app/data/courses';
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const { addToCart } = useCart();
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:order-2">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <div className="md:order-1">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#8E1616] text-white px-3 py-1 rounded-full text-sm">
                ⭐ {course.rating}
              </span>
              <span className="text-gray-600">🕒 {course.duration} hours</span>
            </div>
            <p className="text-gray-700 mb-6">{course.detailedDescription}</p>

            <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
            <ul>
              {course.prerequisites.map((prerequisite, index) => (
                <li key={index} className="list-disc list-inside">
                  {prerequisite}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-2 mt-4">Requirements</h2>
            <ul>
              {course.requirements.map((requirement, index) => (
                <li key={index} className="list-disc list-inside">
                  {requirement}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-2 mt-4">Learning Outcomes</h2>
            <ul>
              {course.learningOutcomes.map((outcome, index) => (
                <li key={index} className="list-disc list-inside">
                  {outcome}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-2 mt-4">Benefits</h2>
            <ul>
              {course.benefits.map((benefit, index) => (
                <li key={index} className="list-disc list-inside">
                  {benefit}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-2 mt-4">Includes</h2>
            <ul>
              {course.includes.map((include, index) => (
                <li key={index} className="list-disc list-inside">
                  {include}
                </li>
              ))}
            </ul>

            <p className="text-gray-700 mb-6 mt-4">
              <strong>Expectations:</strong> {course.expectations}
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Instructor:</h3>
              <p>
                <strong>Name:</strong> {course.instructor.name}
              </p>
              <p>
                <strong>Rating:</strong> {course.instructor.rating}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#8E1616]">
                ${course.price}
              </span>
              <button
                onClick={() =>
                  addToCart({
                    slug: course.slug,
                    title: course.title,
                    price: course.price,
                  })
                }
                className="bg-[#8E1616] text-white px-6 py-2 rounded-lg hover:bg-[#D84040] transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}