// components/CourseCard.tsx

import React from 'react';

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  price: number;
  videoUrl: string;
  isPublished: boolean;
}

interface CourseCardProps {
  course: Course;
  onDelete: (id: number) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{course.title}</h2>
      <p>{course.description}</p>
      <p>Level: {course.level}</p>
      <p>Duration: {course.duration}</p>
      <p>Price: ${course.price}</p>
      <button
        onClick={() => onDelete(course.id)}
        className="mt-2 text-red-600 hover:underline"
      >
        Delete
      </button>
    </div>
  );
};

export default CourseCard;
