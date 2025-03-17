export type Course = {
  slug: string;
  title: string;
  description: string;
  detailedDescription: string;
  duration: number;
  price: number;
  image: string;
  rating: number;
  overallRating: string;
  category: string;
  prerequisites: string[];
  requirements: string[];
  learningOutcomes: string[];
  benefits: string[];
  includes: string[];
  expectations: string;
  instructor: {
    name: string;
    rating: number;
  };
};

export const courses: Course[] = [
  {
    slug: "web-development",
    title: "Complete Web Development",
    rating: 4.7,
    overallRating: "4.7/5",
    duration: 40,
    price: 99.99,
    image: "/images/web-dev.jpg",
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
  },
  {
    slug: "web-development-advance",
    title: "advance Web Development",
    rating: 4.7,
    overallRating: "2.7/5",
    duration: 50,
    price: 919.99,
    image: "/images/web-dev.jpg",
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
      name: "Johny Doe",
      rating: 4.8,
    },
  },
  {
    slug: "python-programming",
    title: "Python Programming Masterclass",
    rating: 4.6,
    overallRating: "4.6/5",
    duration: 35,
    price: 89.99,
    image: "/images/python.jpg",
    description: "Master Python from beginner to advanced...",
    detailedDescription: "Learn Python fundamentals, data structures, algorithms, and advanced topics like machine learning...",
    category: "Programming",
    prerequisites: ["Basic programming logic"],
    requirements: ["Python installed on your computer"],
    learningOutcomes: ["Write Python scripts", "Develop applications", "Understand data analysis with Python"],
    benefits: ["Practical projects", "Community support"],
    includes: ["Code examples", "Assignments"],
    expectations: "You will be able to build complex Python applications...",
    instructor: {
      name: "Jane Smith",
      rating: 4.5,
    },
  },
    {
    slug: "digital-marketing",
    title: "Digital Marketing Bootcamp",
    rating: 4.8,
    overallRating: "4.8/5",
    duration: 30,
    price: 119.99,
    image: "/images/digital-marketing.jpg",
    description: "Become a digital marketing expert...",
    detailedDescription: "Learn SEO, social media marketing, PPC, and content marketing...",
    category: "Marketing",
    prerequisites: ["Basic understanding of internet usage"],
    requirements: ["Access to social media platforms"],
    learningOutcomes: ["Run effective marketing campaigns", "Analyze marketing data"],
    benefits: ["Real-world projects", "Industry insights"],
    includes: ["Templates", "Case studies"],
    expectations: "You will be able to create and manage successful digital marketing strategies...",
    instructor: {
      name: "Alice Johnson",
      rating: 4.9,
    },
  },
  {
    slug: "graphic-design",
    title: "Graphic Design Fundamentals",
    rating: 4.5,
    overallRating: "4.5/5",
    duration: 25,
    price: 79.99,
    image: "/images/graphic-design.jpg",
    description: "Learn the fundamentals of graphic design...",
    detailedDescription: "Covers Adobe Photoshop, Illustrator, and design principles...",
    category: "Design",
    prerequisites: ["Basic computer skills"],
    requirements: ["Adobe Creative Suite (trial or paid)"],
    learningOutcomes: ["Create logos and branding", "Design marketing materials"],
    benefits: ["Portfolio building", "Practical exercises"],
    includes: ["Design resources", "Project files"],
    expectations: "You will be able to create professional graphic designs...",
    instructor: {
      name: "David Lee",
      rating: 4.4,
    },
  },
  {
    slug: "data-science",
    title: "Data Science with R",
    rating: 4.7,
    overallRating: "4.7/5",
    duration: 45,
    price: 129.99,
    image: "/images/data-science.jpg",
    description: "Master data science using R programming...",
    detailedDescription: "Learn data manipulation, visualization, and statistical modeling...",
    category: "Data Science",
    prerequisites: ["Basic statistics knowledge"],
    requirements: ["R and RStudio installed"],
    learningOutcomes: ["Analyze and visualize data", "Build predictive models"],
    benefits: ["Hands-on projects", "Real-world datasets"],
    includes: ["R scripts", "Data files"],
    expectations: "You will be able to perform data analysis and build data-driven solutions...",
    instructor: {
      name: "Emily White",
      rating: 4.8,
    },
  },

];