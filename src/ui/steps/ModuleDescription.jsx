import { useParams } from "react-router-dom";
import { courses } from "../../features/courses/CoursesData";
import PropTypes from "prop-types";
import { CiCalendar } from "react-icons/ci";
import "./Steps.css";

export default function ModuleDescription() {
  const { courseTitle } = useParams();
  const selectedCourse = courses.find((course) => course.title === courseTitle);

  return (
    <>
      <div className="module-desc">
        <div>
          <h4>Module Title</h4>
          <p>{selectedCourse.title}</p>
        </div>

        <div>
          <h4>Lecturer In Charge</h4>
          <p>{selectedCourse.lecturers[0]}</p>
        </div>

        <div>
          <h4>Description</h4>
          <p>
            The study of disease in populations and of factors that determine
            its occurrence over time. The purpose is to describe and identify
            opportunities for intervention
          </p>
        </div>
      </div>

      <div className="module-desc-assessment">
        <h4>Assessment Schedule</h4>

        <div className="assessment-boxes">
          <CourseBox
            leftTop1="Continuous Assessment 1: EDX 504"
            leftTop2="Closing today"
            leftBottom1={<CiCalendar />}
            leftBottom2="02 Oct, 2024"
            leftBottom3={<CiCalendar />}
            leftBottom4="09 : 30 am"
            rightMiddle={<CiCalendar size={20} color="#008688" />}
          />

          <CourseBox
            leftTop1="Continuous Assessment 2: EDX 504"
            leftTop2="4 days left"
            leftBottom1={<CiCalendar />}
            leftBottom2="02 Oct, 2024"
            leftBottom3={<CiCalendar />}
            leftBottom4="09 : 30 am"
            rightMiddle={<CiCalendar size={20} color="#008688" />}
          />
        </div>
      </div>
    </>
  );
}

CourseBox.propTypes = {
  leftTop1: PropTypes.string,
  leftTop2: PropTypes.string,
  leftBottom1: PropTypes.object,
  leftBottom2: PropTypes.string,
  leftBottom3: PropTypes.object,
  leftBottom4: PropTypes.string,
  rightMiddle: PropTypes.object,
};

function CourseBox({
  leftTop1,
  leftTop2 = "",
  leftBottom1,
  leftBottom2,
  leftBottom3,
  leftBottom4,
  rightMiddle,
}) {
  return (
    <div className="module-course-box-desc">
      <div className="course-steps-details">
        <div className="course-title">
          <span className="title">{leftTop1}</span>
          <span>
            <span
              className={
                leftTop2 === "Closing today" ? "left-top-2-1" : "left-top-2-2"
              }
            >
              {leftTop2}
            </span>
          </span>
        </div>

        <span className="module-duration left-details">{leftBottom1}</span>
        <span className="module-duration first-left-details-group">
          {leftBottom2}
        </span>
        <span className="module-duration left-details">{leftBottom3}</span>
        <span className="module-duration">{leftBottom4}</span>
      </div>
      <p className="progress-style">{rightMiddle}</p>
    </div>
  );
}
