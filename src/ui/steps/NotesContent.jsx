import { IoAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Steps.css";

export default function NotesContent() {
  const navigate = useNavigate();
  function handleAddClick() {
    navigate("./notes/Quill");
  }

  return (
    <div className="notes-contents">
      <div className="add-note">
        <span className="add-time">
          Add a note at <strong>00:00</strong>
        </span>
        <span>
          <IoAdd
            size={25}
            color="#06a5a6"
            className="add-icon"
            onClick={handleAddClick}
          />
        </span>
      </div>
    </div>
  );
}
