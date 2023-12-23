import { useParams } from "react-router-dom";
import Accordion from "../../ui/accordion/Accordion";
import NavBar from "../../ui/navbar/NavBar";
import SideBar from "../../ui/sidebar/SideBar";
import { courses } from "./CoursesData";
import { useEffect } from "react";
// import "./Courses.css";

function CourseModules() {
  const { courseId } = useParams();
  const selectedCourse = courses.find(
    (course) => course.id === Number(courseId)
  );

  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }

  return (
    <section>
      <SideBar />

      <div className="courses-section">
        <NavBar />

        <div className="side-content-body">
          <div className="course-card-heading">
            <div className="course-card-heading-left">
              <h3>{selectedCourse.title}</h3>
              <p className="lecturers">
                Lecturers In Charge:{" "}
                <span>{selectedCourse.lecturers[0]}, Prof. Gbademo Alice</span>
              </p>
              <p className="description">
                The study of disease in populations and of factors that
                determine its occurrence over time. The purpose is to describe
                and identify opportunities for intervention
              </p>
            </div>

            <div className="course-card-heading-right">
              <p>
                <span>20% Completed</span>
              </p>
            </div>
          </div>
        </div>

        <Accordion selectedCourse={selectedCourse} />
      </div>
    </section>
  );
}

export default CourseModules;
