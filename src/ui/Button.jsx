import PropTypes from "prop-types";

Button.propTypes = {
  width: PropTypes.number,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default function Button({
  children,
  width = 100,
  color = "#fff",
  bgColor = "#eee",
  fontSize = 16,
  fontWeight = 100,
  onClick,
}) {
  const btnStyle = {
    width: `${width}%`,
    fontSize: `${fontSize}px`,
    fontWeight,
    backgroundColor: bgColor,
    color,
    padding: "10px 0",
    borderRadius: "8px",
    textAlign: "center",
    border: `2px solid ${bgColor}`,
  };

  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}
