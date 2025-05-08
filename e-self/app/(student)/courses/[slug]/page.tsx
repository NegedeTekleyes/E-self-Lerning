'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { courses } from '@/app/data/courses';

interface CoursePageProps {
  params: { slug: string };
}

export default function CoursePage({ params }: CoursePageProps) {
  const [course, setCourse] = useState(() => courses.find(c => c.slug === params.slug) || null);
  const [isAcquired, setIsAcquired] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (!course) return;

    const acquired = JSON.parse(localStorage.getItem('acquiredCourses') || '[]');
    setIsAcquired(acquired.includes(course.slug));

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setIsInCart(cart.includes(course.slug));
  }, [course]);

  if (!course) return notFound();

  const handleAcquire = () => {
    const acquired = JSON.parse(localStorage.getItem('acquiredCourses') || '[]');
    if (!acquired.includes(course.slug)) {
      acquired.push(course.slug);
      localStorage.setItem('acquiredCourses', JSON.stringify(acquired));
      setIsAcquired(true);
    }
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (!cart.includes(course.slug)) {
      cart.push(course.slug);
      localStorage.setItem('cart', JSON.stringify(cart));
      setIsInCart(true);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="relative w-full h-64 rounded-md overflow-hidden mb-6">
          <Image src={course.image} alt={course.title} fill className="object-cover" />
        </div>

        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-600 mb-2">Rating: ⭐ {course.rating}</p>
        <p className="text-gray-600 mb-2">Duration: {course.duration} hours</p>
        <p className="text-gray-600 mb-4"><strong>${course.price}</strong></p>

        <p className="mb-6">{course.detailedDescription}</p>

        <div className="flex gap-4">
          <Button onClick={handleAcquire} disabled={isAcquired}>
            {isAcquired ? 'Acquired ✅' : 'Acquire Course'}
          </Button>
          <Button onClick={handleAddToCart} variant="outline" disabled={isInCart}>
            {isInCart ? 'In Cart 🛒' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
}
