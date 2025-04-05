'use client';
import { useState } from "react";
import {
  BookOpenIcon, TagIcon, AcademicCapIcon, DocumentTextIcon,
  ArrowRightIcon, VideoCameraIcon, DevicePhoneMobileIcon, DeviceTabletIcon, PlusCircleIcon,ArrowUturnLeftIcon, ArrowUturnRightIcon
} from "@heroicons/react/24/outline";
import { BookOpenIcon as SolidBookOpenIcon } from "@heroicons/react/24/solid";

interface Lecture {
  title: string;
  videoLink: string;
  upload?: File | null; // Optional file upload
}

interface Section {
  title: string;
  description: string;
  lectures: Lecture[];
}

export default function AddCourse() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("web");
  const [level, setLevel] = useState("beginner");
  const [description, setDescription] = useState("");
  const [learningObjectives, setLearningObjectives] = useState([""]);
  const [prerequisites, setPrerequisites] = useState("");
  const [courseAudience, setCourseAudience] = useState("");
  const [videoTime, setVideoTime] = useState("");
  const [numArticles, setNumArticles] = useState("");
  const [accessDevices, setAccessDevices] = useState("");
  const [certificate, setCertificate] = useState(false);
  const [sections, setSections] = useState<Section[]>([
    { title: "Module 1", description: "", lectures: [] },
  ]);

  const handleNextStep = () => setStep(step + 1);
  const handleAddLearningObjective = () => setLearningObjectives([...learningObjectives, ""]);
  const handleLearningObjectiveChange = (i: number, value: string) => {
    const updated = [...learningObjectives];
    updated[i] = value;
    setLearningObjectives(updated);
  };

  const handleSectionChange = (sectionIndex: number, field: keyof Section, value: string) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex] = { ...updatedSections[sectionIndex], [field]: value };
    setSections(updatedSections);
  };

  const handleAddLecture = (sectionIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lectures = [
      ...updatedSections[sectionIndex].lectures,
      { title: "", videoLink: "", upload: null },
    ];
    setSections(updatedSections);
  };

  const handleLectureChange = (sectionIndex: number, lectureIndex: number, field: keyof Lecture, value: string | File | null) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lectures[lectureIndex] = {
      ...updatedSections[sectionIndex].lectures[lectureIndex],
      [field]: value,
    };
    setSections(updatedSections);
  };

  const handleAddSection = () => {
    setSections([...sections, { title: `Module ${sections.length + 1}`, description: "", lectures: [] }]);
  };

  const Label = ({ icon: Icon, text }: { icon: any, text: string }) => (
    <label className="text-sm text-gray-700 font-medium flex items-center gap-1 mb-1">
      <Icon className="h-5 w-5 text-red-500" />
      {text}
    </label>
  );

  const SectionHeader = ({ title }: { title: string }) => (
    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
      <SolidBookOpenIcon className="h-6 w-6 text-red-500" />
      {title}
    </h2>
  );

  return (
    <div className="w-full min-h-screen p-6 bg-gray-50 rounded-lg space-y-6">
      {step === 1 && (
        <>
          <SectionHeader title="Create a New Course" />
          <p className="text-sm text-gray-500 mb-4">Start by adding the course basics.</p>

          <div>
            <Label icon={BookOpenIcon} text="Course Title" />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter course title"
            />
          </div>

          <div>
            <Label icon={TagIcon} text="Category" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="web">Web Development</option>
              <option value="ui">UI/UX Design</option>
              <option value="video editing">Video Editing</option>
            </select>
          </div>

          <div>
            <Label icon={AcademicCapIcon} text="Level" />
            <div className="flex gap-4 text-sm text-gray-600">
              {["beginner", "intermediate", "expert"].map((lvl) => (
                <label key={lvl} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={lvl}
                    checked={level === lvl}
                    onChange={() => setLevel(lvl)}
                  />
                  {lvl[0].toUpperCase() + lvl.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label icon={DocumentTextIcon} text="Description" />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief course description..."
              maxLength={2000}
              className="w-full h-32 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Save Draft</button>
            <button onClick={handleNextStep} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
              Save and Continue <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <SectionHeader title="Course Details" />

          <div>
            <Label icon={DocumentTextIcon} text="Learning Objectives" />
            {learningObjectives.map((obj, i) => (
              <input
                key={i}
                value={obj}
                onChange={(e) => handleLearningObjectiveChange(i, e.target.value)}
                placeholder={`Objective ${i + 1}`}
                className="w-full mb-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
              />
            ))}
            <button onClick={handleAddLearningObjective} className="text-sm text-red-600 mt-1">+ Add more</button>
          </div>

          <div>
            <Label icon={TagIcon} text="Prerequisites" />
            <textarea
              value={prerequisites}
              onChange={(e) => setPrerequisites(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
              placeholder="Skills or tools required before taking this course"
            />
          </div>

          <div>
            <Label icon={AcademicCapIcon} text="Target Audience" />
            <textarea
              value={courseAudience}
              onChange={(e) => setCourseAudience(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
              placeholder="Who is this course designed for?"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Save Draft</button>
            <button onClick={handleNextStep} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
              Save and Continue <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <SectionHeader title="Course Content" />

          <div className="grid gap-4 mb-4">
            <div>
              <Label icon={VideoCameraIcon} text="Total Video Time (estimated)" />
              <input
                value={videoTime}
                onChange={(e) => setVideoTime(e.target.value)}
                placeholder="e.g., 2h 30m"
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <Label icon={DocumentTextIcon} text="Number of Articles (estimated)" />
              <input
                value={numArticles}
                onChange={(e) => setNumArticles(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <Label icon={DevicePhoneMobileIcon} text="Access Devices" />
              <input
                value={accessDevices}
                onChange={(e) => setAccessDevices(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>

          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6 border p-4 rounded-md bg-white shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-700">{section.title}</h3>
                {sectionIndex > 0 && (
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700 text-sm"
                    onClick={() => {
                      const updatedSections = [...sections];
                      updatedSections.splice(sectionIndex, 1);
                      setSections(updatedSections);
                    }}
                  >
                    Remove Module
                  </button>
                )}
              </div>
              <div>
                <label className="text-sm text-gray-700 font-medium mb-1">Module Description:</label>
                <textarea
                  value={section.description}
                  onChange={(e) => handleSectionChange(sectionIndex, "description", e.target.value)}
                  placeholder="Brief description of this module..."
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-400 mb-2"
                />
              </div>
              <h4 className="text-md font-semibold text-gray-600 mb-2">Lectures:</h4>
              {section.lectures.map((lecture, lectureIndex) => (
                <div key={lectureIndex} className="mb-3 p-2 border border-gray-200 rounded">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div>
                      <label className="text-sm text-gray-700 font-medium mb-1 block">Lecture Title:</label>
                      <input
                        type="text"
                        value={lecture.title}
                        onChange={(e) => handleLectureChange(sectionIndex, lectureIndex, "title", e.target.value)}
                        placeholder={`Lecture ${lectureIndex + 1} Title`}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700 font-medium mb-1 block">Video Link:</label>
                      <input
                        type="text"
                        value={lecture.videoLink}
                        onChange={(e) => handleLectureChange(sectionIndex, lectureIndex, "videoLink", e.target.value)}
                        placeholder="Paste video URL (e.g., YouTube, Vimeo)"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700 font-medium mb-1 block">Upload Video (Optional):</label>
                      <input
                        type="file"
                        onChange={(e) => handleLectureChange(sectionIndex, lectureIndex, "upload", e.target.files?.[0] || null)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
                      />
                    </div>
                  </div>
                  {section.lectures.length > 1 && (
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700 text-sm mt-1"
                      onClick={() => {
                        const updatedSections = [...sections];
                        updatedSections[sectionIndex].lectures.splice(lectureIndex, 1);
                        setSections(updatedSections);
                      }}
                    >
                      Remove Lecture
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddLecture(sectionIndex)}
                className="text-sm text-red-600 mt-2 flex items-center gap-1"
              >
                <PlusCircleIcon className="h-4 w-4" /> Add Lecture
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddSection}
            className="text-sm text-red-600 mt-4 flex items-center gap-1"
          >
            <PlusCircleIcon className="h-5 w-5" /> Add Another Module
          </button>

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              checked={certificate}
              onChange={() => setCertificate(!certificate)}
            />
            <span className="text-sm text-gray-700">Students receive certificate upon completion</span>
          </div>

          <div className="flex justify-between pt-4">
            <button className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Save Draft</button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
              Save and Continue <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}