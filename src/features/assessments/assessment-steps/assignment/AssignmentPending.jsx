import { useParams } from "react-router-dom";
import { courses } from "../../../courses/CoursesData";
import PropTypes from "prop-types";
import preview from "../../../../assets/pdf-preview.png";
import assignment from "../../../../assets/sample.pdf";
import emptyFolder from "../../../../assets/empty.svg";
import Button from "../../../../ui/Button";

AssignmentPending.propTypes = {
  onSubmitNow: PropTypes.func,
};

export default function AssignmentPending({ onSubmitNow }) {
  const { courseTitle } = useParams();
  const selectedCourse = courses.find((course) => course.title === courseTitle);

  return (
    <>
      {selectedCourse.progress === 100 ? (
        <div className="empty-assignment">
          <img src={emptyFolder} alt="empty" width="25%" />

          <h4>You have no assignments pending!</h4>
          <p>Check back later for new assignments</p>
        </div>
      ) : (
        <>
          <Assignment
            fileNo={1}
            fileFormat="DOCX"
            fileName="Assignment Document"
            filePath={assignment}
            totalMark={5}
            marked={true}
            onSubmitNow={onSubmitNow}
          />
          <Assignment
            fileNo={2}
            fileFormat="PDF"
            fileName="Assignment Document"
            filePath={assignment}
            totalMark={10}
            onSubmitNow={onSubmitNow}
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
  totalMark: PropTypes.number,
  marked: PropTypes.bool,
  onSubmitNow: PropTypes.func,
};

function Assignment({
  fileName,
  fileFormat,
  filePath,
  fileNo,
  totalMark,
  marked = false,
  onSubmitNow,
}) {
  return (
    <div className="assessment-assignment-section">
      <div className="assignment-file-container">
        <div className="assignment-file-container-date">
          <span>Tue</span>
          <span className="date-number">23</span>
          <span>Dec</span>
        </div>

        <div>
          <div className="assignment-file-step">
            <div className="question">
              <h3>
                MODULE {fileNo}:{" "}
                <span>
                  Assignment {fileNo} ({totalMark} marks)
                </span>
              </h3>
              <p>a. Write your name and Matric. No. on your answer sheet</p>
              <p>b. Solution should not be more than a page</p>
            </div>

            <div>
              <span className={marked ? "almost-expired" : "deadline"}>
                {marked ? "2 days left" : "Deadline: Jan. 12, 2024"}
              </span>
            </div>
          </div>

          <div className="assignment-file-foot">
            <a href={filePath} download className="file">
              <img src={preview} alt="" className="file-preview" />
              <span className="file-type">
                <span className="file-name">{fileName}</span>
                <span className="file-format">{fileFormat}.</span>
              </span>
            </a>

            <div className="assignment-file-btn">
              <Button
                width={35}
                fontsize={14}
                fontweight={900}
                color="#008688"
                borderradius={12}
                bordercolor="#008688"
                hoverin="#d6e9e9"
                onClick={onSubmitNow}
              >
                Submit now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
