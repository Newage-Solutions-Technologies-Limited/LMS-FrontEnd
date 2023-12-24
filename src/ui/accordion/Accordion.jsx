import { useState } from "react";
import PropTypes from "prop-types";
import { IoLockOpenOutline, IoLockClosedOutline } from "react-icons/io5";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "./Accordion.css";

Accordion.propTypes = {
  selectedCourse: PropTypes.object,
};

AccordionItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  lecturers: PropTypes.array,
  modules: PropTypes.array,
};

export default function Accordion({ selectedCourse }) {
  const { title, lecturers, modules } = selectedCourse;

  return (
    <div className="accordion">
      <AccordionItem title={title} lecturers={lecturers} modules={modules} />
    </div>
  );
}

function AccordionItem({ lecturers, modules }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      {modules.map((module, index) => {
        return (
          <div
            className={`accordion-item ${isOpen ? "accordion-open" : ""} ${
              !module.isAvailable ? "module-disabled" : ""
            }`}
            key={module.id}
            onClick={handleToggle}
          >
            <div>
              <div className="accordion-details">
                <h4>
                  Module {index + 1}: {module.title}
                </h4>

                <div className="accordion-icon">
                  {isOpen ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
                </div>
              </div>

              <div className="accordion-foot">
                <div>
                  <span>{lecturers.length} lectures</span>
                  <span>|</span>
                  <span>55min</span>
                </div>

                <div
                  className={module.isAvailable ? "available" : "unavailable"}
                >
                  <span>
                    {module.isAvailable ? "Available" : "Unavailable"}
                  </span>
                  {module.isAvailable ? (
                    <IoLockOpenOutline />
                  ) : (
                    <IoLockClosedOutline />
                  )}
                </div>
              </div>
            </div>

            {isOpen && (
              <div className="accordion-content-box">
                <p>
                  <span>Lecture 1:</span> Introduction to Epidemiology and
                  Public Health
                </p>

                <p>
                  <span>Lecture 2:</span> Introduction to Epidemiology and
                  Public Health
                </p>

                <p>
                  <span>Lecture 3:</span> Introduction to Epidemiology and
                  Public Health
                </p>

                <p className="module-quiz">
                  Quiz: Introduction to Epidemiology and Public Health
                </p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
