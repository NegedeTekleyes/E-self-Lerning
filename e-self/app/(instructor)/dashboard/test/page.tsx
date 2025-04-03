import React from 'react';

const Card = ({
  title,
  enrolled,
  accuracy,
  completionRate,
  category,
  urgency,
  editedAgo,
  questionCount,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
      <div className="flex justify-end">
        <span className="bg-purple-200 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
          {enrolled} Enrolled
        </span>
      </div>
      <div className="flex justify-center my-4">
        <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center">
          <span className="text-4xl text-purple-800">Aa</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <div className="flex justify-between mb-2">
        <div>
          <span className="text-sm font-medium">Accuracy</span>
          <p className="text-base font-bold">{accuracy}%</p>
        </div>
        <div>
          <span className="text-sm font-medium">Completion Rate</span>
          <p className="text-base font-bold">{completionRate}%</p>
        </div>
      </div>
      <div className="flex justify-between mb-2">
        <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          {category}
        </span>
        <span className="bg-red-200 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
          {urgency}
        </span>
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>Edited {editedAgo} ago</span>
        <span>{questionCount} Question</span>
      </div>
    </div>
  );
};

const QuizDashboard = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4">Fikri Studio</h1>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full mr-1"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full mr-1"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>
          <button className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">+</button>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Upload</button>
      </div>
      <div className="flex items-center mb-4">
        <button className="text-purple-600 font-semibold mr-2">all course</button>
        <button className="text-purple-600 font-semibold mr-2">new course</button>
        <button className="text-purple-600 font-semibold mr-2">finish course</button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2">create course</button>
        <button className="text-purple-600 font-semibold mr-2">padding to publish</button>
        <button className="text-purple-600 font-semibold mr-2">popular course</button>

      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-sm font-semibold mr-2">Total Question: 5 or more</span>
          <button className="text-purple-600 font-semibold mr-2">Reset</button>
          <button className="text-purple-600 font-semibold">Add Filter</button>
        </div>
        <button className="text-purple-600 font-semibold">Date Create</button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold">100 content</span>
        <input type="text" placeholder="Search..." className="border border-gray-300 rounded-md px-4 py-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          title="Mastering UI Design for Impactful Solutions"
          enrolled={10}
          accuracy={40}
          completionRate={60}
          category="UI/UX"
          urgency="Not Urgent"
          editedAgo="2h"
          questionCount={10}
        />
        <Card
          title="A Symphony of Colors in UI Design"
          enrolled={21}
          accuracy={20}
          completionRate={80}
          category="Instructional Design"
          urgency="Not Urgent"
          editedAgo="#h"
          questionCount={15}
        />
        <Card
          title="Bridging Users and UI in Harmony"
          enrolled={18}
          accuracy={100}
          completionRate={100}
          category="Experience Design"
          urgency="Urgent"
          editedAgo="23h"
          questionCount={25}
        />
        <Card
          title="Creating Engaging Learning Journeys: UI/UX Best Practices"
          enrolled={9}
          accuracy={20}
          completionRate={100}
          category="UI/UX"
          urgency="Urgent"
          editedAgo="5d"
          questionCount={30}
        />
        <Card
          title="Designing Intuitive User Interfaces"
          enrolled={12}
          accuracy={80}
          completionRate={80}
          category="User Interface (UI)"
          urgency="Not Urgent"
          editedAgo="2d"
          questionCount={15}
        />
        <Card
          title="Optimizing User Experience Educational Platforms"
          enrolled={7}
          accuracy={0}
          completionRate={0}
          category="User Experience"
          urgency="Urgent"
          editedAgo="4d"
          questionCount={25}
        />
      </div>
    </div>
  );
};

export default QuizDashboard;