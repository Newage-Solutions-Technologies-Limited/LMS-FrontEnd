import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../ui/navbar/NavBar";
import SideBar from "../../ui/sidebar/SideBar";
import AssessmentSteps from "./assessment-steps/AssessmentSteps";
import { courses } from "../courses/CoursesData";

export default function AssessmentModules() {
  const { courseTitle } = useParams();
  const selectedCourse = courses.find((course) => course.title === courseTitle);

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
          <div className="">
            <h2>{selectedCourse.title}</h2>

            <AssessmentSteps />
          </div>
        </div>
      </div>
    </section>
  );
}
