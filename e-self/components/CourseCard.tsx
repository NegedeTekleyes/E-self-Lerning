'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { Course } from '@/app/data/courses';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { image, title, category, rating, description, duration, price, slug } = course;

  return (
    <Card className="w-72 h-[400px] flex flex-col overflow-hidden">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between mb-2">
          <Badge className="bg-[#8E1616]">{category}</Badge>
          <span className="text-sm">⭐ {rating}</span>
        </div>
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>

      <CardFooter className="p-4 flex justify-between items-center">
        <div className="text-sm">🕒 {duration}h · <strong>${price}</strong></div>
        <Link href={`/courses/${slug}`}>
          <Button className="bg-[#8E1616] hover:bg-[#D84040]" size="sm">Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
