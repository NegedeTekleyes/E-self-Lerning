'use client';
import React, { useState } from "react";
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const AddCourse = () => {
  const [step, setStep] = useState(1);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [videoTime, setVideoTime] = useState("");
  const [certificate, setCertificate] = useState(false);
  const [sections, setSections] = useState([{ title: "", lectures: [""] }]);

  const [objectives, setObjectives] = useState<string[]>([""]);
  const [prerequisites, setPrerequisites] = useState<string[]>([""]);
  const [audience, setAudience] = useState<string[]>([""]);

  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [promoVideo, setPromoVideo] = useState("");
  const [publishDate, setPublishDate] = useState("");

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  const handleObjectiveChange = (index: number, value: string) => {
    const newObjectives = [...objectives];
    newObjectives[index] = value;
    setObjectives(newObjectives);
  };

  const handleAddObjective = () => setObjectives([...objectives, ""]);

  const handleLectureChange = (sectionIndex: number, lectureIndex: number, value: string) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lectures[lectureIndex] = value;
    setSections(updatedSections);
  };

  const handleAddLecture = (sectionIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].lectures.push("");
    setSections(updatedSections);
  };

  const handleAddSection = () => setSections([...sections, { title: "", lectures: [""] }]);

  return (
    <div className="p-6">
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 1: Basic Info</h2>
          <input className="w-full p-2 border" placeholder="Course Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input className="w-full p-2 border" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          <textarea className="w-full p-2 border" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input className="w-full p-2 border" placeholder="Level" value={level} onChange={(e) => setLevel(e.target.value)} />
          <input className="w-full p-2 border" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
          <input className="w-full p-2 border" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 2: Course Details</h2>

          <div>
            <label className="font-medium">Learning Objectives</label>
            {objectives.map((obj, i) => (
              <input key={i} className="w-full p-2 border mb-2" value={obj} onChange={(e) => handleObjectiveChange(i, e.target.value)} />
            ))}
            <button onClick={handleAddObjective} className="flex items-center text-blue-600 mt-2">
              <PlusCircleIcon className="w-5 h-5 mr-1" /> Add Objective
            </button>
          </div>

          <div>
            <label className="font-medium">Prerequisites</label>
            <textarea className="w-full p-2 border" value={prerequisites.join(", ")} onChange={(e) => setPrerequisites(e.target.value.split(","))} />
          </div>

          <div>
            <label className="font-medium">Target Audience</label>
            <textarea className="w-full p-2 border" value={audience.join(", ")} onChange={(e) => setAudience(e.target.value.split(","))} />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 3: Course Content</h2>
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border p-4 rounded">
              <input
                className="w-full p-2 border mb-2"
                placeholder={`Section ${sectionIndex + 1} Title`}
                value={section.title}
                onChange={(e) => {
                  const newSections = [...sections];
                  newSections[sectionIndex].title = e.target.value;
                  setSections(newSections);
                }}
              />
              {section.lectures.map((lecture, lectureIndex) => (
                <input
                  key={lectureIndex}
                  className="w-full p-2 border mb-2"
                  placeholder={`Lecture ${lectureIndex + 1}`}
                  value={lecture}
                  onChange={(e) => handleLectureChange(sectionIndex, lectureIndex, e.target.value)}
                />
              ))}
              <button onClick={() => handleAddLecture(sectionIndex)} className="text-blue-600 flex items-center">
                <PlusCircleIcon className="w-5 h-5 mr-1" /> Add Lecture
              </button>
            </div>
          ))}
          <button onClick={handleAddSection} className="text-green-600 flex items-center">
            <PlusCircleIcon className="w-5 h-5 mr-1" /> Add Section
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Step 4: Media & Schedule</h2>

          <input type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files?.[0] || null)} />

          <input
            className="w-full p-2 border"
            placeholder="Promotional Video URL"
            value={promoVideo}
            onChange={(e) => setPromoVideo(e.target.value)}
          />

          <input
            type="date"
            className="w-full p-2 border"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
          />
        </div>
      )}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button onClick={handlePrevStep} className="flex items-center px-4 py-2 bg-gray-200 rounded">
            <ArrowUturnLeftIcon className="w-4 h-4 mr-1" /> Back
          </button>
        )}

        {step < 4 ? (
          <button onClick={handleNextStep} className="ml-auto px-4 py-2 bg-blue-600 text-white rounded">
            Next Step <ArrowUturnRightIcon className="w-4 h-4 ml-1" />
          </button>
        ) : (
          <button onClick={() => alert("Course submitted!")} className="ml-auto px-4 py-2 bg-green-600 text-white rounded">
            Submit Course
          </button>
        )}
      </div>
    </div>
  );
};

export default AddCourse;
