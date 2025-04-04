import React from 'react';

interface CardProps {
  imageUrl: string;
  altText: string;
  name: string;
  role: string;
  company: string;
  description: string;
  rating: number;
  reviewCount: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  altText,
  name,
  role,
  company,
  description,
  rating,
  reviewCount,
}) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <img src={imageUrl} alt={altText} className="w-full h-32 object-cover" />
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            {/* You might replace this with an actual profile image */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
            <p className="text-xs text-gray-600">{role}</p>
          </div>
        </div>
        <p className="text-sm font-medium text-blue-600 mb-1">{company}</p>
        <p className="text-xs text-gray-500 mb-3">{description}</p>
        <div className="flex items-center space-x-1 text-xs text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
          <span>{rating}</span>
          <span className="text-gray-400">({reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const cardsData = [
    {
      imageUrl: '/images/project-manager.jpg', // Replace with your actual image path
      altText: 'Project Manager Desk',
      name: 'Theresa Webb',
      role: 'UX/UI designer',
      company: 'Google UX/UI Analytics',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      rating: 4.8,
      reviewCount: '44k reviews',
    },
    {
      imageUrl: '/images/web-design.jpg', // Replace with your actual image path
      altText: 'Web Design on Laptop',
      name: 'Theresa Webb',
      role: 'UX/UI designer',
      company: 'Google UX/UI Analytics',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      rating: 4.8,
      reviewCount: '44k reviews',
    },
    {
      imageUrl: '/images/data-analysis.jpg', // Replace with your actual image path
      altText: 'Data Analysis on Laptop',
      name: 'Theresa Webb',
      role: 'UX/UI designer',
      company: 'Google UX/UI Analytics',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      rating: 4.8,
      reviewCount: '44k reviews',
    },
    {
      imageUrl: '/images/mobile-ui.jpg', // Replace with your actual image path
      altText: 'Mobile UI Design',
      name: 'Theresa Webb',
      role: 'UX/UI designer',
      company: 'Google UX/UI Analytics',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      rating: 4.8,
      reviewCount: '44k reviews',
    },
  ];

  const tabs = [
    'Project Manager',
    'UX/UI Design',
    'Digital Market',
    'Data Scientist',
    'Data Analyst',
    'Front-End Developer',
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <ul className="flex space-x-4">
            {tabs.map((tab) => (
              <li key={tab}>
                <button className="px-4 py-2 text-gray-700 rounded-full bg-white shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-white text-gray-600 rounded-full shadow-sm px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-white text-gray-600 rounded-full shadow-sm px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;