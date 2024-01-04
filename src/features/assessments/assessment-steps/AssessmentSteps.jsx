import { useState } from "react";
import PropTypes from "prop-types";
import PracticeQuiz from "./practice-quiz/PracticeQuiz";
import AssigmentAssessment from "./assignment/AssignmentAssessment";
import "../Assessments.css";

const messages = [
  // eslint-disable-next-line react/jsx-key
  <PracticeQuiz />,
  // eslint-disable-next-line react/jsx-key
  <AssigmentAssessment />,
  // eslint-disable-next-line react/jsx-key
  "No continuous Assessment to display yet",
  // eslint-disable-next-line react/jsx-key
  "No examinations to display yet",
];

function getStepName(step) {
  switch (step) {
    case 1:
      return "Practice Quiz";
    case 2:
      return "Assignment";
    case 3:
      return "Continuous Assessment";
    case 4:
      return "Exams";
    default:
      return "";
  }
}

export default function AssessmentSteps() {
  return (
    <div>
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);

  function handleStepClick(selectedStep) {
    setStep(selectedStep);
  }

  return (
    <div className="steps">
      <div className="numbers">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={step === s ? "active" : ""}
            onClick={() => handleStepClick(s)}
          >
            <span className="step-title">{getStepName(s)}</span>
          </div>
        ))}
      </div>

      <div className="step-message">
        <StepMessage>{messages[step - 1]}</StepMessage>
      </div>
    </div>
  );
}

StepMessage.propTypes = {
  step: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Button.propTypes = {
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

function StepMessage({ children }) {
  return <div className="message">{children}</div>;
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
