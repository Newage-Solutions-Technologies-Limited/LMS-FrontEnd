import { useState } from "react";
import PropTypes from "prop-types";
import { IoLockOpenOutline, IoLockClosedOutline } from "react-icons/io5";
import "./Accordion.css";

Accordion.propTypes = {
  courses: PropTypes.array,
};

AccordionItem.propTypes = {
  num: PropTypes.number,
  title: PropTypes.string,
  lecturers: PropTypes.array,
};

export default function Accordion({ courses }) {
  return (
    <div className="accordion">
      {courses.map((course, index) => (
        <AccordionItem
          title={course.title}
          text={course.text}
          num={index}
          key={course.title}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, lecturers }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <div
        className={`item ${isOpen ? "open" : ""}`}
        key={num}
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
          <div className="content-box">
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
        className={`item ${isOpen ? "open" : ""}`}
        key={num}
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
          <div className="content-box">
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
