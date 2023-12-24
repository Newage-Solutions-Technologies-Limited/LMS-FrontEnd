import { useState } from "react";
import PropTypes from "prop-types";
import "./Steps.css";
import ResourcesContent from "./StepsMessages";

const messages = [
  "The study of disease in populations and of factors that determine its occurrence over time. The purpose is to describe and identify opportunities for intervention",
  // eslint-disable-next-line react/jsx-key
  <ResourcesContent />,
  "Invest your new income 🤑",
  "Invest your new income 🤑",
  "Invest your new income 🤑",
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

  //   function handlePrevious() {
  //     if (step > 1) setStep((s) => s - 1);
  //   }

  //   function handleNext() {
  //     if (step < 5) {
  //       setStep((s) => s + 1);
  //     }
  //   }

  function handleStepClick(selectedStep) {
    setStep(selectedStep);
  }

  return (
    <div>
      <div className="steps">
        <div className="numbers">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={step === s ? "active" : ""}
              onClick={() => handleStepClick(s)}
            >
              {getStepName(s)}
            </div>
          ))}
        </div>

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

// <div className="buttons">
//   <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
//     <span>👈</span> Previous
//   </Button>

//   <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
//     Next <span>👉</span>
//     <span>🤓</span>
//   </Button>
// </div>
