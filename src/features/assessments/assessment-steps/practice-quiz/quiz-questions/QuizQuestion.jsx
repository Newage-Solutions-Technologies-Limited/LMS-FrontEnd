/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import "../../../Assessments.css";
import { FaCheck } from "react-icons/fa6";

QuizQuestion.propTypes = {
  question: PropTypes.object,
  index: PropTypes.number,
  questions: PropTypes.array,
  dispatch: PropTypes.func,
  answer: PropTypes.number,
  userAnswers: PropTypes.array,
};

export default function QuizQuestion({
  question,
  index,
  questions,
  dispatch,
  answer,
  userAnswers,
}) {
  return (
    <div className="quiz-details">
      <progress max={questions.length} value={index} className="progress" />
      <h3>
        Question: {index + 1}/{questions.length}
      </h3>

      <div className="quiz-question">
        <p>{question.question}</p>
      </div>

      {question.hasImage && (
        <div className="quiz-image">
          <img src={question.img} alt="question-img" />
        </div>
      )}

      <div className="quiz-options">
        {question.options.map((option, i) => (
          <div
            key={i}
            className={`option ${i === userAnswers ? "selected-option" : ""}`}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
          >
            <div>
              <span className="option-bullet">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="option-item">{option}</span>
            </div>

            {i === answer && (
              <span>
                <FaCheck
                  size={12}
                  color="#008688"
                  className="option-correct-icon"
                />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
