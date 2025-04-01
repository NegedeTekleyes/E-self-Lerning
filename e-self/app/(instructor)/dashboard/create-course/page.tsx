'use client';
import { useState } from "react";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("web");
  const [level, setLevel] = useState("beginner");
  const [description, setDescription] = useState("");

  return (
    <div className="w-full min-h-screen p-4 flex flex-col gap-4 bg-gray-100">
      {/* Course Title */}
      <h1 className="text-2xl font-bold text-gray-800">Create a New Course</h1>
      <p className="text-gray-600">Fill in the details below to create your course.</p>
      <p><title>title of the course</title></p>
      <input
        type="text"
        placeholder="Your course title goes here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full h-[50px] text-white bg-[#c33932] px-4 text-lg sm:text-base"
      />
       <p className="text-gray-600">catagory of the course</p>
      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="web">Web</option>
        <option value="ui">UI</option>
        <option value="video editing">Video Editing</option>
      </select>
      <p className="text-gray-600">lavel of the corse</p>
      {/* Level Selection */}
      <div className="flex gap-4">
        <label>
          <input
            type="radio"
            value="beginner"
            checked={level === "beginner"}
            onChange={() => setLevel("beginner")}
          />
          Beginner
        </label>
        <label>
          <input
            type="radio"
            value="intermediate"
            checked={level === "intermediate"}
            onChange={() => setLevel("intermediate")}
          />
          Intermediate
        </label>
        <label>
          <input
            type="radio"
            value="expert"
            checked={level === "expert"}
            onChange={() => setLevel("expert")}
          />
          Expert
        </label>
      </div>
      <p className="text-gray-600">description of the course</p>
      {/* Description */}
      <textarea
        placeholder="Description (0/2000)"
        maxLength={2000}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full h-40 p-2 border rounded"
      />

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="px-4 py-2 border rounded">Save Draft</button>
        <button className="px-4 py-2 bg-[#8E1616] text-white rounded">Save and Continue</button>
      </div>
    </div>
  );
}
