import PropTypes from "prop-types";

OverviewBox.propTypes = {
  leftTop: PropTypes.string,
  leftBottom1: PropTypes.string,
  leftBottom2: PropTypes.string,
  rightMiddle: PropTypes.object,
};

export default function OverviewBox({
  leftTop,
  leftBottom1,
  leftBottom2 = "",
  rightMiddle,
}) {
  return (
    <div className="boxDesc">
      <div className="overview">
        <span className="title">{leftTop}</span>

        <h3 className="overview-report">
          {leftBottom1} <span>{leftBottom2}</span>
        </h3>
      </div>
      <p className="progressStyle">{rightMiddle}</p>
    </div>
  );
}
