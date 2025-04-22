'use client';

import React, { useMemo, useState, useEffect } from 'react'; // Import useEffect
import { useRouter } from 'next/navigation';
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  BookOpenIcon,
  UserCircleIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { BookOpenIcon as SolidBookOpenIcon } from '@heroicons/react/24/solid';

// --- The Course Type Definition used by this component ---
interface DisplayCourse {
  id: number;
  title: string;
  imageUrl: string;
  altText: string;
  instructorName: string;
  instructorRole: string;
  instructorCompany: string;
  yearPublished: number;
  description: string;
  enrolledStudents: number;
  rating: number;
  publishDate: Date | null; // publishDate can be null for drafts
  reviewCount: string;
  status: 'published' | 'planned' | 'unfinished' | 'padding-for-publish' | 'top-rating';
}

// Helper to get courses from local storage (same as in AddCourse)
const getLocalCourses = (): DisplayCourse[] => {
    if (typeof window === 'undefined') return [];
    const savedCourses = localStorage.getItem('instructorCourses');
    if (!savedCourses) return [];
    try {
         // Parse JSON and ensure Date objects are correctly deserialized
        return JSON.parse(savedCourses).map((course: any) => ({
             ...course,
             publishDate: course.publishDate ? new Date(course.publishDate) : null,
             // Add checks/defaults for any potentially missing fields if your saving logic
             // in AddCourse changes or is less strict.
             id: course.id || Date.now() + Math.random(), // Ensure ID exists
             imageUrl: course.imageUrl || 'https://source.unsplash.com/400x200/?education', // Default image
             altText: course.altText || 'Course Image',
             instructorName: course.instructorName || 'Instructor', // Default instructor
             instructorRole: course.instructorRole || '',
             instructorCompany: course.instructorCompany || '',
             yearPublished: course.yearPublished || new Date().getFullYear(),
             enrolledStudents: course.enrolledStudents || 0,
             rating: course.rating || 0,
             reviewCount: course.reviewCount || '0',
             status: course.status || 'unfinished', // Default status if missing
        }));
    } catch (e) {
        console.error("Failed to parse courses from localStorage", e);
        return [];
    }
};

// Helper to save courses to local storage (same as in AddCourse)
const saveLocalCourses = (courses: DisplayCourse[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('instructorCourses', JSON.stringify(courses));
};


// Course Card Component (kept the same)
const CourseCard: React.FC<DisplayCourse> = ({ // Use DisplayCourse type
  imageUrl,
  altText,
  instructorName,
  instructorRole,
  instructorCompany,
  description,
  rating,
  reviewCount,
 // Added id and status for potential use in buttons
 id, status,
}) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden transition transform duration-200 hover:scale-[1.01] hover:shadow-md hover:ring-1 hover:ring-red-100">
    <img src={imageUrl} alt={altText} className="w-full h-40 object-cover" />
    <div className="p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
          <UserCircleIcon className="h-5 w-5 text-gray-400" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-800">{instructorName}</h3>
          <p className="text-xs text-gray-500">{instructorRole}</p>
        </div>
      </div>
      <h4 className="text-sm font-medium text-red-500 mb-2">{instructorCompany}</h4>
      <p className="text-sm text-gray-700 line-clamp-2 mb-3">{description}</p>
      {/* Display Status */}
      <div className={`text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3
          ${status === 'published' ? 'bg-green-100 text-green-800' : ''}
          ${status === 'planned' ? 'bg-blue-100 text-blue-800' : ''}
          ${status === 'unfinished' ? 'bg-yellow-100 text-yellow-800' : ''}
          ${status === 'padding-for-publish' ? 'bg-purple-100 text-purple-800' : ''}
          ${status === 'top-rating' ? 'bg-yellow-400 text-yellow-900' : ''}
      `}>
          {status.replace('-', ' ').replace(/\b\w/g, char => char.toUpperCase())} {/* Format status for display */}
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-gray-600">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="font-medium">{rating.toFixed(1)}</span> {/* Format rating */}
          <span className="text-gray-500">({reviewCount})</span>
        </div>
        <div className="flex gap-2">
          <button
              onClick={() => console.log('Edit course:', id)} // Replace with actual edit logic
              className="p-2 text-gray-500 hover:text-red-600 rounded-md hover:bg-red-50"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
          <button
              onClick={() => {
                  const updatedCourses = getLocalCourses().filter(c => c.id !== id);
                  saveLocalCourses(updatedCourses);
                  // Trigger a re-render by updating state (e.g., reload courses or update local state)
                  // For simplicity, in a real app, re-fetching from backend is better.
                  // Here, we'll just refresh the page (not ideal but demonstrates change)
                  window.location.reload();
              }} // Basic delete from local storage
              className="p-2 text-gray-500 hover:text-red-600 rounded-md hover:bg-red-50"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);


const InstructorCoursesPage: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');
  const [courses, setCourses] = useState<DisplayCourse[]>([]); // State to hold courses

  const currentYear = new Date().getFullYear();

  // Load courses from localStorage when the component mounts
  useEffect(() => {
      setCourses(getLocalCourses());
  }, []); // Empty dependency array means run once on mount


  const filteredCourses = useMemo(() => {
     switch (activeTab) {
       case 'published':
         return courses.filter((c) => c.status === 'published');
       case 'top-rating':
         return courses.filter((c) => c.status === 'top-rating').sort((a, b) => b.rating - a.rating);
       case 'unfinished':
         return courses.filter((c) => c.status === 'unfinished'); // Filter by 'unfinished' status
       case 'padding-for-publish':
         return courses.filter((c) => c.status === 'padding-for-publish');
       case 'planned':
         return courses.filter((c) => c.status === 'planned'); // Filter by 'planned' status
       case 'past-year':
         return courses.filter((c) => c.status === 'published' && c.yearPublished < currentYear);
       default:
         return courses; // Show all loaded courses
     }
  }, [activeTab, courses, currentYear]); // Depend on 'courses' state


  const tabs = [
    { value: 'all', label: 'All Courses' },
    { value: 'published', label: 'Published' },
    { value: 'top-rating', label: 'Top Rating' },
    { value: 'unfinished', label: 'Unfinished' }, // Added tab for unfinished drafts
    { value: 'padding-for-publish', label: 'Padding for Publish' },
    { value: 'planned', label: 'Planned' }, // Added tab for planned courses
    { value: 'past-year', label: 'Past Year' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4 sm:mb-0">
            <SolidBookOpenIcon className="h-7 w-7 text-red-600" />
            Your Courses
          </h1>
          <button
            onClick={() => router.push('/dashboard/create-course')} // Link to your AddCourse page
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            <PlusIcon className="h-5 w-5" />
            Add New Course
          </button>
        </div>

        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 rounded-md text-sm transition font-medium ${
                  activeTab === tab.value
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          {filteredCourses.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>

              {/* Pagination buttons - functionality not implemented */}
              <div className="flex justify-center gap-2 mt-8">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                  Previous
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500 text-base mb-4">No courses found for the selected filter.</p>
              <button
                onClick={() => router.push('/dashboard/create-course')} // Link to your AddCourse page
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition"
              >
                <PlusIcon className="h-4 w-4" />
                Create Your First Course
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstructorCoursesPage;