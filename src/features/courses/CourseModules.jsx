import { useParams } from "react-router-dom";
import Accordion from "../../ui/accordion/Accordion";
import NavBar from "../../ui/navbar/NavBar";
import SideBar from "../../ui/sidebar/SideBar";
import { courses } from "./CoursesData";

function CourseModules() {
  const { courseId } = useParams();
  const selectedCourse = courses.find(
    (course) => course.id === Number(courseId)
  );

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }

  return (
    <section>
      <SideBar />

      <div className="courses-section">
        <NavBar />

        <div className="course-card-info">
          <h1>{selectedCourse.title}</h1>
          <p>{selectedCourse.lecturers[0]}</p>
        </div>

        <Accordion selectedCourse={selectedCourse} />
      </div>
    </section>
  );
}

export default CourseModules;
