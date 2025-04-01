'use client';
import React, { useState } from 'react';
import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import Slider from '@mui/material/Slider';

const tabs = [
  { label: 'Create Course', value: 'create course', icon: Square3Stack3DIcon },
  { label: 'Progress Course', value: 'progress course', icon: UserCircleIcon },
  { label: 'Finish Course', value: 'finish course', icon: Cog6ToothIcon },
  { label: 'Publish Course', value: 'publish course', icon: Cog6ToothIcon },
];

export default function TabsWithIcon() {
  const [activeTab, setActiveTab] = useState('create course');
  const [sliderValue, setSliderValue] = useState(70);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('UI/UX Design');
  const [level, setLevel] = useState('All Level');
  const [description, setDescription] = useState('');

  const handleSliderChange = (_, newValue) => {
    setSliderValue(newValue);
  };

  const renderCourseContent = () => {
    if (activeTab === 'create course') {
      return (
        <div>
          <h2 className="text-lg font-semibold mb-4">Course Information</h2>
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2">Category:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option>UI/UX Design</option>
                <option>Web Development</option>
                <option>Marketing</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Level:</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option>All Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </select>
            </div>
          </div>

          <label className="block mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded mb-2"
            rows="4"
          />
          <p className="text-sm text-gray-500">{description.length}/2000 characters</p>

          <div className="flex justify-between mt-4">
            <button className="bg-gray-200 px-4 py-2 rounded">Save as Draft</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Save & Continue</button>
          </div>
        </div>
      );
    }
    return <p className="text-gray-700 p-4">No content available for this tab.</p>;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex border-b border-gray-200">
        {tabs.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            className={`flex items-center gap-2 p-4 flex-1 text-center border-b-2 transition-all duration-200 ${
              activeTab === value
                ? 'border-blue-600 text-blue-600 bg-blue-50 font-semibold'
                : 'border-transparent text-gray-600 hover:text-blue-500 hover:bg-gray-100'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'create course' && (
        <div className="my-6 px-4">
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            sx={{
              color: '#2563eb',
              '& .MuiSlider-thumb': { width: 16, height: 16 },
            }}
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>Course Information</span>
            <span>Publish</span>
          </div>
        </div>
      )}

      <div className="p-8 bg-white rounded-xl shadow-sm mt-6 border border-gray-200">
        {renderCourseContent()}
      </div>
    </div>
  );
}