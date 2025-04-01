'use client';
import { useState } from "react";
import { VideoCameraIcon, DocumentTextIcon, DevicePhoneMobileIcon, DeviceTabletIcon, ArrowRightIcon, TagIcon } from "@heroicons/react/24/outline";

export default function AddCourse() {
  const [relatedTopic, setRelatedTopic] = useState("");
  const [videoTime, setVideoTime] = useState("");
  const [numArticles, setNumArticles] = useState("");
  const [accessDevices, setAccessDevices] = useState("");
  const [certificate, setCertificate] = useState(false);
  const [numSections, setNumSections] = useState(1); // Number of sections in the course
  const [sections, setSections] = useState([{ lectures: 1, links: [""] }]); // Initial section setup
  const [step, setStep] = useState(3); // Assuming we're moving into step 3 now

  // Handle adding more lectures in a section
  const handleAddLecture = (sectionIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].links.push("");
    setSections(updatedSections);
  };

  // Handle lecture link input
  const handleLectureChange = (sectionIndex: number, lectureIndex: number, value: string) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].links[lectureIndex] = value;
    setSections(updatedSections);
  };

  // Handle adding more sections
  const handleAddSection = () => {
    setSections([...sections, { lectures: 1, links: [""] }]);
  };

  return (
    <div className="w-full min-h-screen p-6 flex flex-col gap-6 bg-gray-100 shadow-lg rounded-lg">
      {step === 3 && (
        <>
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
            <VideoCameraIcon className="h-8 w-8 text-red-500" />
            Course Content
          </h1>

          {/* Related Topic */}
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <TagIcon className="h-6 w-6 text-red-500" />
              Related Topic
            </label>
            <input
              type="text"
              value={relatedTopic}
              onChange={(e) => setRelatedTopic(e.target.value)}
              className="w-full h-[50px] text-gray-900 bg-white border border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Related Topic for your course"
            />
          </div>

          {/* Course Content */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <VideoCameraIcon className="h-6 w-6 text-red-500" />
              <input
                type="text"
                value={videoTime}
                onChange={(e) => setVideoTime(e.target.value)}
                placeholder="Total Video Time"
                className="w-full h-[50px] text-gray-900 bg-white border border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <DocumentTextIcon className="h-6 w-6 text-red-500" />
              <input
                type="text"
                value={numArticles}
                onChange={(e) => setNumArticles(e.target.value)}
                placeholder="Number of Articles"
                className="w-full h-[50px] text-gray-900 bg-white border border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <DevicePhoneMobileIcon className="h-6 w-6 text-red-500" />
              <DeviceTabletIcon className="h-6 w-6 text-red-500" />
              <input
                type="text"
                value={accessDevices}
                onChange={(e) => setAccessDevices(e.target.value)}
                placeholder="Access Devices"
                className="w-full h-[50px] text-gray-900 bg-white border border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Certificate */}
          <div className="flex items-center gap-2">
            <label className="text-lg font-bold text-gray-800">
              Certificate of Completion
            </label>
            <input
              type="checkbox"
              checked={certificate}
              onChange={() => setCertificate(!certificate)}
              className="h-6 w-6"
            />
          </div>

          {/* Number of Sections */}
          <div className="flex flex-col mt-4">
            <label className="text-lg font-bold text-gray-800">How many sections does this course have?</label>
            <input
              type="number"
              value={numSections}
              onChange={(e) => setNumSections(Number(e.target.value))}
              className="w-full h-[50px] text-gray-900 bg-white border border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              min={1}
            />
          </div>

          {/* Sections */}
          <div className="mt-4">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col mb-4">
                <h3 className="text-lg font-bold text-gray-800">Section {index + 1}</h3>

                {/* Number of Lectures */}
                <div className="flex flex-col mt-2">
                  <label className="text-lg font-bold text-gray-800">How many lectures in this section?</label>
                  <input
                    type="number"
                    value={section.lectures}
                    onChange={(e) => {
                      const updatedSections = [...sections];
                      updatedSections[index].lectures = Number(e.target.value);
                      setSections(updatedSections);
                    }}
                    className="w-full h-[50px] text-gray-900 bg-white border border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    min={1}
                  />
                </div>

                {/* Lecture Links */}
                {section.links.map((link, lectureIndex) => (
                  <div key={lectureIndex} className="flex items-center gap-2 mt-2">
                    <input
                      type="text"
                      value={link}
                      onChange={(e) => handleLectureChange(index, lectureIndex, e.target.value)}
                      placeholder={`Lecture ${lectureIndex + 1} link`}
                      className="w-full h-[50px] text-gray-900 bg-white border border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                ))}
                <button
                  onClick={() => handleAddLecture(index)}
                  className="text-red-600 mt-2"
                >
                  + Add Lecture
                </button>
              </div>
            ))}
            <button
              onClick={handleAddSection}
              className="text-red-600 mt-4"
            >
              + Add Section
            </button>
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
