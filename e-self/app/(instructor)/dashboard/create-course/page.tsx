'use client';
import { useState } from "react";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("web");
  const [level, setLevel] = useState("beginner");
  const [description, setDescription] = useState("");

  return (
    <div className="w-full min-h-screen p-6 flex flex-col gap-6 bg-gray-100 shadow-lg rounded-lg">
      {/* Course Title */}
      <h1 className="text-3xl font-extrabold text-gray-900">Create a New Course</h1>
      <p className="text-lg text-gray-700">Fill in the details below to create your course.</p>
      
      <label className="text-lg font-bold text-gray-800">Title of the Course</label>
      <input
        type="text"
        placeholder="Your course title goes here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full h-[50px] text-gray-900 bg-white border border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      
      {/* Category Dropdown */}
      <label className="text-lg font-bold text-gray-800">Category of the Course</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <option value="web">Web Development</option>
        <option value="ui">UI/UX Design</option>
        <option value="video editing">Video Editing</option>
      </select>
      
      {/* Level Selection */}
      <label className="text-lg font-bold text-gray-800">Level of the Course</label>
      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="beginner"
            checked={level === "beginner"}
            onChange={() => setLevel("beginner")}
          />
          <span className="text-gray-700">Beginner</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="intermediate"
            checked={level === "intermediate"}
            onChange={() => setLevel("intermediate")}
          />
          <span className="text-gray-700">Intermediate</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="expert"
            checked={level === "expert"}
            onChange={() => setLevel("expert")}
          />
          <span className="text-gray-700">Expert</span>
        </label>
      </div>
      
      {/* Description */}
      <label className="text-lg font-bold text-gray-800">Description of the Course</label>
      <textarea
        placeholder="Write a brief description of your course... (0/2000)"
        maxLength={2000}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full h-40 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button className="px-6 py-3 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-200">Save Draft</button>
        <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">Save and Continue</button>
      </div>
    </div>
  );
}