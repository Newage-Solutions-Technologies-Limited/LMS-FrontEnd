import { useState } from "react";
import PropTypes from "prop-types";
import "../../../Assessments.css";
import { FaCheck } from "react-icons/fa6";

Question.propTypes = {
  question: PropTypes.object,
  index: PropTypes.number,
  quiz: PropTypes.array,
};

export default function Question({ question, index, quiz }) {
  const [selectedOptions, setSelectedOptions] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });

  function handleSelectOption(option) {
    setSelectedOptions((prev) => ({
      a: false,
      b: false,
      c: false,
      d: false,
      [option]: !prev[option],
    }));
  }

  return (
    <div className="quiz-details">
      <h1>
        Question: {index + 1}/{quiz.length}
      </h1>

      <div className="quiz-question">
        <p>{question.question}</p>
      </div>

      {question.img && (
        <div className="quiz-image">
          <img src={question.img} alt="question-img" />
        </div>
      )}

      <div className="quiz-options">
        <div
          className={`option ${
            selectedOptions.a ? "selected-option correct" : ""
          }`}
          onClick={() => handleSelectOption("a")}
        >
          <div>
            <span className="option-bullet">A</span>
            <span className="option-item">{question.options.a}</span>
          </div>

          {selectedOptions.a && (
            <span>
              <FaCheck
                size={18}
                color="#008688"
                className="option-correct-icon"
              />
            </span>
          )}
        </div>

        <div
          className={`option ${
            selectedOptions.b ? "selected-option correct" : ""
          }`}
          onClick={() => handleSelectOption("b")}
        >
          <div>
            <span className="option-bullet">B</span>
            <span className="option-item">{question.options.b}</span>
          </div>

          {selectedOptions.b && (
            <span>
              <FaCheck
                size={18}
                color="#008688"
                className="option-correct-icon"
              />
            </span>
          )}
        </div>

        <div
          className={`option ${
            selectedOptions.c ? "selected-option correct" : ""
          }`}
          onClick={() => handleSelectOption("c")}
        >
          <div>
            <span className="option-bullet">C</span>
            <span className="option-item">{question.options.c}</span>
          </div>

          {selectedOptions.c && (
            <span>
              <FaCheck
                size={18}
                color="#008688"
                className="option-correct-icon"
              />
            </span>
          )}
        </div>

        <div
          className={`option ${
            selectedOptions.d ? "selected-option correct" : ""
          }`}
          onClick={() => handleSelectOption("d")}
        >
          <div>
            <span className="option-bullet">D</span>
            <span className="option-item">{question.options.d}</span>
          </div>

          {selectedOptions.d && (
            <span>
              <FaCheck
                size={18}
                color="#008688"
                className="option-correct-icon"
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
