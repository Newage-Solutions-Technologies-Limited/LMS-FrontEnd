/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../../courses/CoursesData";
import GridPracticeQuiz from "./GridPracticeQuiz";
import { FaListUl } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { PiSortAscendingBold } from "react-icons/pi";
import "../../Assessments.css";
import ListPracticeQuiz from "./ListPracticeQuiz";

export default function PracticeQuiz() {
  const [sortOrder, setSortOrder] = useState("asc");
  const { courseTitle } = useParams();
  const selectedCourse = courses.find((course) => course.title === courseTitle);
  const { modules } = selectedCourse;
  const [toggleView, setToggleView] = useState(false);

  function handleViewType() {
    setToggleView((prev) => !prev);
  }

  function handleToggleSortOrder() {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  const sortedModules = modules.slice().sort((a, b) => {
    return sortOrder === "asc"
      ? b.isAvailable - a.isAvailable
      : a.isAvailable - b.isAvailable;
  });

  return (
    <>
      <div className="assessment-steps">
        <div className="practice-notice">
          <IoInformationCircleOutline size={22} color="#008688" />
          <h4>
            <span>Note:</span> The scores obtained in these quizzes are intended
            to serve as an indication of your current understanding and are not
            to be considered as official assessments.
          </h4>
        </div>

        <div className="my-assessments">
          <div className="my-classes">
            <h4>Choose a module to start</h4>

            <div className="session">
              <div
                className={`session-icon ${toggleView ? "active" : ""}`}
                onClick={handleViewType}
              >
                <FaListUl size={18} color="#405855" />
              </div>

              <div
                className="session-icon session-sort"
                onClick={handleToggleSortOrder}
              >
                <span>Sort</span>
                <span>
                  <PiSortAscendingBold size={18} color="#405855" />
                </span>
              </div>
            </div>
          </div>

          {!toggleView ? (
            <GridPracticeQuiz
              selectedCourse={selectedCourse}
              sortedModules={sortedModules}
            />
          ) : (
            <ListPracticeQuiz
              selectedCourse={selectedCourse}
              sortedModules={sortedModules}
            />
          )}
        </div>
      </div>
    </>
  );
}
