import PropTypes from "prop-types";
import styled from "styled-components";

Button.propTypes = {
  width: PropTypes.number,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverIn: PropTypes.string,
  paddingtb: PropTypes.number,
  paddinglr: PropTypes.number,
  borderRadius: PropTypes.number,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const StyledButton = styled.button`
  width: ${(props) => props.width}%;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: ${(props) => props.paddingtb}px ${(props) => props.paddinglr}px;
  border-radius: ${(props) => props.borderRadius}px;
  text-align: center;
  border: 2px solid ${(props) => props.backgroundColor};
  transition: color 0.3s;
  font-family: "MetaPro Regular", sans-serif;

  &:hover {
    background-color: ${(props) => props.hoverIn};
    border: 2px solid ${(props) => props.hoverIn};
  }
`;

export default function Button({
  children,
  width = 100,
  color = "#000",
  backgroundColor = "#fff",
  fontSize = 16,
  fontWeight = 100,
  paddingtb = 10,
  paddinglr = 0,
  borderRadius = 8,
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
      paddingtb={paddingtb}
      paddinglr={paddinglr}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
