import PropTypes from "prop-types";
import "./CourseBox.css";

CourseBox.propTypes = {
  leftTop1: PropTypes.string,
  leftTop2: PropTypes.string,
  leftBottom1: PropTypes.object,
  leftBottom2: PropTypes.string,
  leftBottom3: PropTypes.object,
  leftBottom4: PropTypes.string,
  rightMiddle: PropTypes.object,
};

export default function CourseBox({
  leftTop1,
  leftTop2 = "",
  leftBottom1,
  leftBottom2,
  leftBottom3,
  leftBottom4,
  rightMiddle,
}) {
  return (
    <div className="course-box-desc">
      <div className="course-steps-details">
        <div className="course-title">
          <span className="title">{leftTop1}</span>
          <span
            className={leftTop2 === "Link" ? "left-top-2-1" : "left-top-2-2"}
          >
            {leftTop2}
          </span>
        </div>

        <span className="left-details">{leftBottom1}</span>
        <span className="first-left-details-group">{leftBottom2}</span>
        <span className="left-details">{leftBottom3}</span>
        <span className="">{leftBottom4}</span>
      </div>
      <p className="progressStyle">{rightMiddle}</p>
    </div>
  );
}
