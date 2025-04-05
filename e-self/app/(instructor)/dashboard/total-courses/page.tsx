"use client";
import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { 
  PencilIcon,
  TrashIcon,
  PlusIcon,
  BookOpenIcon,
  UserCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { BookOpenIcon as SolidBookOpenIcon } from '@heroicons/react/24/solid';



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
    status: 'published' | 'planned' | 'unfinished' | 'padding-for-publish' | 'top-rating';
}

const Card: React.FC<Course> = ({
    imageUrl,
    altText,
    instructorName,
    instructorRole,
    instructorCompany,
    description,
    rating,
    reviewCount,
}) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:ring-1 hover:ring-red-100">
    <img src={imageUrl} alt={altText} className="w-full h-40 object-cover" />
    <div className="p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <UserCircleIcon className="h-6 w-6 text-gray-500" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{instructorName}</h3>
          <p className="text-xs text-gray-500">{instructorRole}</p>
        </div>
      </div>
      <h4 className="text-md font-bold mb-2 text-red-600">{instructorCompany}</h4>
      <p className="text-sm text-gray-700 line-clamp-2 mb-3">{description}</p>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="font-medium">{rating}</span>
          <span className="text-gray-500">({reviewCount})</span>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-gray-500 hover:text-red-600 rounded-md hover:bg-red-50">
            <PencilIcon className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-red-600 rounded-md hover:bg-red-50">
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
    const currentYear = new Date().getFullYear();

    const allCourses: Course[] = [
        {
            id: 1,
            title: "Intro to Web Development",
            imageUrl: "https://source.unsplash.com/400x200/?coding",
            altText: "Web Development",
            instructorName: "Jane Doe",
            instructorRole: "Senior Web Developer",
            instructorCompany: "TechLabs",
            yearPublished: 2024,
            description: "Learn the fundamentals of HTML, CSS, and JavaScript in this beginner-friendly course.",
            enrolledStudents: 320,
            rating: 4.8,
            publishDate: new Date("2024-01-15"),
            reviewCount: "120",
            status: "published",
        },
        {
            id: 2,
            title: "Data Science with Python",
            imageUrl: "https://source.unsplash.com/400x200/?data,python",
            altText: "Data Science",
            instructorName: "John Smith",
            instructorRole: "Data Analyst",
            instructorCompany: "DataPro",
            yearPublished: 2025,
            description: "Explore data analysis, visualization, and machine learning using Python and Pandas.",
            enrolledStudents: 540,
            rating: 4.6,
            publishDate: new Date("2025-03-10"),
            reviewCount: "89",
            status: "top-rating",
        },
        {
            id: 3,
            title: "Advanced React",
            imageUrl: "https://source.unsplash.com/400x200/?reactjs",
            altText: "Advanced React",
            instructorName: "Sara Lee",
            instructorRole: "Frontend Engineer",
            instructorCompany: "Reactify",
            yearPublished: 2023,
            description: "Master React patterns, hooks, and performance optimization in this advanced course.",
            enrolledStudents: 210,
            rating: 4.3,
            publishDate: new Date("2023-08-05"),
            reviewCount: "54",
            status: "unfinished",
        },
        {
            id: 4,
            title: "UI/UX Design Basics",
            imageUrl: "https://source.unsplash.com/400x200/?design,ux",
            altText: "UI/UX",
            instructorName: "Michael Roe",
            instructorRole: "UI Designer",
            instructorCompany: "DesignCo",
            yearPublished: 2022,
            description: "Understand user-centered design principles and tools like Figma for effective UI/UX.",
            enrolledStudents: 150,
            rating: 4.0,
            publishDate: new Date("2022-11-20"),
            reviewCount: "35",
            status: "planned",
        },
    ];


    const filteredCourses = useMemo(() => {
        switch (activeTab) {
            case 'published': return allCourses.filter(c => c.status === 'published');
            case 'top-rating': return allCourses.filter(c => c.status === 'top-rating').sort((a, b) => b.rating - a.rating);
            case 'unfinished': return allCourses.filter(c => c.status === 'unfinished');
            case 'padding-for-publish': return allCourses.filter(c => c.status === 'padding-for-publish');
            case 'planned': return allCourses.filter(c => c.status === 'planned');
            case 'past-year': return allCourses.filter(c => c.status === 'published' && c.yearPublished < currentYear);
            default: return allCourses;
        }
    }, [activeTab, allCourses, currentYear]);

    const tabs = [
        { value: 'all', label: 'All Courses' },
        { value: 'published', label: 'Published' },
        { value: 'top-rating', label: 'Top Rating' },
        { value: 'unfinished', label: 'Unfinished' },
        { value: 'padding-for-publish', label: 'Padding for Publish' },
        { value: 'planned', label: 'Planned' },
        { value: 'past-year', label: 'Past Year' },
    ];
    return (
      <div className="bg-gray-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2 mb-4 sm:mb-0">
              <SolidBookOpenIcon className="h-8 w-8 text-red-600" />
              Your Courses
            </h1>
            <button
              onClick={() => router.push('/dashboard/create-course')}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
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
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
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
                    <Card key={course.id} {...course} />
                  ))}
                </div>
                
                <div className="flex justify-center gap-2 mt-8">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
                    Next
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-500 text-lg">No courses found for the selected filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default InstructorCoursesPage;