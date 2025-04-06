'use client';
import { useState } from "react";
import {
    BookOpenIcon,
    TagIcon,
    AcademicCapIcon,
    DocumentTextIcon,
    ArrowRightIcon,
    VideoCameraIcon,
    DevicePhoneMobileIcon,
    ArrowUturnRightIcon,
    PlusCircleIcon,
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
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("web");
    const [level, setLevel] = useState("beginner");
    const [description, setDescription] = useState("");
    const [learningObjectives, setLearningObjectives] = useState<string[]>([""]);
    const [prerequisites, setPrerequisites] = useState("");
    const [courseAudience, setCourseAudience] = useState("");
    const [videoTime, setVideoTime] = useState("");
    const [numArticles, setNumArticles] = useState("");
    const [accessDevices, setAccessDevices] = useState("");
    const [certificate, setCertificate] = useState(false);

    const [sections, setSections] = useState<Section[]>([
        { title: "Module 1", description: "", lectures: [] },
    ]);
    const [history, setHistory] = useState<Section[][]>([]);
    const [future, setFuture] = useState<Section[][]>([]);

    const handleNextStep = () => setStep(step + 1);
    const handlePreviousStep = () => setStep(step - 1);
    const handleAddLearningObjective = () => setLearningObjectives([...learningObjectives, ""]);
    const handleLearningObjectiveChange = (i: number, value: string) => {
        const updated = [...learningObjectives];
        updated[i] = value;
        setLearningObjectives(updated);
    };

    const saveHistory = () => {
        setHistory(prev => [...prev, sections]);
        setFuture([]);
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
        if (updated[sectionIdx]?.lectures?.[lectureIdx]) {
            updated[sectionIdx].lectures[lectureIdx] = {
                ...updated[sectionIdx].lectures[lectureIdx],
                [field]: value,
            };
            setSections(updated);
        }
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
        updated[sectionIdx]?.lectures?.push({ title: "", videoLink: "", upload: null });
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
        updated[sectionIdx]?.lectures?.splice(lectureIdx, 1);
        setSections(updated);
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
                <div className="mt-12"></div>
                    <SectionHeader title="Create a New Course" />
                    <p className="text-sm text-gray-500 mb-4">Start by adding the course basics.</p>

                    <div>
                        <Label icon={BookOpenIcon} text="Course Title" />
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            placeholder="Enter course title"
                        />
                    </div>

                    <div>
                        <Label icon={TagIcon} text="Category" />
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
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
                            className="w-full h-32 p-3 rounded border border-gray-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        />
                    </div>

                    <div className="flex justify-between gap-2 pt-6">
                        <button className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Save Draft</button>
                        <button onClick={handleNextStep} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                            Save and Continue <ArrowRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                <div className="mt-12"></div>
                    <SectionHeader title="Course Details" />

                    <div>
                        <Label icon={DocumentTextIcon} text="Learning Objectives" />
                        {learningObjectives.map((obj, i) => (
                            <input
                                key={i}
                                value={obj}
                                onChange={(e) => handleLearningObjectiveChange(i, e.target.value)}
                                placeholder={`Objective ${i + 1}`}
                                className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            />
                        ))}
                        <button onClick={handleAddLearningObjective} className="text-sm text-red-600 mt-1">+ Add more</button>
                    </div>

                    <div>
                        <Label icon={TagIcon} text="Prerequisites" />
                        <textarea
                            value={prerequisites}
                            onChange={(e) => setPrerequisites(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            placeholder="Skills or tools required before taking this course"
                        />
                    </div>

                    <div>
                        <Label icon={AcademicCapIcon} text="Target Audience" />
                        <textarea
                            value={courseAudience}
                            onChange={(e) => setCourseAudience(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            placeholder="Who is this course designed for?"
                        />
                    </div>

                    <div className="flex justify-between gap-2 pt-6">
                        <button onClick={handlePreviousStep} className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Previous</button>
                        <button className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Save Draft</button>
                        <button onClick={handleNextStep} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                            Save and Continue <ArrowRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </>
            )}

            {step === 3 && (
                <>
                <div className="mt-12"></div>
                    <SectionHeader title="Course Content" />

                    <div className="grid gap-4 mb-4">
                        <div>
                            <Label icon={VideoCameraIcon} text="Total Video Time" />
                            <input
                                value={videoTime}
                                onChange={(e) => setVideoTime(e.target.value)}
                                placeholder="e.g., 2h 30m"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <Label icon={DocumentTextIcon} text="Number of Articles" />
                            <input
                                value={numArticles}
                                onChange={(e) => setNumArticles(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <Label icon={DevicePhoneMobileIcon} text="Access Devices" />
                            <input
                                value={accessDevices}
                                onChange={(e) => setAccessDevices(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            />
                        </div>
                    </div>

                    {sections.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="mb-6 border p-4 rounded-md bg-white shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-md font-medium text-gray-700">{section.title}</h3>
                                {sections.length > 1 && (
                                    <button onClick={() => removeSection(sectionIdx)} className="text-sm text-red-500 hover:text-red-700">
                                        Remove Module
                                    </button>
                                )}
                            </div>

                            <textarea
                                value={section.description}
                                onChange={(e) => updateSection(sectionIdx, "description", e.target.value)}
                                placeholder="Module description..."
                                className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            />

                            {section.lectures.map((lecture, lectureIdx) => (
                                <div key={lectureIdx} className="mb-4 p-2 border border-gray-200 rounded">
                                    <input
                                        type="text"
                                        value={lecture.title}
                                        onChange={(e) => updateLecture(sectionIdx, lectureIdx, "title", e.target.value)}
                                        placeholder="Lecture Title"
                                        className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                    />
                                    <input
                                        type="text"
                                        value={lecture.videoLink}
                                        onChange={(e) => updateLecture(sectionIdx, lectureIdx, "videoLink", e.target.value)}
                                        placeholder="Video URL"
                                        className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                    />
                                    <input
                                        type="file"
                                        onChange={(e) => updateLecture(sectionIdx, lectureIdx, "upload", e.target.files?.[0] || null)}
                                        className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
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

                    <div className="flex justify-between gap-2 pt-6">
                        <button onClick={handlePreviousStep} className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">Previous</button>
                        <button className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">Save Draft</button>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                            Save and Continue <ArrowUturnRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
