'use client';
import React, { useState } from 'react';

const AddCourseForm = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [price, setPrice] = useState(3400);
  const [category, setCategory] = useState('UI/UX Design');
  const [instructor, setInstructor] = useState('UI/UX Design');
  const [level, setLevel] = useState('All Level');
  const [description, setDescription] = useState('Hi Everyone!\n\nPrototyping is a core skill in user experience design that is a powerful approach for all designers and creatives.\n\nIn this class, you\'ll learn the fundamentals of prototyping to redesigning how something works for more fluid usability. We\'ll cover everything you need to know about how to prototype your ideas and guide you to create your first UX (user experience) project right in the center of your own home, which if of course, your kitchen!');
  const [learnItems, setLearnItems] = useState(['How to create wireframes', 'Creating wireframes from scratch', 'The basics of wireframe prototyping']);
  const [newLearnItem, setNewLearnItem] = useState('');

  const handleAddLearnItem = () => {
    if (newLearnItem.trim()) {
      setLearnItems([...learnItems, newLearnItem]);
      setNewLearnItem('');
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Add New Course</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseTitle">
          Course Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="courseTitle"
          type="text"
          placeholder="Your course title goes here..."
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            $
          </span>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-7"
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
          Category
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>UI/UX Design</option>
          <option>Web Development</option>
          <option>Marketing</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructor">
          Instructor
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="instructor"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
        >
          <option>UI/UX Design</option>
          <option>John Doe</option>
          <option>Jane Smith</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="level">
          Level
        </label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio" name="level" value="All Level" checked={level === 'All Level'} onChange={() => setLevel('All Level')} />
            <span className="ml-2">All Level</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio" name="level" value="Beginner" checked={level === 'Beginner'} onChange={() => setLevel('Beginner')} />
            <span className="ml-2">Beginner</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio" name="level" value="Intermediate" checked={level === 'Intermediate'} onChange={() => setLevel('Intermediate')} />
            <span className="ml-2">Intermediate</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio" name="level" value="Expert" checked={level === 'Expert'} onChange={() => setLevel('Expert')} />
            <span className="ml-2">Expert</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          What Students Will Learn
        </label>
        <div className="flex flex-wrap gap-2">
          {learnItems.map((item, index) => (
            <div key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm">
              {item}
            </div>
          ))}
        </div>
        <div className="flex mt-2">
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow mr-2"
            type="text"
            placeholder="Add a learning point"
            value={newLearnItem}
            onChange={(e) => setNewLearnItem(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddLearnItem}
          >
            Add
          </button>
        </div>
      </div>

      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Save Course
      </button>
    </div>
  );
};

export default AddCourseForm;