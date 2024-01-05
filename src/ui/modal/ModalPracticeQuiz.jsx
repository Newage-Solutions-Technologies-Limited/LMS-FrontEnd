import PropTypes from "prop-types";
import Button from "../Button";
import "./Modal.css";

ModalPracticeQuiz.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  selectedModule: PropTypes.object,
};

export default function ModalPracticeQuiz({ isOpen, onClose, selectedModule }) {
  const parentObject = selectedModule?.parentObject;
  console.log(selectedModule);

  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div
      className={`practice-quiz-modal modal ${isOpen ? "open" : "closed"}`}
      onClick={onClose}
    >
      <div
        className={`modal-content modal-content ${isOpen ? "open" : ""}`}
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close-container">
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>

        {selectedModule && (
          <div key={selectedModule.module.id}>
            <div className="practice-modal-header">
              <h2>
                {parentObject.title.slice(0, 7)}: Module{" "}
                {selectedModule.index + 1} Quiz
              </h2>
              <h4 className="sub-title">Are you sure you want to continue?</h4>
              <p>
                You can change the available modules of choice. Begin by
                <br /> selecting <span>Start Quiz.</span>
              </p>
            </div>

            <div className="practice-modal-options">
              <select
                name="practice-quiz"
                id={`practice-quiz-${selectedModule.index + 1}`}
              >
                <option value="">
                  Module {selectedModule.index + 1} (50 questions)
                </option>
              </select>
            </div>

            <div className="practice-modal-notes">
              <h3>NOTES:</h3>
              <p>
                1. The scores obtained in these quizzes are intended to serve as
                an indication of your current understanding and are not to be
                considered as official assessments.
              </p>

              <p>
                2. Read the questions carefully and respond as soon as possible.
                As needed, modify your responses. Submit your work before the
                timer runs out. Examine feedback for ways to improve. Have fun
                with the challenge!
              </p>
            </div>
          </div>
        )}
        <div className="course-modal-btns">
          <Button
            width={25}
            fontweight={500}
            color="#fff"
            backgroundcolor="#008688"
            hoverin="#1c9c9e"
            borderradius={12}
            fontsize={14}
            // onClick={() => onDelete(index)}
          >
            Start quiz
          </Button>
        </div>
      </div>
    </div>
  );
}
