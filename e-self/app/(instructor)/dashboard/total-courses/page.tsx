"use client";
import React, { useState, useMemo } from 'react';
import { FaPen, FaTrash, FaPlus } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const primaryColor = '#8E1616';
const primaryColorLight = '#B34747';
const textColorSecondary = '#555';
const borderColor = '#ddd';
const shadowColor = 'rgba(0, 0, 0, 0.1)';

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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:bg-gray-50">
        <img src={imageUrl} alt={altText} className="w-full h-32 object-cover" />
        <div className="p-4">
            <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
                    <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                    <span>{rating}</span>
                    <span className="text-gray-400">({reviewCount})</span>
                </div>
                <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-blue-500 focus:outline-none transition-colors duration-200">
                        <FaPen />
                    </button>
                    <button className="text-gray-500 hover:text-red-500 focus:outline-none transition-colors duration-200">
                        <FaTrash />
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
        <div className="bg-gray-100 min-h-screen py-6">
            <div className="w-full">
                <div className="md:flex md:items-center md:justify-between mb-6">
                    <h2 className="text-xl font-semibold" style={{ color: primaryColor }}>Your Courses</h2>
                    <button
                        onClick={() => router.push('/dashboard/create-course')}
                        className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md shadow-sm transition duration-200"
                    >
                        <FaPlus className="inline-block mr-2" />
                        Add New Course
                    </button>
                </div>

                <div className="mb-6 overflow-x-auto whitespace-nowrap flex space-x-2 -mx-4 sm:mx-0 px-4 sm:px-0 ">
                    {tabs.map((tab) => (
                      <button
                      key={tab.value}
                      onClick={() => setActiveTab(tab.value)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition duration-200 flex-shrink-0 ${
                          activeTab === tab.value
                              ? "text-white hover:opacity-90"
                              : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                      style={
                          activeTab === tab.value
                              ? { backgroundColor: primaryColor }
                              : undefined
                      }
                  >
                      {tab.label}
                  </button>
                  
                    ))}
                </div>

                <div className="flex-1">
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

                    <div className="flex justify-center mt-6">
                        <button className="bg-white text-gray-600 rounded-md shadow-sm px-4 py-2 text-sm font-medium mr-2 hover:bg-gray-100 transition-colors duration-200">
                            Previous
                        </button>
                        <button className="bg-white text-gray-600 rounded-md shadow-sm px-4 py-2 text-sm font-medium ml-2 hover:bg-gray-100 transition-colors duration-200">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCoursesPage;