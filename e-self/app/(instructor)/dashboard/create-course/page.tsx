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
import { useRouter } from 'next/navigation'; // Import useRouter to redirect

// --- Match the Course Type needed by InstructorCoursesPage ---
// We are using the Course type defined in the InstructorCoursesPage component
// so the data saved by AddCourse can be directly used by InstructorCoursesPage.
interface DisplayCourse {
    id: number;
    title: string;
    imageUrl: string;
    altText: string;
    instructorName: string;
    instructorRole: string;
    instructorCompany: string;
    yearPublished: number; // Or publish year if planned
    description: string;
    enrolledStudents: number; // Placeholder for new courses
    rating: number; // Placeholder for new courses
    publishDate: Date; // Set upon finishing/planning
    reviewCount: string; // Placeholder for new courses
    status: 'published' | 'planned' | 'unfinished' | 'padding-for-publish' | 'top-rating';
}

interface Lecture {
    title: string;
    videoLink: string;
    // Note: File uploads (File type) cannot be easily saved directly in localStorage.
    // We'll exclude 'upload' from the saved data for this local example.
    // upload?: File | null;
}

interface Section {
    title: string;
    description: string;
    lectures: Lecture[];
}

// Helper to get courses from local storage
const getLocalCourses = (): DisplayCourse[] => {
    if (typeof window === 'undefined') return []; // Avoid localStorage on server side
    const savedCourses = localStorage.getItem('instructorCourses');
    if (!savedCourses) return [];
    try {
        // Parse JSON and ensure Date objects are correctly deserialized
        return JSON.parse(savedCourses).map((course: any) => ({
             ...course,
             publishDate: course.publishDate ? new Date(course.publishDate) : null,
             // Ensure other fields match DisplayCourse interface
             id: course.id || Date.now() + Math.random(), // Ensure ID exists
             imageUrl: course.imageUrl || 'https://source.unsplash.com/400x200/?education', // Default image
             altText: course.altText || 'Course Image',
             instructorName: course.instructorName || 'Instructor', // Default instructor
             instructorRole: course.instructorRole || '',
             instructorCompany: course.instructorCompany || '',
             yearPublished: course.yearPublished || new Date().getFullYear(),
             enrolledStudents: course.enrolledStudents || 0,
             rating: course.rating || 0,
             reviewCount: course.reviewCount || '0',
             status: course.status || 'unfinished', // Default status if missing
        }));
    } catch (e) {
        console.error("Failed to parse courses from localStorage", e);
        return [];
    }
};

// Helper to save courses to local storage
const saveLocalCourses = (courses: DisplayCourse[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('instructorCourses', JSON.stringify(courses));
};


export default function AddCourse() {
    const router = useRouter(); // Initialize useRouter
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Web Development"); // Match category strings used in sample data
    const [level, setLevel] = useState("beginner"); // This data won't be saved in the target Course type
    const [description, setDescription] = useState(""); // Maps to description
    const [learningObjectives, setLearningObjectives] = useState<string[]>([""]); // Not directly in target type
    const [prerequisites, setPrerequisites] = useState(""); // Not directly in target type
    const [courseAudience, setCourseAudience] = useState(""); // Not directly in target type
    const [videoTime, setVideoTime] = useState(""); // Used to calculate duration (not saved in target type)
    const [numArticles, setNumArticles] = useState(""); // Not directly in target type
    const [accessDevices, setAccessDevices] = useState(""); // Not directly in target type
    const [certificate, setCertificate] = useState(false); // Not directly in target type

    const [sections, setSections] = useState<Section[]>([ // Course content structure (not saved in target type)
        { title: "Module 1", description: "", lectures: [] },
    ]);
    // History/Undo logic omitted for simplicity in this combined example
    // const [history, setHistory] = useState<Section[][]>([]);
    // const [future, setFuture] = useState<Section[][]>([]);


    const handleNextStep = () => setStep(step + 1);
    const handlePreviousStep = () => setStep(step - 1);
    const handleAddLearningObjective = () => setLearningObjectives([...learningObjectives, ""]);
    const handleLearningObjectiveChange = (i: number, value: string) => {
        const updated = [...learningObjectives];
        updated[i] = value;
        setLearningObjectives(updated);
    };

    // Simplified update handlers without history for this example
    const updateSection = (index: number, field: keyof Section, value: string) => {
        const updated = [...sections];
        updated[index] = { ...updated[index], [field]: value };
        setSections(updated);
    };

    const updateLecture = (sectionIdx: number, lectureIdx: number, field: keyof Lecture, value: string) => { // Removed File type
        const updated = [...sections];
        if (updated[sectionIdx]?.lectures?.[lectureIdx]) {
            updated[sectionIdx].lectures[lectureIdx] = {
                ...updated[sectionIdx].lectures[lectureIdx],
                [field]: value, // Save only string values (videoLink, title)
                // upload field is ignored for localStorage saving
            };
            setSections(updated);
        }
    };

    const addSection = () => {
        setSections([...sections, {
            title: `Module ${sections.length + 1}`,
            description: "",
            lectures: [],
        }]);
    };

    const addLecture = (sectionIdx: number) => {
        const updated = [...sections];
        if (updated[sectionIdx]) {
            updated[sectionIdx].lectures = updated[sectionIdx].lectures || [];
            updated[sectionIdx].lectures.push({ title: "", videoLink: "" /* upload: null */ });
            setSections(updated);
        }
    };

    const removeSection = (index: number) => {
        const updated = [...sections];
        updated.splice(index, 1);
        setSections(updated);
    };

    const removeLecture = (sectionIdx: number, lectureIdx: number) => {
        const updated = [...sections];
        if (updated[sectionIdx]?.lectures?.[lectureIdx]) {
            updated[sectionIdx].lectures.splice(lectureIdx, 1);
            setSections(updated);
        }
    };


    // --- Function to create a Course object for display ---
    const createDisplayCourse = (status: DisplayCourse['status']): DisplayCourse => {
         // Note: Many fields required by DisplayCourse are NOT in the AddCourse form.
         // We use placeholders or derived values.

         // Basic slug generation (not in DisplayCourse type, but good practice)
         // const generatedSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

         // Parse Duration (not saved in DisplayCourse type)
         // let totalDurationInMinutes = 0; ... (parsing logic from previous example)

         // Combine section/lecture info (not saved in DisplayCourse type structure)
         // const courseContentDetails = sections.map(...)

        const now = new Date();

        const displayCourse: DisplayCourse = {
            // --- Fields collected/derived from AddCourse form state ---
            id: Date.now() + Math.random(), // Simple unique ID generation for local storage
            title: title || 'Untitled Course', // Use title or default
            description: description || 'No description provided.', // Use description or default
            category: category, // From state (used for filtering in InstructorCoursesPage if needed)
            status: status, // Set based on which button was clicked

            // --- Fields that are NOT collected in AddCourse form, using placeholders/defaults ---
            imageUrl: 'https://source.unsplash.com/400x200/?online-course', // Default image
            altText: `${title || 'Course'} image`, // Default alt text
            instructorName: 'Instructor Name', // Placeholder
            instructorRole: 'Educator', // Placeholder
            instructorCompany: 'Your Platform', // Placeholder
            yearPublished: now.getFullYear(), // Set based on current year
            enrolledStudents: 0, // Start at 0
            rating: 0, // Start at 0
            publishDate: status === 'planned' || status === 'published' ? now : new Date(0), // Set date if planned/published, else epoch
            reviewCount: '0', // Start at 0 reviews
             // detailedDescription, prerequisites, requirements, learningOutcomes, benefits, includes, expectations from previous type are not part of this target DisplayCourse type.
             // If you needed them, you'd add them to the DisplayCourse interface or store them separately.
        };

        return displayCourse;
    };


    // --- Save Draft Handler ---
    const handleSaveDraft = () => {
        if (!title) {
            alert("Course title is required to save a draft.");
            return;
        }
        const newDraftCourse = createDisplayCourse('unfinished'); // Set status to 'unfinished'

        const existingCourses = getLocalCourses();
         // In a real app, you'd update an existing draft if the user is editing.
         // For this simple example, we'll just add a new entry each time draft is saved.
         // To implement editing, you'd need to pass the course ID to the AddCourse component
         // and check if an existing course with that ID needs to be updated in localStorage.
        saveLocalCourses([...existingCourses, newDraftCourse]);

        alert("Draft saved!");
        console.log("Draft saved:", newDraftCourse);
        // Optionally stay on the same step or redirect
        // router.push('/dashboard/courses'); // Example: Redirect to courses list after saving
    };

    // --- Save and Finish Handler ---
    const handleSaveAndFinish = () => {
         if (!title || !description || learningObjectives.filter(o => o.trim() !== '').length === 0 || sections.length === 0) {
             alert("Please fill in basic course details, objectives, and add at least one module/section before finishing.");
             return; // Simple validation
         }

        const newPlannedCourse = createDisplayCourse('planned'); // Set status to 'planned'

        const existingCourses = getLocalCourses();
         // Similar to draft, in a real app you'd update an existing course.
        saveLocalCourses([...existingCourses, newPlannedCourse]);

        alert("Course saved as Planned!");
        console.log("Planned course saved:", newPlannedCourse);
        router.push('/dashboard/courses'); // Redirect to the courses list page
    };


    // Helper components (Label, SectionHeader) remain the same
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
            {/* Step 1: Course Basics */}
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
                            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-500"
                        >
                             {/* Use categories that match InstructorCoursesPage sample data or your planned categories */}
                            <option value="Web Development">Web Development</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Video Editing">Video Editing</option>
                            <option value="Programming">Programming</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Design">Design</option>
                            <option value="Data Science">Data Science</option>
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
                        {/* Calls handleSaveDraft */}
                        <button type="button" onClick={handleSaveDraft} className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Save Draft</button>
                        <button type="button" onClick={handleNextStep} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                            Save and Continue <ArrowRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </>
            )}

            {/* Step 2: Course Details (Objectives, Prerequisites, Audience) */}
            {step === 2 && (
                <>
                <div className="mt-12"></div>
                    <SectionHeader title="Course Details" />

                    <div>
                        <Label icon={DocumentTextIcon} text="Learning Objectives (One per line)" />
                        {learningObjectives.map((obj, i) => (
                            <input
                                key={i}
                                value={obj}
                                onChange={(e) => handleLearningObjectiveChange(i, e.target.value)}
                                placeholder={`Objective ${i + 1}`}
                                className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            />
                        ))}
                        <button type="button" onClick={handleAddLearningObjective} className="text-sm text-red-600 mt-1 hover:text-red-700">+ Add more</button>
                    </div>

                    <div>
                        <Label icon={TagIcon} text="Prerequisites (Comma-separated)" />
                        <textarea
                            value={prerequisites}
                            onChange={(e) => setPrerequisites(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            placeholder="e.g., Basic HTML, Understanding of CSS"
                        />
                    </div>

                    <div>
                        <Label icon={AcademicCapIcon} text="Target Audience / Expectations" />
                        <textarea
                            value={courseAudience}
                            onChange={(e) => setCourseAudience(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            placeholder="Who is this course designed for? What should they expect?"
                        />
                    </div>

                    <div className="flex justify-between gap-2 pt-6">
                        <button type="button" onClick={handlePreviousStep} className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Previous</button>
                        {/* Calls handleSaveDraft */}
                        <button type="button" onClick={handleSaveDraft} className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">Save Draft</button>
                        <button type="button" onClick={handleNextStep} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                            Save and Continue <ArrowRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </>
            )}

            {/* Step 3: Course Content and Final Details */}
            {step === 3 && (
                <>
                <div className="mt-12"></div>
                    <SectionHeader title="Course Content & Final Details" />

                    <div className="grid gap-4 mb-4">
                         {/* These fields exist in the form but are NOT saved in the target DisplayCourse type */}
                         {/* They would be saved as part of the detailed course content in a real backend */}
                        <div>
                            <Label icon={VideoCameraIcon} text="Total Video Time (e.g., 2h 30m)" />
                            <input
                                value={videoTime}
                                onChange={(e) => setVideoTime(e.target.value)}
                                placeholder="e.g., 2h 30m"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <Label icon={DocumentTextIcon} text="Number of Articles / Resources" />
                            <input
                                type="number"
                                value={numArticles}
                                onChange={(e) => setNumArticles(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                placeholder="e.g., 15"
                            />
                        </div>

                        <div>
                            <Label icon={DevicePhoneMobileIcon} text="Access Devices (e.g., Desktop, Mobile, TV)" />
                            <input
                                value={accessDevices}
                                onChange={(e) => setAccessDevices(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                placeholder="e.g., Desktop, Mobile"
                            />
                        </div>
                    </div>

                     {/* Sections and Lectures - Content details */}
                    {sections.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="mb-6 border p-4 rounded-md bg-white shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-md font-medium text-gray-700">{section.title}</h3>
                                {sections.length > 1 && (
                                    <button type="button" onClick={() => removeSection(sectionIdx)} className="text-sm text-red-500 hover:text-red-700">
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
                                     <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-sm font-medium text-gray-600">Lecture {lectureIdx + 1}</h4>
                                        {section.lectures.length > 0 && (
                                            <button type="button" onClick={() => removeLecture(sectionIdx, lectureIdx)} className="text-xs text-red-500 hover:text-red-700">
                                                Remove Lecture
                                            </button>
                                        )}
                                     </div>
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
                                        placeholder="Video URL (Optional)"
                                        className="w-full mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                    />
                                     {/* File upload is not saved in local storage example */}
                                     {/* <input type="file" ... /> */}

                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={() => addLecture(sectionIdx)}
                                className="text-sm text-red-600 flex items-center gap-1 hover:text-red-700"
                            >
                                <PlusCircleIcon className="h-4 w-4" /> Add Lecture
                            </button>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addSection}
                        className="text-sm text-red-600 flex items-center gap-1 hover:text-red-700"
                    >
                        <PlusCircleIcon className="h-5 w-5" /> Add Another Module
                    </button>

                    <div className="flex items-center gap-2 mt-4">
                         {/* Certificate option */}
                        <input
                            type="checkbox"
                            checked={certificate}
                            onChange={() => setCertificate(!certificate)}
                            className="form-checkbox text-red-600 rounded"
                        />
                        <span className="text-sm text-gray-700">Provide certificate upon completion</span>
                    </div>

                    <div className="flex justify-between gap-2 pt-6">
                        <button type="button" onClick={handlePreviousStep} className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">Previous</button>
                         {/* Calls handleSaveDraft */}
                        <button type="button" onClick={handleSaveDraft} className="text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">Save Draft</button>
                        {/* Calls handleSaveAndFinish */}
                        <button type="button" onClick={handleSaveAndFinish} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                            Save and Finish <ArrowUturnRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}