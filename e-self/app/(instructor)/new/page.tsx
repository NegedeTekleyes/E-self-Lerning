'use client';

import { useSearchParams } from 'next/navigation';

export default function NewCoursePage() {
  const searchParams = useSearchParams();

  const courseDetails: { label: string; value: string | null }[] = [
    { label: 'Title', value: searchParams.get('title') },
    { label: 'Duration', value: searchParams.get('duration') + ' hours' },
    { label: 'Description', value: searchParams.get('description') },
    { label: 'Prerequisites', value: searchParams.get('prerequisite') },
    { label: 'Requirements', value: searchParams.get('requirement') },
    { label: 'Learning Outcomes', value: searchParams.get('outcome') },
    { label: 'Benefits', value: searchParams.get('benefit') },
    { label: 'Includes', value: searchParams.get('include') },
    { label: 'Expectations', value: searchParams.get('expectations') },
    { label: 'Category', value: searchParams.get('category') },
    { label: 'Level', value: searchParams.get('level') },
    { label: 'Price', value: `$${searchParams.get('price')}` },
  ];

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#EEEEEE] p-6">
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Course Preview</h1>

        {courseDetails.map(({ label, value }) =>
          value ? (
            <div key={label} className="mb-4">
              <h2 className="text-xl font-semibold">{label}</h2>
              <p className="text-gray-700">{value}</p>
            </div>
          ) : null
        )}

        <div className="flex justify-center mt-6">
          <button className="bg-[#8E1616] text-white px-6 py-2 rounded-lg hover:bg-[#D84040]">
            Publish Course
          </button>
        </div>
      </div>
    </main>
  );
}
