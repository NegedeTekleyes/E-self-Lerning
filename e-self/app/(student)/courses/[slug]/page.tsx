'use client';
import { useCart } from '../../../context/CartContext';
import { courses } from '@/app/data/courses';
import { notFound } from 'next/navigation';
import Image from 'next/image';
// No longer need to import PageProps or NextPage for this
// import { PageProps } from 'next';
// import { NextPage } from 'next';


// Directly type the params prop in the function signature
export default function CoursePage({ params }: { params: { slug: string } }) {
  const { addToCart } = useCart();
  // Ensure `slug` is being correctly matched
  const course = courses.find((c) => c.slug === params.slug);

  // Check if course exists, otherwise show "not found" page
  if (!course) {
    notFound(); // Trigger "not found" page if the course doesn't exist
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Container */}
          <div className="md:order-2 relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              style={{ objectFit: 'cover' }} // Ensure the image fits the container
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Course Details */}
          <div className="md:order-1">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#8E1616] text-white px-3 py-1 rounded-full text-sm">
                ⭐ {course.rating}
              </span>
              <span className="text-gray-600">🕒 {course.duration} hours</span>
            </div>
            <p className="text-gray-700 mb-6">{course.detailedDescription}</p>

            {/* Prerequisites */}
            <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
            <ul>
              {course.prerequisites.map((prerequisite, index) => (
                <li key={index} className="list-disc list-inside">
                  {prerequisite}
                </li>
              ))}
            </ul>

            {/* Requirements */}
            <h2 className="text-xl font-semibold mb-2 mt-4">Requirements</h2>
            <ul>
              {course.requirements.map((requirement, index) => (
                <li key={index} className="list-disc list-inside">
                  {requirement}
                </li>
              ))}
            </ul>

            {/* Learning Outcomes */}
            <h2 className="text-xl font-semibold mb-2 mt-4">Learning Outcomes</h2>
            <ul>
              {course.learningOutcomes.map((outcome, index) => (
                <li key={index} className="list-disc list-inside">
                  {outcome}
                </li>
              ))}
            </ul>

            {/* Benefits */}
            <h2 className="text-xl font-semibold mb-2 mt-4">Benefits</h2>
            <ul>
              {course.benefits.map((benefit, index) => (
                <li key={index} className="list-disc list-inside">
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Includes */}
            <h2 className="text-xl font-semibold mb-2 mt-4">Includes</h2>
            <ul>
              {course.includes.map((include, index) => (
                <li key={index} className="list-disc list-inside">
                  {include}
                </li>
              ))}
            </ul>

            {/* Expectations */}
            <p className="text-gray-700 mb-6 mt-4">
              <strong>Expectations:</strong> {course.expectations}
            </p>

            {/* Instructor Info */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Instructor:</h3>
              <p>
                <strong>Name:</strong> {course.instructor.name}
              </p>
              <p>
                <strong>Rating:</strong> {course.instructor.rating}
              </p>
            </div>

            {/* Price and Add to Cart Button */}
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