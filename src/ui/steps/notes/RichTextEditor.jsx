import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import "react-quill/dist/quill.snow.css";
import "../Steps.css";

RichTextEditor.propTypes = {
  value: PropTypes.node,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default function RichTextEditor({ value, onChange, placeholder }) {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={RichTextEditor.modules}
      formats={RichTextEditor.formats}
      placeholder={placeholder}
    />
  );
}

RichTextEditor.modules = {
  toolbar: [
    [{ font: [] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

RichTextEditor.formats = [
  "font",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "link",
  "image",
];
