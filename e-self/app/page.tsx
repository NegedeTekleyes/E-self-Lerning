// app/page.tsx
import CourseListSlider from './(components)/CourseListSlider';
import Hero from './(components)/Hero';
import { courses } from './data/courses';

export default function Home() {
  const topRatedCourses = courses.filter((course) => course.rating >= 4.5);
  const webDevelopmentCourses = courses.filter((course) => course.category === 'Web Development');
  const videoEditingCourses = courses.filter((course) => course.category === 'Video Editing');

  return (
    <div className="bg-[#EEEEEE] min-h-screen">
      <Hero />
      <div className="container mx-auto p-4">
        <CourseListSlider
          title="Top Rated Courses"
          courses={topRatedCourses}
        />

        <CourseListSlider
          title="Web Development Courses"
          courses={webDevelopmentCourses}
        />

        <CourseListSlider
          title="Video Editing Courses"
          courses={videoEditingCourses}
        />

        <CourseListSlider
          title="All Courses"
          courses={courses}
        />
      </div>
    </div>
  );
}