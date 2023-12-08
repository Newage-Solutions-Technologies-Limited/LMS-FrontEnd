import PropTypes from "prop-types";
import styled from "styled-components";

Button.propTypes = {
  width: PropTypes.number,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverIn: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const StyledButton = styled.button`
  width: ${(props) => props.width}%;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: 10px 0;
  border-radius: 8px;
  text-align: center;
  border: 2px solid ${(props) => props.backgroundColor};
  transition: color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverIn};
  }
`;

export default function Button({
  children,
  width = 100,
  color = "#fff",
  backgroundColor = "#000",
  fontSize = 16,
  fontWeight = 100,
  hoverIn,
  onClick,
}) {
  return (
    <StyledButton
      width={width}
      color={color}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      hoverIn={hoverIn}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

// const btnStyle = {
//   width: `${width}%`,
//   fontSize: `${fontSize}px`,
//   fontWeight,
//   backgroundColor,
//   color,
//   padding: "10px 0",
//   borderRadius: "8px",
//   textAlign: "center",
//   border: `2px solid ${backgroundColor}`,
// };
