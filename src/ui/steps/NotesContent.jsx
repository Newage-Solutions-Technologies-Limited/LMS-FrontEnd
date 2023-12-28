import { useState } from "react";
import Quill from "./notes/Quill";
import { IoAdd } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import "./Steps.css";

export default function NotesContent() {
  const [isQuillVisible, setIsQuillVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  // const [noteContent, setNoteContent] = useState("");

  function handleAddClick() {
    setIsQuillVisible(true);
    setEditingIndex(null);
  }

  function updateNoteContent(content) {
    if (editingIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = content;
      setNotes(updatedNotes);
    } else {
      setNotes([content, ...notes]);
    }

    setIsQuillVisible(false);
    setEditingIndex(null);
  }

  function handleEditNote(index) {
    setIsQuillVisible(true);
    setEditingIndex(index);
  }

  function handleDeleteNote(index) {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  }

  return (
    <div className="notes-contents">
      {!isQuillVisible && (
        <>
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

          {notes.length > 0 ? (
            <div className="previous-notes">
              <h4>Previous Notes</h4>
              {notes.map((note, index) => (
                <div key={index} className="created-note">
                  <div className="note-details">
                    <p className="note-time">
                      <span>5:30</span>
                    </p>
                    <div className="note-reminder">
                      <div className="note-reminder-header">
                        <p className="note-title">
                          Introduction to Epidemiology and Public Health
                        </p>

                        <span className="note-edit-delete">
                          <MdEdit
                            color="#008688"
                            size={20}
                            onClick={() => handleEditNote(index)}
                          />
                          <MdDelete
                            color="#008688"
                            size={20}
                            className="note-delete"
                            onClick={() => handleDeleteNote(index)}
                          />
                        </span>
                      </div>

                      <div className="note-created">
                        <p>{note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-notes">
              <h4>Nothing here for now!</h4>
              <p>Click the &quot;+&quot; button to create a new note</p>
            </div>
          )}
        </>
      )}

      {isQuillVisible && (
        <Quill
          initialContent={editingIndex !== null ? notes[editingIndex] : ""}
          onUpdateNote={updateNoteContent}
        />
      )}
    </div>
  );
}
