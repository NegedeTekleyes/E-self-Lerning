'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  PlusIcon,
  UsersIcon,
  StarIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  TrashIcon,
  PencilIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

import { BookOpenIcon } from '@heroicons/react/24/solid';

import { getLocalCourses, saveLocalCourses, DisplayCourse } from '@/lib/localStorageUtils';

type CourseCardProps = DisplayCourse & {
  onDelete: (id: number) => void;
  onPublish?: (id: number) => void;
};

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  imageUrl,
  altText,
  instructorName,
  description,
  enrolledStudents,
  rating,
  reviewCount,
  status,
  publishDate,
  onDelete,
  onPublish,
}) => {
  const readableStatus = status.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-40">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="rounded-t-xl"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>

        <div className="text-sm text-gray-600 flex items-center gap-1 mb-2">
          <UserCircleIcon className="h-4 w-4 text-red-500" />
          {instructorName}
        </div>

        <p className="text-sm text-gray-700 mb-3 line-clamp-3">
          {description || 'No description available.'}
        </p>

        {(status === 'published' || status === 'top-rating') && (
          <div className="text-sm text-gray-700 mb-3 flex items-center gap-2">
            <UsersIcon className="h-4 w-4 text-red-500" />
            {enrolledStudents} students
            <span>|</span>
            <StarIcon className="h-4 w-4 text-yellow-400" />
            {rating.toFixed(1)} ({reviewCount} reviews)
          </div>
        )}

        <div className="text-xs font-medium mb-4">
          Status:
          <span className={`ml-2 px-2 py-1 rounded-full ${
            status === 'published'
              ? 'bg-green-100 text-green-800'
              : status === 'planned'
              ? 'bg-blue-100 text-blue-800'
              : status === 'unfinished'
              ? 'bg-yellow-100 text-yellow-800'
              : status === 'padding-for-publish'
              ? 'bg-purple-100 text-purple-800'
              : status === 'top-rating'
              ? 'bg-pink-100 text-pink-800'
              : 'bg-gray-100 text-gray-800'
          }`}>
            {readableStatus}
          </span>
        </div>

        {publishDate && (status === 'published' || status === 'top-rating') && (
          <div className="text-xs text-gray-500 flex items-center gap-1 mb-3">
            <CalendarDaysIcon className="h-4 w-4 text-red-400" />
            Published: {new Date(publishDate).toLocaleDateString()}
          </div>
        )}

        <div className="flex justify-end gap-3 mt-auto pt-3 border-t">
          {(status === 'unfinished' || status === 'padding-for-publish') && (
            <button
              onClick={() => alert(`Editing course: ${title}`)}
              title="Edit"
              className="text-gray-500 hover:text-blue-600"
            >
              <PencilIcon className="h-5 w-5" />
            </button>
          )}

          {(status === 'padding-for-publish' || status === 'planned') && onPublish && (
            <button
              onClick={() => onPublish(id)}
              className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded flex items-center gap-1"
            >
              <CheckCircleIcon className="h-4 w-4" /> Publish
            </button>
          )}

          <button
            onClick={() => onDelete(id)}
            title="Delete"
            className="text-gray-500 hover:text-red-600"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const InstructorCourses: React.FC = () => {
  const [courses, setCourses] = useState<DisplayCourse[]>([]);
  const [activeTab, setActiveTab] = useState<'unfinished' | 'ready' | 'published'>('unfinished');

  useEffect(() => {
    setCourses(getLocalCourses());
  }, []);

  const handleDeleteCourse = (id: number) => {
    if (confirm('Are you sure you want to delete this course?')) {
      const updated = courses.filter(course => course.id !== id);
      setCourses(updated);
      saveLocalCourses(updated);
    }
  };

  const handlePublishCourse = (id: number) => {
    const updated = courses.map(course =>
      course.id === id && ['planned', 'padding-for-publish'].includes(course.status)
        ? { ...course, status: 'published', publishDate: new Date() }
        : course
    );
    setCourses(updated);
    saveLocalCourses(updated);
  };

  const filteredCourses = courses.filter(course => {
    if (activeTab === 'unfinished') return course.status === 'unfinished';
    if (activeTab === 'ready') return ['planned', 'padding-for-publish'].includes(course.status);
    return ['published', 'top-rating'].includes(course.status);
  });

  return (
    <div className="w-full min-h-screen p-6 bg-gray-50 rounded-lg space-y-8">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <BookOpenIcon className="h-7 w-7 text-red-600" />
          My Courses
        </h1>

        <Link href="/dashboard/add-course">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
            <PlusIcon className="h-4 w-4" />
            Create New Course
          </button>
        </Link>
      </div>

      <div className="flex space-x-4 border-b pb-3">
        {(['unfinished', 'ready', 'published'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm ${
              activeTab === tab ? 'font-bold text-red-600' : 'text-gray-500'
            }`}
          >
            {tab === 'unfinished'
              ? 'Unfinished Drafts'
              : tab === 'ready'
              ? 'Ready for Publish'
              : 'Published Courses'}
          </button>
        ))}
      </div>

      <div>
        {filteredCourses.length === 0 ? (
          <p className="text-gray-600 italic">No courses in this section.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                {...course}
                onDelete={handleDeleteCourse}
                onPublish={handlePublishCourse}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorCourses;
