// import { useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../features/courses/CoursesData";
import PropTypes from "prop-types";
import preview from "../../assets/pdf-preview.png";
import assignment from "../../assets/sample.pdf";
import emptyFolder from "../../assets/empty.svg";
import Button from "../Button";
import "./Steps.css";

export default function AssignmentContent() {
  const { courseTitle } = useParams();
  const selectedCourse = courses.find((course) => course.title === courseTitle);

  return (
    <>
      {selectedCourse.progress === 100 ? (
        <div className="empty-assignment">
          <img src={emptyFolder} alt="empty" width="25%" />

          <h4>Nothing on your assignment board right now!</h4>
          <p>Check back later for new assignments</p>
        </div>
      ) : (
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
      )}
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
