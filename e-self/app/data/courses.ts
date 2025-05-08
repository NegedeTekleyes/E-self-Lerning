import { Course } from '../types/course';

export const courses: Course[] = [
  {
    slug: "web-development",
    title: "Complete Web Development",
    rating: 4.7,
    overallRating: "4.7/5",
    duration: 40,
    price: 99.99,
    image: "/images/full-stack.jpeg",
    description: "Learn full-stack web development...",
    detailedDescription: "This course covers HTML, CSS, JavaScript, React, and Node.js...",
    category: "Web Development",
    prerequisites: ["Basic computer skills"],
    requirements: ["PC with Windows 10", "Internet connection"],
    learningOutcomes: ["Build websites", "Understand backend development"],
    benefits: ["Lifetime access", "Certificate upon completion"],
    includes: ["Videos", "PDF resources"],
    expectations: "You will gain hands-on experience...",
    instructor: {
      name: "John Doe",
      rating: 4.8,
    },
modules: [
  {
    title: "Introduction",
    lectures: [
      { title: "How To Succeed In This Course", duration: "05:04", preview: true },
      { title: "Join Our Online Classroom!", duration: "04:01" },
      { title: "Meet Your Classmates", duration: "01:53" },
      { title: "ZTM Resources", duration: "04:23" },
      { title: "Monthly Coding Challenges", duration: "00:45" },
    ],
  },
  {
    title: "Big O",
    lectures: [
      { title: "What is Big O?", duration: "03:30" },
      { title: "Why It Matters", duration: "05:12" },
    ],
  },
]

  },
  // Add other courses similarly...
];
