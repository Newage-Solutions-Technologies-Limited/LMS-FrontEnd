import PropTypes from "prop-types";
import Button from "../Button";
import "./Modal.css";

ModalCourseModule.propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  cancel: PropTypes.func,
  okBtn: PropTypes.string,
  cancelBtn: PropTypes.string,
  ok: PropTypes.func,
};

export default function ModalCourseModule({
  isOpen,
  cancel,
  ok,
  message,
  okBtn,
  cancelBtn,
}) {
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

        <p>{message}</p>

        <div className="course-modal-btns">
          <Button
            width={25}
            hoverin="#d6e9e9"
            color="#06a5a6"
            fontsize={14}
            borderradius={12}
            fontweight={900}
            onClick={cancel}
          >
            {cancelBtn}
          </Button>

          <Button
            width={25}
            fontweight={500}
            color="#dde1e6"
            backgroundcolor="#008688"
            hoverin="#1c9c9e"
            borderradius={12}
            fontsize={14}
            onClick={ok}
          >
            {okBtn}
          </Button>
        </div>
      </div>
    </div>
  );
}
