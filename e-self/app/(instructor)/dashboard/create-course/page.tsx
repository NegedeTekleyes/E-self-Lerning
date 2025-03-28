"use client";

import React, { useState } from "react";

export default function CreateCourse() {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseDuration, setCourseDuration] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle course creation logic here
    console.log("Course Created:", { courseTitle, courseDescription, courseCategory, courseDuration });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800">Create a New Course</h1>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Course Title"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Course Description"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Category"
          value={courseCategory}
          onChange={(e) => setCourseCategory(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          placeholder="Duration (in hours)"
          value={courseDuration}
          onChange={(e) => setCourseDuration(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="w-full py-3 bg-red-600 text-white rounded-lg">
          Create Course
        </button>
      </form>
    </div>
  );
}
