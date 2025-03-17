'use client';
import { useCart } from '../../../context/CartContext';
import { useAuth } from '../../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { courses, Course } from '@/app/data/courses'; // Import Course type
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) notFound();

  const handleAddToCart = () => {
    if (!user) {
      router.push('/signup'); // Redirect to signup instead of signin
      return;
    }

    addToCart({
      slug: course.slug,
      title: course.title,
      price: course.price,
    });
  };

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
                ⭐ {course.rating} ({course.overallRating})
              </span>
              <span className="text-gray-600">🕒 {course.duration} hours</span>
            </div>
            <p className="text-gray-700 mb-6">{course.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#8E1616]">
                ${course.price}
              </span>
              <button
                onClick={handleAddToCart}
                className="bg-[#8E1616] text-white px-6 py-2 rounded-lg hover:bg-[#D84040] transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Course Information */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Course Details</h2>
          <p className="text-gray-700 mb-4">{course.detailedDescription}</p>

          <h3 className="text-xl font-semibold mb-2">What You’ll Learn</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {course.learningOutcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Prerequisites</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {course.prerequisites.length
              ? course.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))
              : <li>None</li>}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {course.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Course Benefits</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {course.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">This Course Includes</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {course.includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">What to Expect</h3>
          <p className="text-gray-700 mb-4">{course.expectations}</p>

          <h3 className="text-xl font-semibold mb-2">Instructor</h3>
          <p className="text-gray-700">{course.instructor.name}</p>
          <span className="text-gray-600">⭐ {course.instructor.rating}</span>
        </div>
      </div>
    </div>
  );
}