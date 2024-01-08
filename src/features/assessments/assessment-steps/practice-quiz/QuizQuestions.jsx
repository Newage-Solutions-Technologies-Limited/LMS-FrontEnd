import NavBarQuiz from "../../../../ui/navbar/NavbarQuiz";
import { useParams } from "react-router-dom";
import { courses } from "../../../courses/CoursesData";
import "../../Assessments.css";
import Question from "./quiz-questions/Question";
import { useEffect } from "react";

function QuizQuestions() {
  const { courseTitle } = useParams();
  const selectedCourse = courses.find((course) => course.title === courseTitle);
  console.log(selectedCourse);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
              <span>Skip</span>
            </div>
          </div>

          <div>
            <Question />
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuizQuestions;
