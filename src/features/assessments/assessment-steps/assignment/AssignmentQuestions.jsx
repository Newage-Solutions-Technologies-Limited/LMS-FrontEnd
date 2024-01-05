/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import preview from "../../../../assets/pdf-preview.png";
import assignment from "../../../../assets/sample.pdf";
import { SlCloudUpload } from "react-icons/sl";
import { FaRegCircleCheck } from "react-icons/fa6";

AssignmentQuestions.propTypes = {
  fileNo: PropTypes.number,
  module: PropTypes.number,
};

export default function AssignmentQuestions({ module, fileNo }) {
  return (
    <>
      <Assignment
        fileNo={fileNo}
        fileFormat="DOCX"
        fileName="Assignment Document"
        filePath={assignment}
        module={module}
        totalMark={5}
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
  totalMark: PropTypes.number,
  module: PropTypes.number,
};

function Assignment({
  fileName,
  fileFormat,
  filePath,
  fileNo,
  module,
  totalMark,
  marked = false,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    // Get the dropped file
    const file = event.dataTransfer.files[0];
    // Update state with the dropped file
    setSelectedFile(file);
    setIsDragging(false);
  };

  const handleFileChange = (event) => {
    // Get the selected file from the input event
    const file = event.target.files[0];
    // Update state with the selected file
    setSelectedFile(file);
  };

  const handleTextClick = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };

  const handleUpload = () => {
    // Implement your file upload logic here
    if (selectedFile) {
      // You can send the file to the server, perform validation, etc.
      console.log("Uploading file:", selectedFile);
    } else {
      console.error("No file selected for upload");
    }
  };

  return (
    <div className="assessment-assignment-section">
      <div className="file-container">
        <div className="assignment-step">
          <div className="question">
            <h3>
              MODULE {module}: Assignment {fileNo}
            </h3>
            <p>a. Write your name and Matric. No. on your answer sheet</p>
            <p>b. Solution should not be more than a page</p>

            <p className="question-due">
              <span>Due Date:</span> Dec 27th 9:00am - Jan 16th 12:00
            </p>
          </div>

          <div>
            <span className={marked ? "marked" : "deadline"}>
              {totalMark} marks
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
        </div>
        <div className="line"></div>
        <div className="submit-assignment">
          <h4>Submit Here</h4>
          <textarea
            name="textarea"
            id="textarea"
            placeholder="Type  your answers here..."
            cols="2"
            rows="10"
          ></textarea>
        </div>
        <div
          style={{
            borderColor: isDragging ? "#008688" : "",
            color: isDragging ? "#008688" : "",
            backgroundColor: isDragging ? "#fff" : "",
          }}
          className={`drag-drop ${
            !selectedFile ? "pointer-events" : "no-pointer-events"
          }`}
          onClick={handleTextClick}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {selectedFile ? (
            <div>
              <span>
                <FaRegCircleCheck size={30} color="#008688" />
              </span>
              <span>File uploaded: {selectedFile.name}</span>
            </div>
          ) : (
            <>
              <span>
                <SlCloudUpload size={30} color="#008688" />
              </span>
              <span>
                Drop your file here to upload or select from storage. <br />
                Supported files: pdf, doc, docx , png. Max file size: 2MB
              </span>
            </>
          )}
        </div>
        <div className="assignment-submit-btn">
          <button className={selectedFile ? "btn-on" : "btn-off"}>
            Submit now
          </button>
        </div>
        ;
      </div>
    </div>
  );
}
