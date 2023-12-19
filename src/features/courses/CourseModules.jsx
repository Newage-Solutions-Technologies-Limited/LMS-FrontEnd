import Accordion from "../../ui/accordion/Accordion";
import NavBar from "../../ui/navbar/NavBar";
import SideBar from "../../ui/sidebar/SideBar";
import { courses } from "../courses/CoursesData";

function CourseModules() {
  return (
    <section>
      <SideBar />

      <div className="courses-section">
        <NavBar />

        <div className="course-card-info">
          {/* <h1>{cardDetails.title}</h1>
          <p>{cardDetails.lecturers[0]}</p> */}
        </div>

        <Accordion courses={courses} />
      </div>
    </section>
  );
}

export default CourseModules;
