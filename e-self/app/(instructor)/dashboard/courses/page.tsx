'use client';

import Image from 'next/image';
import { UsersIcon, StarIcon, CalendarDaysIcon, UserCircleIcon, TrashIcon, PencilIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { DisplayCourse } from '@/lib/localStorageUtils';

type CourseCardProps = DisplayCourse & {
  onDelete: (id: number) => void;
  onPublish?: (id: number) => void;
};

const getStatusStyle = (status: string) => {
  const styles: Record<string, string> = {
    published: 'bg-green-100 text-green-800',
    planned: 'bg-blue-100 text-blue-800',
    unfinished: 'bg-yellow-100 text-yellow-800',
    'padding-for-publish': 'bg-purple-100 text-purple-800',
    'top-rating': 'bg-pink-100 text-pink-800',
  };
  return styles[status] || 'bg-gray-100 text-gray-800';
};

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  imageUrl,
  altText = 'Course Image',
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
          src={imageUrl || '/default-course-image.jpg'}
          alt={altText}
          fill
          className="rounded-t-xl object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
          <span className={`ml-2 px-2 py-1 rounded-full ${getStatusStyle(status)}`}>
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
              aria-label={`Edit ${title}`}
              onClick={() => alert(`Editing course: ${title}`)}
              title="Edit"
              className="text-gray-500 hover:text-blue-600"
            >
              <PencilIcon className="h-5 w-5" />
            </button>
          )}

          {(status === 'padding-for-publish' || status === 'planned') && onPublish && (
            <button
              aria-label={`Publish ${title}`}
              onClick={() => onPublish(id)}
              className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded flex items-center gap-1"
            >
              <CheckCircleIcon className="h-4 w-4" /> Publish
            </button>
          )}

          <button
            aria-label={`Delete ${title}`}
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

export default CourseCard;
