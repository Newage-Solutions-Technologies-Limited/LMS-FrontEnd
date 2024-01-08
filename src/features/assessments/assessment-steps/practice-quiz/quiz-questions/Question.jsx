/* eslint-disable no-unused-vars */
import { useState } from "react";
import img1 from "../../../../../assets/quiz-img-1.png";
import "../../../Assessments.css";
import { FaCheck } from "react-icons/fa6";

export default function Question() {
  const [selectedOption, setSelectedOption] = useState(false);

  return (
    <div className="quiz-details">
      <h1>Question: 30/30</h1>

      <div className="quiz-question">
        <p>
          An epidemic that becomes unusually widespread and even global in its
          reach is referred to as a/an
        </p>
      </div>

      <div className="quiz-image">
        <img src={img1} alt="question-img" />
      </div>

      <div className="quiz-options">
        <div className="option selected-option correct">
          <div>
            <span className="option-bullet">A</span>
            <span className="option-item">Pandemic</span>
          </div>

          {/* {selectedOption && ( */}
          <span>
            <FaCheck
              size={18}
              color="#008688"
              className="option-correct-icon"
            />
          </span>
          {/* )} */}
        </div>

        <div className="option">
          <div>
            <span className="option-bullet">B</span>
            <span className="option-item">Endemic</span>
          </div>

          {selectedOption && (
            <span>
              <FaCheck
                size={18}
                color="#008688"
                className="option-correct-icon"
              />
            </span>
          )}
        </div>

        <div className="option">
          <div>
            <span className="option-bullet">C</span>
            <span className="option-item">Outbreak</span>
          </div>

          {selectedOption && (
            <span>
              <FaCheck
                size={18}
                color="#008688"
                className="option-correct-icon"
              />
            </span>
          )}
        </div>

        <div className="option">
          <div>
            <span className="option-bullet">D</span>
            <span className="option-item">Epidemic</span>
          </div>

          {selectedOption && (
            <span>
              <FaCheck
                size={18}
                color="#008688"
                className="option-correct-icon"
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
