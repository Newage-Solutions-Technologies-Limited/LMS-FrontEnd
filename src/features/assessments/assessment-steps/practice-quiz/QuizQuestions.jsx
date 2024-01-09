/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../../courses/CoursesData";
import { quiz } from "./quiz-questions/QuizData";
import NavBarQuiz from "../../../../ui/navbar/NavbarQuiz";
import Question from "./quiz-questions/Question";
import "../../Assessments.css";

function QuizQuestions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState(false);
  const { courseTitle } = useParams();
  const selectedCourse = courses.find((course) => course.title === courseTitle);
  // console.log(selectedCourse);

  function handleNext() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  function handlePrevious() {
    setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  }

  function handleSkip() {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(quiz.length - 1, prevIndex + 1)
    );
  }

  const currentQuestion = quiz[currentQuestionIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <section>
      <div className="quiz-questions">
        <NavBarQuiz onSkipQuestion={handleSkip} />

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
              <span
                onClick={handleSkip}
                disabled={currentQuestionIndex === quiz.length - 1}
              >
                Skip
              </span>
            </div>
          </div>

          <div>
            <Question
              index={currentQuestionIndex}
              question={currentQuestion}
              quiz={quiz}
            />
          </div>
        </div>
      </div>

      <div className="quiz-footer">
        <div className="quiz-btns-left">
          <button>Exit</button>
        </div>
        <div className="quiz-btns-right">
          {!completedQuestions ? (
            <div className="quiz-next-prev">
              <button
                className="prev"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                className="next"
                onClick={handleNext}
                disabled={currentQuestionIndex === quiz.length - 1}
              >
                Next
              </button>
            </div>
          ) : (
            <button className="next">Submit</button>
          )}
        </div>
      </div>
    </section>
  );
}

export default QuizQuestions;
