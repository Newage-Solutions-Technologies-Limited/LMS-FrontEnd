import { useState } from "react";
import PropTypes from "prop-types";
import { IoLockOpenOutline, IoLockClosedOutline } from "react-icons/io5";
import "./Accordion.css";

Accordion.propTypes = {
  selectedCourse: PropTypes.object,
};

AccordionItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  lecturers: PropTypes.array,
};

export default function Accordion({ selectedCourse }) {
  const { title, lecturers } = selectedCourse;

  return (
    <div className="accordion">
      <AccordionItem title={title} lecturers={lecturers} />
    </div>
  );
}

function AccordionItem({ title, lecturers }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <div
        className={`accordion-item ${isOpen ? "accordion-open" : ""}`}
        onClick={handleToggle}
      >
        <h3>Module 1: {title}</h3>
        <div className="module-footer">
          <div className="module-footer-left">
            <span>{lecturers.length} lectures</span>
            <span>|</span>
            <span>55min</span>
          </div>

          <div className="module-footer-right">
            <span>Available</span>
            <IoLockOpenOutline />
          </div>
        </div>

        {isOpen && (
          <div className="accordion-content-box">
            <p>
              <span>Lecture 1:</span> Introduction to Epidemiology and Public
              Health
            </p>

            <p>
              <span>Lecture 2:</span> Introduction to Epidemiology and Public
              Health
            </p>

            <p>
              <span>Lecture 3:</span> Introduction to Epidemiology and Public
              Health
            </p>

            <p className="module-quiz">
              Quiz: Introduction to Epidemiology and Public Health
            </p>
          </div>
        )}
      </div>

      {/* Module 2 */}
      <div
        className={`accordion-item ${isOpen ? "accordion-open" : ""}`}
        onClick={handleToggle}
      >
        <h3>Module 2: {title}</h3>
        <div className="module-footer">
          <div className="module-footer-left">
            <span>{lecturers.length} lectures</span>
            <span>|</span>
            <span>55min</span>
          </div>

          <div className="module-footer-right">
            <span>Unavailable</span>
            <IoLockClosedOutline />
          </div>
        </div>

        {isOpen && (
          <div className="accordion-content-box">
            <p>
              <span>Lecture 1:</span> Introduction to Epidemiology and Public
              Health
            </p>

            <p>
              <span>Lecture 2:</span> Introduction to Epidemiology and Public
              Health
            </p>

            <p>
              <span>Lecture 3:</span> Introduction to Epidemiology and Public
              Health
            </p>

            <p className="module-quiz">
              Quiz: Introduction to Epidemiology and Public Health
            </p>
          </div>
        )}
      </div>
    </>
  );
}
