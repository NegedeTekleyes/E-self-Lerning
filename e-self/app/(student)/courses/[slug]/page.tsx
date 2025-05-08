// app/courses/[slug]/page.tsx
'use client';

import { useCart } from '../../../context/CartContext';
import { courses, Course } from '@/app/data/courses'; // Import Course type
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react'; // Import useState and useEffect

// Directly type the params prop in the function signature
export default function CoursePage({ params }: { params: { slug: string } }) {
  const { addToCart } = useCart();
  const course = courses.find((c) => c.slug === params.slug);

  // State to track if the course is acquired
  const [isAcquired, setIsAcquired] = useState(false);
  // State to handle potential localStorage issues (optional)
  const [localStorageReady, setLocalStorageReady] = useState(false);


  useEffect(() => {
    // Check if window (and localStorage) is available
    if (typeof window !== 'undefined') {
      setLocalStorageReady(true);
      const acquiredCourses = JSON.parse(localStorage.getItem('acquiredCourses') || '[]');
      setIsAcquired(acquiredCourses.includes(params.slug));
    }
  }, [params.slug]); // Re-run if the slug changes

  // Check if course exists, otherwise show "not found" page
  if (!course) {
    notFound(); // Trigger "not found" page if the course doesn't exist
  }

  const handleAcquireCourse = () => {
    if (!localStorageReady) return; // Don't proceed if localStorage isn't ready

    try {
      const acquiredCourses = JSON.parse(localStorage.getItem('acquiredCourses') || '[]');
      if (!acquiredCourses.includes(course.slug)) {
        const updatedAcquiredCourses = [...acquiredCourses, course.slug];
        localStorage.setItem('acquiredCourses', JSON.stringify(updatedAcquiredCourses));
        setIsAcquired(true); // Update state to reflect acquisition
        console.log(`Course "${course.title}" acquired!`); // Optional: log success
        // You could add a toast notification here
      } else {
        console.log(`Course "${course.title}" is already acquired.`);
      }
    } catch (error) {
      console.error("Failed to acquire course:", error);
      // Handle potential localStorage errors (e.g., storage full)
      alert("Could not save course. Your browser storage might be full.");
    }
  };

  // Note: The "Add to Cart" button is still present.
  // You might want to decide if a user can "acquire" without adding to cart,
  // or if "acquiring" *is* the action of adding to a personal list (separate from cart).
  // For this example, we'll keep both for now.

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
            {course.prerequisites && course.prerequisites.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mb-2">Prerequisites</h2>
                <ul>
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="list-disc list-inside">
                      {prerequisite}
                    </li>
                  ))}
                </ul>
              </>
            )}


            {/* Requirements */}
            {course.requirements && course.requirements.length > 0 && (
               <>
                <h2 className="text-xl font-semibold mb-2 mt-4">Requirements</h2>
                <ul>
                  {course.requirements.map((requirement, index) => (
                    <li key={index} className="list-disc list-inside">
                      {requirement}
                    </li>
                  ))}
                </ul>
               </>
            )}


            {/* Learning Outcomes */}
            {course.learningOutcomes && course.learningOutcomes.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mb-2 mt-4">Learning Outcomes</h2>
                <ul>
                  {course.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="list-disc list-inside">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </>
            )}


            {/* Benefits */}
             {course.benefits && course.benefits.length > 0 && (
               <>
                <h2 className="text-xl font-semibold mb-2 mt-4">Benefits</h2>
                <ul>
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="list-disc list-inside">
                      {benefit}
                    </li>
                  ))}
                </ul>
               </>
            )}

            {/* Includes */}
             {course.includes && course.includes.length > 0 && (
               <>
                <h2 className="text-xl font-semibold mb-2 mt-4">Includes</h2>
                <ul>
                  {course.includes.map((include, index) => (
                    <li key={index} className="list-disc list-inside">
                      {include}
                    </li>
                  ))}
                </ul>
               </>
            )}

            {/* Expectations */}
            {course.expectations && (
               <p className="text-gray-700 mb-6 mt-4">
                 <strong>Expectations:</strong> {course.expectations}
               </p>
            )}


            {/* Instructor Info */}
            {course.instructor && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Instructor:</h3>
                <p>
                  <strong>Name:</strong> {course.instructor.name}
                </p>
                {course.instructor.rating && (
                   <p>
                     <strong>Rating:</strong> {course.instructor.rating}
                   </p>
                )}
              </div>
            )}


            {/* Price and Buttons */}
            <div className="flex items-center justify-between mt-6"> {/* Added margin-top */}
              <span className="text-2xl font-bold text-[#8E1616]">
                ${course.price}
              </span>
              <div className="flex gap-4"> {/* Container for multiple buttons */}
                 {localStorageReady && ( // Only show button when localStorage is ready
                    <button
                      onClick={handleAcquireCourse}
                      disabled={isAcquired} // Disable if already acquired
                      className={`px-6 py-2 rounded-lg transition-colors ${
                        isAcquired
                          ? 'bg-gray-400 cursor-not-allowed' // Style when acquired
                          : 'bg-green-600 text-white hover:bg-green-700' // Style when not acquired
                      }`}
                    >
                      {isAcquired ? 'Acquired' : 'Acquire Course'}
                    </button>
                 )}


                {/* Optional: Keep Add to Cart button or remove/modify */}
                {/* <button
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
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}