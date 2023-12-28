import { useState } from "react";
import PropTypes from "prop-types";
import ModuleDescription from "./ModuleDescription";
import ResourcesContent from "./ResourcesContent";
import AssignmentContent from "./AssignmentContent";
import NotesContent from "./NotesContent";
import QA from "./QA";
import "./Steps.css";

const messages = [
  // eslint-disable-next-line react/jsx-key
  <ModuleDescription />,
  // eslint-disable-next-line react/jsx-key
  <ResourcesContent />,
  // eslint-disable-next-line react/jsx-key
  <AssignmentContent />,
  // eslint-disable-next-line react/jsx-key
  <NotesContent />,
  // eslint-disable-next-line react/jsx-key
  <QA />,
];

function getStepName(step) {
  switch (step) {
    case 1:
      return "Module Description";
    case 2:
      return "Resources";
    case 3:
      return "Assignment";
    case 4:
      return "Notes";
    case 5:
      return "Q&A";
    default:
      return "";
  }
}

export default function Steps() {
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
        {[1, 2, 3, 4, 5].map((s) => (
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
