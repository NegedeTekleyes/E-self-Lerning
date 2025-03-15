export type Course = {
  slug: string;
  title: string;
  description: string;
  duration: number;
  price: number;
  image: string;
  rating: number;
  category: string;
};

export const courses: Course[] = [
  {
    slug: 'web-development',
    title: 'Full Stack Web Development',
    description: 'Master modern web development with React, Node.js, and MongoDB',
    duration: 40,
    price: 299,
    image: '/images/web-dev.jpg',
    rating: 4.8,
    category: 'Web Development'
  },
  {
    slug: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile apps with React Native',
    duration: 35,
    price: 249,
    image: '/images/mobile-dev.jpg',
    rating: 4.7,
    category: 'Mobile Development'
  },
  // Add more courses...
];