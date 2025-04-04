
"use client";
import React, { useState } from 'react';
import { FaPen, FaTrash, FaPlus } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const primaryColor = '#8E1616';
const primaryColorLight = '#B34747'; // Light variation for hover
const textColor = '#333333'; // Default text color

interface Course {
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
  publishDate: Date;
  reviewCount: string;
  status: 'published' | 'planned' | 'unfinished' | 'padding-for-publish';
}

interface CardProps extends Course {}

const Card: React.FC<CardProps> = ({
  imageUrl,
  altText,
  instructorName,
  instructorRole,
  instructorCompany,
  description,
  rating,
  reviewCount,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <img src={imageUrl} alt={altText} className="w-full h-32 object-cover" />
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            {/* You might replace this with an actual profile image */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">{instructorName}</h3>
            <p className="text-xs text-gray-600">{instructorRole}</p>
          </div>
        </div>
        <h4 className="text-md font-semibold mb-2" style={{ color: primaryColor }}>{instructorCompany}</h4>
        <p className="text-sm text-gray-700 line-clamp-2 mb-3">{description}</p>
        <div className="flex items-center justify-between text-xs text-gray-700">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
            <span className="text-gray-400">({reviewCount})</span>
          </div>
          {/* Future: Edit and Delete Buttons */}
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-blue-500 focus:outline-none">
              <FaPen />
            </button>
            <button className="text-gray-500 hover:text-red-500 focus:outline-none">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InstructorCoursesPage: React.FC = () => {
  const router = useRouter(); // Initialize useRouter
  const [showMobileTabs, setShowMobileTabs] = useState(false);

  const allCourses: Course[] = [
    {
      id: 1,
      title: 'Project Management Fundamentals',
      imageUrl: '/images/project-manager.jpg',
      altText: 'Project Manager Desk',
      instructorName: 'Theresa Webb',
      instructorRole: 'UX/UI designer',
      instructorCompany: 'Google UX/UI Analytics',
      yearPublished: 2023,
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      enrolledStudents: 120,
      rating: 4.5,
      publishDate: new Date('2023-05-15'),
      reviewCount: '22k reviews',
      status: 'published',
    },
    {
      id: 1,
      title: 'Project Management Fundamentals',
      imageUrl: '/images/project-manager.jpg',
      altText: 'Project Manager Desk',
      instructorName: 'Theresa Webb',
      instructorRole: 'UX/UI designer',
      instructorCompany: 'Google UX/UI Analytics',
      yearPublished: 2023,
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      enrolledStudents: 120,
      rating: 4.5,
      publishDate: new Date('2023-05-15'),
      reviewCount: '22k reviews',
      status: 'published',
    },
    {
      id: 2,
      title: 'Web Design Principles',
      imageUrl: '/images/web-design.jpg',
      altText: 'Web Design on Laptop',
      instructorName: 'Theresa Webb',
      instructorRole: 'UX/UI designer',
      instructorCompany: 'Google UX/UI Analytics',
      yearPublished: 2024,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      enrolledStudents: 85,
      rating: 4.9,
      publishDate: new Date('2024-01-20'),
      reviewCount: '35k reviews',
      status: 'published',
    },
    {
      id: 3,
      title: 'Data Analysis with Python',
      imageUrl: '/images/data-analysis.jpg',
      altText: 'Data Analysis on Laptop',
      instructorName: 'Theresa Webb',
      instructorRole: 'UX/UI designer',
      instructorCompany: 'Google UX/UI Analytics',
      yearPublished: 2024,
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      enrolledStudents: 150,
      rating: 4.7,
      publishDate: new Date('2024-08-10'),
      reviewCount: '28k reviews',
      status: 'published',
    },
    {
      id: 4,
      title: 'Mobile UI/UX Design',
      imageUrl: '/images/mobile-ui.jpg',
      altText: 'Mobile UI Design',
      instructorName: 'Theresa Webb',
      instructorRole: 'UX/UI designer',
      instructorCompany: 'Google UX/UI Analytics',
      yearPublished: 2025,
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      enrolledStudents: 60,
      rating: 0,
      publishDate: new Date(), // Not yet published
      reviewCount: '0 reviews',
      status: 'padding-for-publish',
    },
    {
      id: 5,
      title: 'Advanced JavaScript Concepts',
      imageUrl: '/images/javascript.jpg', // Replace with your actual image path
      altText: 'JavaScript Code',
      instructorName: 'Theresa Webb',
      instructorRole: 'UX/UI designer',
      instructorCompany: 'Google UX/UI Analytics',
      yearPublished: 2025,
      description: 'Exploring advanced topics in JavaScript.',
      enrolledStudents: 30,
      rating: 0,
      publishDate: new Date(), // Not yet finished
      reviewCount: '0 reviews',
      status: 'unfinished',
    },
    {
      id: 6,
      title: 'Introduction to Cloud Computing',
      imageUrl: '/images/cloud.jpg', // Replace with your actual image path
      altText: 'Cloud Computing Diagram',
      instructorName: 'Theresa Webb',
      instructorRole: 'UX/UI designer',
      instructorCompany: 'Google UX/UI Analytics',
      yearPublished: 2026,
      description: 'Planning a course on cloud fundamentals.',
      enrolledStudents: 0,
      rating: 0,
      publishDate: new Date(), // Planned
      reviewCount: '0 reviews',
      status: 'planned',
    },
    {
      id: 7,
      title: 'React Native Development',
      imageUrl: '/images/react-native.jpg', // Replace with your actual image path
      altText: 'React Native Components',
      instructorName: 'Theresa Webb',
      instructorRole: 'UX/UI designer',
      instructorCompany: 'Google UX/UI Analytics',
      yearPublished: 2023,
      description: 'Building cross-platform mobile apps with React Native.',
      enrolledStudents: 95,
      rating: 4.6,
      publishDate: new Date('2023-11-01'),
      reviewCount: '18k reviews',
      status: 'published',
    },
    {
      id: 8,
      title: 'Cybersecurity Basics',
      imageUrl: '/images/cybersecurity.jpg', // Replace with your actual image path
      altText: 'Cybersecurity Lock',
      instructorName: 'Theresa Webb',
      instructorRole: 'UX/UI designer',
      instructorCompany: 'Google UX/UI Analytics',
      yearPublished: 2025,
      description: 'A foundational course on cybersecurity principles.',
      enrolledStudents: 45,
      rating: 0,
      publishDate: new Date(), // Finished but not yet published
      reviewCount: '0 reviews',
      status: 'padding-for-publish',
    },
  ];

  const [activeTab, setActiveTab] = useState('all');
  const currentYear = new Date().getFullYear();

  const filteredCourses = React.useMemo(() => {
    switch (activeTab) {
      case 'published':
        return allCourses.filter((course) => course.status === 'published');
      case 'top-rating':
        return allCourses
          .filter((course) => course.status === 'published' && course.rating > 4.5) // Adjust rating threshold as needed
          .sort((a, b) => b.rating - a.rating);
      case 'unfinished':
        return allCourses.filter((course) => course.status === 'unfinished');
      case 'padding-for-publish':
        return allCourses.filter((course) => course.status === 'padding-for-publish');
      case 'planned':
        return allCourses.filter((course) => course.status === 'planned');
      case 'past-year':
        return allCourses.filter((course) => course.status === 'published' && course.yearPublished < currentYear);
      default:
        return allCourses;
    }
  }, [activeTab, allCourses, currentYear]);

  const tabs = [
    { value: 'all', label: 'All Courses' },
    { value: 'published', label: 'Published' },
    { value: 'top-rating', label: 'Top Rating' },
    { value: 'unfinished', label: 'Unfinished' },
    { value: 'padding-for-publish', label: 'Padding for Publish' },
    { value: 'planned', label: 'Planned' },
    { value: 'past-year', label: 'Past Year Published' },
  ];

  const handleAddCourseClick = () => {
    router.push('/dashboard/create-course');
  };

  const toggleMobileTabs = () => {
    setShowMobileTabs(!showMobileTabs);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0" style={{ color: primaryColor }}>
            Your Courses
          </h2>
          <button
            className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-${primaryColor.replace(
              '#',
              ''
            )} focus:ring-opacity-50 transition duration-200"
            onClick={handleAddCourseClick} // Add onClick handler
          >
            <FaPlus className="inline-block mr-2" />
            Add New Course
          </button>
        </div>

        {/* Mobile Tab Toggle Button */}
        <div className="sm:hidden mb-4">
          <button
            className="bg-white text-gray-700 font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-${primaryColor.replace(
              '#',
              ''
            )} focus:ring-opacity-50 w-full"
            onClick={toggleMobileTabs}
          >
            {showMobileTabs ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Tabs */}
        <div className={`mb-6 ${showMobileTabs ? 'block' : 'hidden sm:block'}`}>
          <ul className="flex flex-row sm:flex-wrap gap-2 md:gap-4 overflow-x-auto sm:overflow-x-hidden">
            {tabs.map((tab) => (
              <li key={tab.value} className="flex-shrink-0">
                <button
                  className={`px-4 py-2 rounded-full shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-${primaryColor.replace(
                    '#',
                    ''
                  )} focus:ring-opacity-50 transition duration-200 whitespace-nowrap
                    ${
                      activeTab === tab.value
                        ? `bg-${primaryColor} text-white hover:bg-${primaryColorLight}`
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  onClick={() => setActiveTab(tab.value)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCourses.map((course) => (
            <Card key={course.id} {...course} />
          ))}
        </div>
        {filteredCourses.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            No courses found for the selected filter.
          </div>
        )}
        {/* Future: Pagination */}
        <div className="flex justify-center mt-6">
          <button className="bg-white text-gray-600 rounded-full shadow-sm px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-${primaryColor.replace(
            '#',
            ''
          )} focus:ring-opacity-50 mr-2">
            Previous
          </button>
          <button className="bg-white text-gray-600 rounded-full shadow-sm px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-${primaryColor.replace(
            '#',
            ''
          )} focus:ring-opacity-50 ml-2">
            Next
          </button>
        </div>
      </div>
      <footer className="bg-gray-200 py-4 mt-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Your Learning Platform. All rights reserved.</p>
        {/* Future: Add more footer links and information */}
      </footer>
    </div>
  );
};

export default InstructorCoursesPage;