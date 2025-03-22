export default function InstructorLanding() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#EEEEEE] p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-[#8E1616] mb-4">Welcome, Instructor!</h1>
        <p className="text-lg text-gray-700">
          Empower students by sharing your knowledge. Create and manage your courses easily.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/instructor/create-course"
            className="bg-[#8E1616] text-white px-6 py-3 rounded-lg hover:bg-[#D84040] transition"
          >
            Create a Course
          </a>
          <a
            href="/instructor/my-courses"
            className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Manage Courses
          </a>
        </div>
      </div>
    </main>
  );
}
