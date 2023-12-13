import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import Button from "../Button";
import "./Modal.css";

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  // children: PropTypes.node.isRequired,
};

export default function Modal({ isOpen, onClose }) {
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

  const navigate = useNavigate();
  return (
    <div className={`modal ${isOpen ? "open" : "closed"}`} onClick={onClose}>
      <div
        className={`modal-content modal-content ${isOpen ? "open" : ""}`}
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`modal-icon modal-icon ${isOpen ? "open" : ""}`}
          style={modalStyle}
        >
          <FaCircleCheck color="#008688" size={80} />
        </div>

        <h2>
          Welcome back! You are now <br />
          logged in.
        </h2>

        <Button
          width={50}
          fontweight={600}
          fontsize={18}
          paddingtb={16}
          paddinglr={13}
          borderradius={14}
          color="#F3F4F6"
          backgroundcolor="#008688"
          hoverin="#1c9c9e"
          onClick={() => navigate("/dashboard")}
        >
          Proceed To Dashboard
        </Button>
      </div>
    </div>
  );
}
