import { useEffect, useState } from "react";
import RichTextEditor from "./RichTextEditor";
import Button from "../../Button";
import PropTypes from "prop-types";

Quill.propTypes = {
  onUpdateNote: PropTypes.func,
  initialContent: PropTypes.string,
};

export default function Quill({ onUpdateNote, initialContent }) {
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  useEffect(() => {
    setContent(initialContent || "");
  }, [initialContent]);

  const stripHtmlTags = (html) => {
    var doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const handleSaveNote = () => {
    const textContent = stripHtmlTags(content);
    onUpdateNote && onUpdateNote(textContent);
  };

  return (
    <div className="quill-content">
      <RichTextEditor value={content} onChange={handleContentChange} />

      <div className="quill-btns">
        <Button
          width={20}
          hoverin="#d6e9e9"
          color="#06a5a6"
          fontsize={14}
          borderradius={12}
          fontweight={900}
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
          onClick={handleSaveNote}
        >
          Save Note
        </Button>
      </div>
    </div>
  );
}
