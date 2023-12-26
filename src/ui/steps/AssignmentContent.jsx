import PropTypes from "prop-types";
import "../../features/courses/Courses.css";
import preview from "../../assets/pdf-preview.png";
import assignment from "../../assets/sample.pdf";
import Button from "../Button";

export default function AssignmentContent() {
  return (
    <>
      <Assignment
        fileNo={1}
        fileFormat="DOCX"
        fileName="Assignment Document"
        filePath={assignment}
      />
      <Assignment
        fileNo={2}
        fileFormat="PDF"
        fileName="Assignment Document"
        filePath={assignment}
        marked={true}
      />
    </>
  );
}

Assignment.propTypes = {
  fileNo: PropTypes.number,
  fileName: PropTypes.string,
  filePath: PropTypes.string,
  fileFormat: PropTypes.string,
  marked: PropTypes.bool,
};

function Assignment({
  fileName,
  fileFormat,
  filePath,
  fileNo,
  marked = false,
}) {
  return (
    <>
      <div className="file-container">
        <div className="assignment-step">
          <div className="question">
            <h3>Assignment {fileNo}.</h3>
            <p>a. Write your name and Matric. No. on your answer sheet</p>
            <p>b. Solution should not be more than a page</p>
          </div>

          <div>
            <span className={marked ? "marked" : "deadline"}>
              {marked ? "Marked" : "Deadline: Jan. 12, 2024"}
            </span>
          </div>
        </div>

        <div className="assignment-foot">
          <a href={filePath} download className="file">
            <img src={preview} alt="" className="file-preview" />
            <span className="file-type">
              <span className="file-name">{fileName}</span>
              <span className="file-format">{fileFormat}.</span>
            </span>
          </a>

          <div className="assignment-btn">
            <Button
              width={50}
              fontsize={14}
              fontweight={900}
              color="#008688"
              borderradius={15}
              bordercolor="#008688"
              hoverin="#d6e9e9"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
