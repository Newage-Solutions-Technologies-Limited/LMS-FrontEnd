/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropTypes from "prop-types";
import { IoLockOpenOutline, IoLockClosedOutline } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import "../../Assessments.css";
import ModalPracticeQuiz from "../../../../ui/modal/ModalPracticeQuiz";

ListPracticeQuiz.propTypes = {
  sortedModules: PropTypes.array,
  selectedCourse: PropTypes.object,
};

export default function ListPracticeQuiz({ sortedModules, selectedCourse }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
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

  const toggleTooltip = () => {
    setTooltipVisible(!tooltipVisible);
  };

  const today = new Date();
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthOfYear = monthsOfYear[today.getMonth()];
  const dayOfMonth = today.getDate();
  const year = today.getFullYear();

  const formattedDate = `${dayOfMonth} - ${monthOfYear} - ${year}`;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Module No.</th>
            <th>Module Title</th>
            <th>No. of Questions</th>
            <th>Date</th>
            <th>
              <span
                className={`availability-icon ${
                  tooltipVisible ? "tooltip-visible" : ""
                }`}
              >
                Availability{" "}
                <FaCircleInfo
                  size={16}
                  onMouseEnter={toggleTooltip}
                  onMouseLeave={toggleTooltip}
                  onClick={toggleTooltip}
                />
                <span className="tooltip">
                  {tooltipVisible ? (
                    <>
                      <h4>Module Availability</h4>
                      <p>
                        Note: Unlock the quiz by completing the preceding
                        modules.
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                </span>
              </span>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedModules.map((module, index) => {
            const { title, isAvailable } = module;

            return (
              <tr
                key={index}
                className={`courses-card ${
                  !isAvailable ? "unavailable" : "available"
                }`}
              >
                <td>
                  <strong>Module {index + 1}</strong>
                </td>
                <td>
                  <strong>{title}</strong>
                </td>
                <td>50</td> <td>{formattedDate}</td>
                {/* Example value, replace with actual number of questions */}
                <td className={isAvailable ? "available" : "unavailable"}>
                  {isAvailable ? (
                    <span>
                      Opened <IoLockOpenOutline />
                    </span>
                  ) : (
                    <span>
                      Locked <IoLockClosedOutline />
                    </span>
                  )}
                </td>
                <td>
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
