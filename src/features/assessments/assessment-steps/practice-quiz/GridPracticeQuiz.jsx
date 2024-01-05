import { useState } from "react";
import PropTypes from "prop-types";
import { IoLockOpenOutline, IoLockClosedOutline } from "react-icons/io5";
import ModalPracticeQuiz from "../../../../ui/modal/ModalPracticeQuiz";
import "../../Assessments.css";

GridPracticeQuiz.propTypes = {
  sortedModules: PropTypes.array,
  selectedCourse: PropTypes.object,
};

export default function GridPracticeQuiz({ sortedModules, selectedCourse }) {
  const { lecturers, img } = selectedCourse;
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  const openModal = (module) => {
    setSelectedModule(module);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedModule(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="all-assessments">
        {sortedModules.map((module, index) => {
          const { title, isAvailable } = module;

          return (
            <div
              className={`courses-card ${!isAvailable ? "unavailable" : ""}`}
              key={index}
            >
              <div className="course-image">
                <img src={img} alt="course-name" />
              </div>

              {!isAvailable ? (
                <div className="unavailable-overlay">
                  <span className="unavailable-text">
                    Unlock this quiz by completing the preceding modules.
                  </span>
                </div>
              ) : (
                ""
              )}

              <div className="course-details">
                <h1 className="course-title">
                  Module {index + 1}: {title}
                </h1>

                <span className="lecturers">
                  <span className="course-label">Lecturers:</span>
                  <span className="value">
                    {lecturers[0]} & {lecturers.length - 1} other
                    {lecturers.length - 1 > 1 ? "s" : ""}
                  </span>
                </span>

                <span className="course-units">
                  <span className="course-label">No. of Questions:</span>
                  <span className="value">50</span>
                </span>

                <span className="course-resources">
                  <span className="course-label">Availability:</span>
                  <span className="value">
                    {isAvailable && (
                      <>
                        Opened <IoLockOpenOutline />
                      </>
                    )}
                    {!isAvailable && (
                      <>
                        Locked <IoLockClosedOutline />
                      </>
                    )}
                  </span>
                </span>
              </div>
              <button
                onClick={() =>
                  openModal({ module, index, parentObject: selectedCourse })
                }
                className={isAvailable ? "btn-on" : "btn-off"}
              >
                Start Quiz
              </button>

              <ModalPracticeQuiz
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedModule={selectedModule}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
