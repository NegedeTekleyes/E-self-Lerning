import CourseList from './(components)/CourseList';
import Hero from './(components)/Hero';
import courses from './api/data/courses';

export default function Home() {
  const topRatedCourses = courses.filter((course) => course.rating >= 4.5);
  const webDevelopmentCourses = courses.filter((course) => course.category === 'Web Development');
  const videoEditingCourses = courses.filter((course) => course.category === 'Video Editing');

  return (
    <div>
      <Hero />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Top Rated Courses</h2>
        <CourseList courses={topRatedCourses} />

        <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
        <CourseList courses={webDevelopmentCourses} />

        <h2 className="text-2xl font-semibold mb-4">Video Editing</h2>
        <CourseList courses={videoEditingCourses} />
      </div>
    </div>
  );
}