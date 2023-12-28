import PropTypes from "prop-types";
import Button from "../Button";
import "./Modal.css";

Modal.propTypes = {
  index: PropTypes.number,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
};

export default function Modal({ isOpen, onClose, onDelete, index }) {
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div className={`modal ${isOpen ? "open" : "closed"}`}>
      <div
        className={`modal-content modal-content ${isOpen ? "open" : ""}`}
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Please Confirm</h2>

        <p>Are you sure you want to delete this note?</p>

        <div className="course-modal-btns">
          <Button
            width={20}
            hoverin="#d6e9e9"
            color="#06a5a6"
            fontsize={14}
            borderradius={12}
            fontweight={900}
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            width={20}
            fontweight={500}
            color="#dde1e6"
            backgroundcolor="#008688"
            hoverin="#1c9c9e"
            borderradius={12}
            fontsize={14}
            onClick={() => onDelete(index)}
          >
            Yes, please
          </Button>
        </div>
      </div>
    </div>
  );
}
