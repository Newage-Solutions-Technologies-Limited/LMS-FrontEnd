// /* eslint-disable no-unused-vars */
import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { quiz } from "./quiz-questions/QuizData";
import NavBarQuiz from "../../../../ui/navbar/NavbarQuiz";
import ModalCourseModule from "../../../../ui/modal/ModalCourseModule";
import QuizQuestion from "./quiz-questions/QuizQuestion";
import Loader from "./Loader";
import Error from "./Error";

const initialState = {
  questions: quiz,

  // loading, error, ready, active, finished
  status: "active",
  index: 0,
  answer: null,
  points: 0,
  isModalOpen: false,
  questionFocus: false,
};

function reducer(state, action) {
  const question = state.questions.at(state.index);

  switch (action.type) {
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correct ? state.points + 1 : state.points,
      };

    case "nextQuestion":
      return {
        ...state,
        index:
          state.index < state.questions.length - 1
            ? state.index + 1
            : state.index,
        answer: null,
        questionFocus: !state.questionFocus,
      };

    case "prevQuestion":
      return {
        ...state,
        index: state.index > 0 ? state.index - 1 : state.index,
        questionFocus: !state.questionFocus,
      };

    case "exitQuiz":
      return { ...state, isModalOpen: true };

    case "continueQuiz":
      return {
        ...state,
        isModalOpen: false,
        status: "active",
        questionFocus: !state.questionFocus,
      };

    default:
      throw new Error("Action unknown");
  }
}

export default function Quiz() {
  const [
    { questions, status, index, answer, isModalOpen, newquestion },
    dispatch,
  ] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const continueQuiz = () => dispatch({ type: "continueQuiz" });

  const exitQuiz = () => {
    navigate("/assessments");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [newquestion]);

  return (
    <section>
      <div className="quiz-questions">
        <NavBarQuiz />

        <div className="quiz-question-body">
          <div className="quiz-question-title">
            <div>
              <p className="bread-crumb">
                <span>Practice quiz / </span>
                <span className="quiz-module-item">
                  EDX 506: Principles of Epidemiology and Public Health
                </span>
              </p>

              <h3>Module 1</h3>
            </div>

            <div className="quiz-skip">
              <span onClick={() => dispatch({ type: "nextQuestion" })}>
                Skip
              </span>
            </div>
          </div>

          <div>
            {status === "loading" && <Loader />}
            {status === "error" && <Error />}
            {status === "active" && (
              <QuizQuestion
                question={questions[index]}
                index={index}
                questions={questions}
                dispatch={dispatch}
                answer={answer}
              />
            )}
          </div>
        </div>
      </div>

      <div className="quiz-footer">
        <div className="quiz-btns-left">
          <button onClick={() => dispatch({ type: "exitQuiz" })}>Exit</button>
        </div>
        <div className="quiz-btns-right">
          {index !== questions.length - 1 ? (
            <div className="quiz-next-prev">
              <button
                className="prev"
                onClick={() => dispatch({ type: "prevQuestion" })}
              >
                Previous
              </button>
              <button
                className="next"
                onClick={() => dispatch({ type: "nextQuestion" })}
                disabled={answer === null}
              >
                Next
              </button>
            </div>
          ) : (
            <button className="submit">Submit</button>
          )}
        </div>

        <ModalCourseModule
          isOpen={isModalOpen}
          ok={exitQuiz}
          cancel={continueQuiz}
          message="Are you sure you want to exit the quiz?"
          okBtn="Yes, please"
          cancelBtn="No, Cancel"
        />
      </div>
    </section>
  );
}
