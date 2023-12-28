import { useEffect, useState } from "react";
import RichTextEditor from "./RichTextEditor";
import Button from "../../Button";
import PropTypes from "prop-types";

Quill.propTypes = {
  onUpdateNote: PropTypes.func,
  onCancelNote: PropTypes.func,
  initialContent: PropTypes.string,
  title1: PropTypes.string,
  title2: PropTypes.string,
  placeholder: PropTypes.string,
};

export default function Quill({
  onUpdateNote,
  onCancelNote,
  initialContent,
  title1 = "",
  title2 = "",
  placeholder,
}) {
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
    if (content) {
      const textContent = stripHtmlTags(content);
      onUpdateNote && onUpdateNote(textContent);

      setContent("");
    }

    return;
  };

  return (
    <div className="quill-content">
      <RichTextEditor
        value={content}
        onChange={handleContentChange}
        placeholder={placeholder}
      />

      <div className="quill-btns">
        {title1 ? (
          <Button
            width={20}
            hoverin="#d6e9e9"
            color="#06a5a6"
            fontsize={14}
            borderradius={12}
            fontweight={900}
            onClick={onCancelNote}
          >
            {title1}
          </Button>
        ) : (
          ""
        )}

        {title2 ? (
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
            {title2}
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
