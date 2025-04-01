'use client';
import { useState } from "react";
import { BookOpenIcon, TagIcon, AcademicCapIcon, DocumentTextIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon as SolidBookOpenIcon } from "@heroicons/react/24/solid"; // Import solid version of BookOpenIcon

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("web");
  const [level, setLevel] = useState("beginner");
  const [description, setDescription] = useState("");
  const [step, setStep] = useState(1); // To manage multi-step form
  const [learningObjectives, setLearningObjectives] = useState(["", "", "", ""]);
  const [prerequisites, setPrerequisites] = useState("");
  const [courseAudience, setCourseAudience] = useState("");

  // Handle next step click
  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  // Handle adding more learning objectives
  const handleAddLearningObjective = () => {
    setLearningObjectives([...learningObjectives, ""]);
  };

  // Handle updating learning objectives
  const handleLearningObjectiveChange = (index: number, value: string) => {
    const updatedObjectives = [...learningObjectives];
    updatedObjectives[index] = value;
    setLearningObjectives(updatedObjectives);
  };

  return (
    <div className="w-full min-h-screen p-6 flex flex-col gap-6 bg-gray-100 shadow-lg rounded-lg">
      {step === 1 && (
        <>
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
            <SolidBookOpenIcon className="h-8 w-8 text-red-500" />
            Create a New Course
          </h1>
          <p className="text-lg text-gray-700">Fill in the details below to create your course.</p>

          {/* Course Title */}
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <BookOpenIcon className="h-6 w-6 text-red-500" />
              Title of the Course
            </label>
            <input
              type="text"
              placeholder="Your course title goes here..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-[50px] text-gray-900 bg-white border border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <TagIcon className="h-6 w-6 text-red-500" />
              Category of the Course
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="web">Web Development</option>
              <option value="ui">UI/UX Design</option>
              <option value="video editing">Video Editing</option>
            </select>
          </div>

          {/* Level Selection */}
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <AcademicCapIcon className="h-6 w-6 text-red-500" />
              Level of the Course
            </label>
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
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <DocumentTextIcon className="h-6 w-6 text-red-500" />
              Description of the Course
            </label>
            <textarea
              placeholder="Write a brief description of your course... (0/2000)"
              maxLength={2000}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-40 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button className="px-6 py-3 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-200 flex items-center gap-2">
              Save Draft
            </button>
            <button
              onClick={handleNextStep}
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 flex items-center gap-2"
            >
              Save and Continue
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
            <SolidBookOpenIcon className="h-8 w-8 text-red-500" />
            Course Details
          </h1>

          {/* Learning Objectives */}
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <DocumentTextIcon className="h-6 w-6 text-red-500" />
              What will students learn in your course?
            </label>
            {learningObjectives.map((objective, index) => (
              <input
                key={index}
                type="text"
                value={objective}
                onChange={(e) => handleLearningObjectiveChange(index, e.target.value)}
                className="w-full h-[50px] text-gray-900 bg-white border border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500 mb-3"
                placeholder={`Learning Objective ${index + 1}`}
              />
            ))}
            <button
              onClick={handleAddLearningObjective}
              className="text-red-600 mt-2"
            >
              + Add More
            </button>
          </div>

          {/* Prerequisites */}
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <TagIcon className="h-6 w-6 text-red-500" />
              What are the requirements or prerequisites for taking your course?
            </label>
            <textarea
              value={prerequisites}
              onChange={(e) => setPrerequisites(e.target.value)}
              className="w-full h-40 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="List required skills, experience, tools or equipment"
            />
          </div>

          {/* Intended Learners */}
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <AcademicCapIcon className="h-6 w-6 text-red-500" />
              Who is this course for?
            </label>
            <textarea
              value={courseAudience}
              onChange={(e) => setCourseAudience(e.target.value)}
              className="w-full h-40 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Write a clear description of the intended learners"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button className="px-6 py-3 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-200 flex items-center gap-2">
              Save Draft
            </button>
            <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 flex items-center gap-2">
              Save and Continue
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
