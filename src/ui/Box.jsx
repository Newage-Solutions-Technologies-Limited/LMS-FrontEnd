import PropTypes from "prop-types";

Box.propTypes = {
  description: PropTypes.string,
  total: PropTypes.string,
};

export default function Box({ description, total }) {
  const boxStyle = {
    border: "1px solid #DDE1E6",
    width: "100%",
    padding: "1px 15px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
  };

  const descStyle = {
    color: "#697077",
  };

  const boxDesc = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const span = {
    width: "5vw",
    height: "10vh",
    border: "1px solid #D9D9D9",
    backgroundColor: "#D9D9D9",
  };

  return (
    <div style={boxStyle}>
      <div>
        <h5 style={descStyle}>{description}</h5>
        <h3>{total}</h3>
      </div>

      <div style={boxDesc}>
        <span style={span}></span>
      </div>
    </div>
  );
}
