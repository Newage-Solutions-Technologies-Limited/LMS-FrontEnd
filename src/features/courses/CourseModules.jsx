import Accordion from "../../ui/accordion/Accordion";
import NavBar from "../../ui/navbar/NavBar";
import SideBar from "../../ui/sidebar/SideBar";
import PropTypes from "prop-types";

CourseModules.propTypes = {
  selectedCourse: PropTypes.object,
};

function CourseModules({ selectedCourse }) {
  console.log("Selected course: ", selectedCourse);
  return (
    <section>
      <SideBar />

      <div className="courses-section">
        <NavBar />

        <div className="course-card-info">
          <h1>{selectedCourse.title}</h1>
          <p>{selectedCourse.lecturers[0]}</p>
        </div>

        <Accordion courses={selectedCourse} />
      </div>
    </section>
  );
}

export default CourseModules;
