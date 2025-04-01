'use client';
import React, { useState } from 'react';
import { Square3Stack3DIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import Slider from '@mui/material/Slider';

const tabs = [
  {
    label: 'create course',
    value: 'create course',
    icon: Square3Stack3DIcon,
    desc: 'It really matters and then like it really doesn\'t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn\'t matter.',
  },
  {
    label: 'progress course',
    value: 'progress course',
    icon: UserCircleIcon,
    desc: 'Because it\'s about motivating the doers. Because I\'m here to follow my dreams and inspire other people to follow their dreams, too.',
  },
  {
    label: 'finish course',
    value: 'finish course',
    icon: Cog6ToothIcon,
    desc: 'We\'re not always in the position that we want to be at. We\'re constantly growing. We\'re constantly making mistakes. We\'re constantly trying to express ourselves and actualize our dreams.',
  },
  {
    label: 'publish course',
    value: 'publish course',
    icon: Cog6ToothIcon,
    desc: 'We\'re not always in the position that we want to be at. We\'re constantly growing. We\'re constantly making mistakes. We\'re constantly trying to express ourselves and actualize our dreams.',
  },
];

export default function TabsWithIcon() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [courseStage, setCourseStage] = useState(1);
  const [sliderValue, setSliderValue] = useState(70);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('UI/UX Design');
  const [level, setLevel] = useState('All Level');
  const [description, setDescription] = useState('');

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const renderCourseContent = () => {
    if (activeTab === 'create course') {
      return (
        <div>
          <h1>Course Information</h1>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 mb-4"
          />

          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border p-2"
              >
                <option>UI/UX Design</option>
                <option>Web Development</option>
                <option>Marketing</option>
              </select>
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="level">Level:</label>
              <select
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full border p-2"
              >
                <option>All Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </select>
            </div>
          </div>

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 mb-4"
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

    return tabs.find((tab) => tab.value === activeTab)?.desc;
  };

  const renderCourseStageLabels = () => {
    if (activeTab === 'create course') {
      return (
        <div className="flex justify-between mb-4">
          <span className={courseStage === 1 ? 'text-blue-500' : ''}>Course Information</span>
          <span className={courseStage === 2 ? 'text-blue-500' : ''}>Update Course Material</span>
          <span className={courseStage === 3 ? 'text-blue-500' : ''}>Price</span>
          <span className={courseStage === 4 ? 'text-blue-500' : ''}>Publish</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="flex border-b border-gray-300">
        {tabs.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            className={`flex items-center gap-2 p-3 flex-1 text-center border-b-2 transition-colors duration-200 ${
              activeTab === value ? 'border-red-500 text-red-500' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </div>
      {renderCourseStageLabels()}

      {activeTab === 'create course' && (
        <Slider
          size="small"
          value={sliderValue}
          onChange={handleSliderChange}
          aria-label="Small"
          valueLabelDisplay="auto"
          className="mb-4"
        />
      )}

      <div className="p-4 bg-gray-100 mt-4 rounded-lg">
        {renderCourseContent()}
      </div>
    </div>
  );
}