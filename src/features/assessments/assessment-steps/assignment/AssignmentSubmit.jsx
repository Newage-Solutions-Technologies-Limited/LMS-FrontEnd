/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../../courses/CoursesData";
import PropTypes from "prop-types";

const messages = [
  // eslint-disable-next-line react/jsx-key
  "Module 1",
  // eslint-disable-next-line react/jsx-key
  "Module 2",
  // eslint-disable-next-line react/jsx-key
  "Module 3",
];

function getStepName(step) {
  switch (step) {
    case 1:
      return (
        <div className="">
          <h3>Module 1: Assignment 1 (5 marks)</h3>
          <p>Dec 27th, 9:00am - Jan 16th 12:00</p>
        </div>
      );

    case 2:
      return (
        <div className="">
          <h3>Module 1: Assignment 2 (5 marks)</h3>
          <p>Dec 27th, 9:00am - Jan 16th 12:00</p>
        </div>
      );
    case 3:
      return (
        <div className="">
          <h3>Module 1: Assignment 3 (5 marks)</h3>
          <p>Dec 27th, 9:00am - Jan 16th 12:00</p>
        </div>
      );
    default:
      return "";
  }
}

export default function AssignmentSubmit() {
  return (
    <div>
      <Step />
    </div>
  );
}

function Step() {
  const { courseTitle } = useParams();
  const selectedCourse = courses.find((course) => course.title === courseTitle);
  const [step, setStep] = useState(1);

  function handleStepClick(selectedStep) {
    setStep(selectedStep);
  }

  return (
    <div className="assessment-assignment-steps">
      <div className="all-steps">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={step === s ? "active" : ""}
            onClick={() => handleStepClick(s)}
          >
            <div className="step-title">{getStepName(s)}</div>
          </div>
        ))}
      </div>

      <div className="step-content">
        <StepMessage>{messages[step - 1]}</StepMessage>
      </div>
    </div>
  );
}

StepMessage.propTypes = {
  step: PropTypes.number,
  children: PropTypes.node.isRequired,
};

function StepMessage({ children }) {
  return <div className="message">{children}</div>;
}
