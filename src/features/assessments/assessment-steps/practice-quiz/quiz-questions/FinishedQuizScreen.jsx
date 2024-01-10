import PropTypes from "prop-types";

FinishedQuizScreen.propTypes = {
  question: PropTypes.object,
  index: PropTypes.number,
  questions: PropTypes.array,
};

export default function FinishedQuizScreen({ questions }) {
  return (
    <div className="quiz-details">
      <h1>
        You got 3/{questions.length} questions correctly. See how you performed
        below.
      </h1>
    </div>
  );
}
