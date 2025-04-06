'use client';

import { useState } from "react";
import {
  VideoCameraIcon,
  DocumentTextIcon,
  DevicePhoneMobileIcon,
  PlusCircleIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon
} from "@heroicons/react/24/outline";
import { BookOpenIcon as SolidBookOpenIcon } from "@heroicons/react/24/solid";

interface Lecture {
  title: string;
  videoLink: string;
  upload?: File | null;
}

interface Section {
  title: string;
  description: string;
  lectures: Lecture[];
}

export default function AddCourse() {
  const [step, setStep] = useState(1);
  const [videoTime, setVideoTime] = useState("");
  const [numArticles, setNumArticles] = useState("");
  const [accessDevices, setAccessDevices] = useState("");
  const [certificate, setCertificate] = useState(false);

  const [sections, setSections] = useState<Section[]>([
    { title: "Module 1", description: "", lectures: [] },
  ]);
  const [history, setHistory] = useState<Section[][]>([]);
  const [future, setFuture] = useState<Section[][]>([]);

  const saveHistory = () => {
    setHistory(prev => [...prev, sections]);
    setFuture([]);
  };

  const undo = () => {
    if (!history.length) return;
    const prev = history[history.length - 1];
    setFuture(f => [sections, ...f]);
    setSections(prev);
    setHistory(h => h.slice(0, -1));
  };

  const redo = () => {
    if (!future.length) return;
    const next = future[0];
    setHistory(h => [...h, sections]);
    setSections(next);
    setFuture(f => f.slice(1));
  };

  const updateSection = (index: number, field: keyof Section, value: string) => {
    saveHistory();
    const updated = [...sections];
    updated[index] = { ...updated[index], [field]: value };
    setSections(updated);
  };

  const updateLecture = (sectionIdx: number, lectureIdx: number, field: keyof Lecture, value: string | File | null) => {
    saveHistory();
    const updated = [...sections];
    updated[sectionIdx].lectures[lectureIdx] = {
      ...updated[sectionIdx].lectures[lectureIdx],
      [field]: value,
    };
    setSections(updated);
  };

  const addSection = () => {
    saveHistory();
    setSections([...sections, {
      title: `Module ${sections.length + 1}`,
      description: "",
      lectures: [],
    }]);
  };

  const addLecture = (sectionIdx: number) => {
    saveHistory();
    const updated = [...sections];
    updated[sectionIdx].lectures.push({ title: "", videoLink: "", upload: null });
    setSections(updated);
  };

  const removeSection = (index: number) => {
    saveHistory();
    const updated = [...sections];
    updated.splice(index, 1);
    setSections(updated);
  };

  const removeLecture = (sectionIdx: number, lectureIdx: number) => {
    saveHistory();
    const updated = [...sections];
    updated[sectionIdx].lectures.splice(lectureIdx, 1);
    setSections(updated);
  };

  const Label = ({ icon: Icon, text }: { icon: any, text: string }) => (
    <label className="text-sm text-gray-700 flex items-center gap-1 mb-1">
      <Icon className="h-5 w-5 text-red-500" />
      {text}
    </label>
  );

  const SectionHeader = ({ title }: { title: string }) => (
    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
      <SolidBookOpenIcon className="h-6 w-6 text-red-500" />
      {title}
    </h2>
  );

  return (
    <div className="w-full min-h-screen p-6 bg-gray-50 rounded-lg space-y-6">
      {step === 3 && (
        <div className="flex justify-end gap-3">
          <button onClick={undo} disabled={!history.length}
            className={`flex items-center gap-1 text-sm px-3 py-1 border rounded ${history.length ? 'text-gray-700 hover:bg-gray-200' : 'text-gray-400 cursor-not-allowed'}`}>
            <ArrowUturnLeftIcon className="h-4 w-4" /> Undo
          </button>
          <button onClick={redo} disabled={!future.length}
            className={`flex items-center gap-1 text-sm px-3 py-1 border rounded ${future.length ? 'text-gray-700 hover:bg-gray-200' : 'text-gray-400 cursor-not-allowed'}`}>
            <ArrowUturnRightIcon className="h-4 w-4" /> Redo
          </button>
        </div>
      )}

      <SectionHeader title="Course Content" />

      <div className="grid gap-4 mb-4">
        <div>
          <Label icon={VideoCameraIcon} text="Total Video Time" />
          <input
            value={videoTime}
            onChange={(e) => setVideoTime(e.target.value)}
            placeholder="e.g., 2h 30m"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div>
          <Label icon={DocumentTextIcon} text="Number of Articles" />
          <input
            value={numArticles}
            onChange={(e) => setNumArticles(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div>
          <Label icon={DevicePhoneMobileIcon} text="Access Devices" />
          <input
            value={accessDevices}
            onChange={(e) => setAccessDevices(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
          />
        </div>
      </div>

      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx} className="mb-6 border p-4 rounded-md bg-white shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-md font-medium text-gray-700">{section.title}</h3>
            {sectionIdx > 0 && (
              <button onClick={() => removeSection(sectionIdx)} className="text-sm text-red-500 hover:text-red-700">
                Remove Module
              </button>
            )}
          </div>

          <textarea
            value={section.description}
            onChange={(e) => updateSection(sectionIdx, "description", e.target.value)}
            placeholder="Module description..."
            className="w-full p-2 mb-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-400"
          />

          {section.lectures.map((lecture, lectureIdx) => (
            <div key={lectureIdx} className="mb-4 p-2 border border-gray-200 rounded">
              <input
                type="text"
                value={lecture.title}
                onChange={(e) => updateLecture(sectionIdx, lectureIdx, "title", e.target.value)}
                placeholder="Lecture Title"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                value={lecture.videoLink}
                onChange={(e) => updateLecture(sectionIdx, lectureIdx, "videoLink", e.target.value)}
                placeholder="Video URL"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
              />
              <input
                type="file"
                onChange={(e) => updateLecture(sectionIdx, lectureIdx, "upload", e.target.files?.[0] || null)}
                className="w-full mb-2 p-2 border border-gray-300 rounded"
              />
              {section.lectures.length > 1 && (
                <button onClick={() => removeLecture(sectionIdx, lectureIdx)} className="text-xs text-red-500 hover:text-red-700">
                  Remove Lecture
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => addLecture(sectionIdx)}
            className="text-sm text-red-600 flex items-center gap-1"
          >
            <PlusCircleIcon className="h-4 w-4" /> Add Lecture
          </button>
        </div>
      ))}

      <button
        onClick={addSection}
        className="text-sm text-red-600 flex items-center gap-1"
      >
        <PlusCircleIcon className="h-5 w-5" /> Add Another Module
      </button>

      <div className="flex items-center gap-2 mt-4">
        <input type="checkbox" checked={certificate} onChange={() => setCertificate(!certificate)} />
        <span className="text-sm text-gray-700">Provide certificate upon completion</span>
      </div>

      <div className="flex justify-between pt-6">
        <button className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">Save Draft</button>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
          Save and Continue <ArrowUturnRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
