import PropTypes from "prop-types";
import styled from "styled-components";

Button.propTypes = {
  width: PropTypes.number,
  fontsize: PropTypes.number,
  fontweight: PropTypes.number,
  color: PropTypes.string,
  backgroundcolor: PropTypes.string,
  hoverin: PropTypes.string,
  paddingtb: PropTypes.number,
  paddinglr: PropTypes.number,
  borderradius: PropTypes.number,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const StyledButton = styled.button`
  width: ${(props) => props.width}%;
  font-size: ${(props) => props.fontsize}px;
  font-weight: ${(props) => props.fontweight};
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  padding: ${(props) => props.paddingtb}px ${(props) => props.paddinglr}px;
  border-radius: ${(props) => props.borderradius}px;
  text-align: center;
  border: 2px solid ${(props) => props.backgroundcolor};
  transition: color 0.3s;
  font-family: "MetaPro Regular", sans-serif;

  &:hover {
    background-color: ${(props) => props.hoverin};
    border: 2px solid ${(props) => props.hoverin};
  }
`;

export default function Button({
  children,
  width = 100,
  color = "#000",
  backgroundcolor = "#fff",
  fontsize = 16,
  fontweight = 100,
  paddingtb = 10,
  paddinglr = 0,
  borderradius = 8,
  hoverin,
  onClick,
}) {
  return (
    <StyledButton
      width={width}
      color={color}
      backgroundcolor={backgroundcolor}
      fontsize={fontsize}
      fontweight={fontweight}
      hoverin={hoverin}
      paddingtb={paddingtb}
      paddinglr={paddinglr}
      borderradius={borderradius}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
