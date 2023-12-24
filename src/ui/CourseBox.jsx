import PropTypes from "prop-types";

CourseBox.propTypes = {
  leftTop1: PropTypes.string,
  leftTop2: PropTypes.string,
  leftBottom1: PropTypes.object,
  leftBottom2: PropTypes.string,
  rightMiddle: PropTypes.object,
};

export default function CourseBox({
  leftTop1,
  leftTop2 = "",
  leftBottom1,
  leftBottom2 = "",
  rightMiddle,
}) {
  return (
    <div className="boxDesc ">
      <div className="course-details">
        <div className="course-title">
          <span className="title">{leftTop1}</span>
          <span className={leftTop2 ? "left-top-2" : "hidden"}>{leftTop2}</span>
        </div>

        <h3>
          {leftBottom1} <span>{leftBottom2}</span>
        </h3>
      </div>
      <p className="progressStyle">{rightMiddle}</p>
    </div>
  );
}
