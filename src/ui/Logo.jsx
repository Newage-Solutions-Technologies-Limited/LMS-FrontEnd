import PropTypes from "prop-types";

Logo.propTypes = {
  width: PropTypes.number,
  margin: PropTypes.number,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
};

export default function Logo({
  width = 200,
  margin = 20,
  imageUrl,
  imageAlt = "logo",
}) {
  const logoStyle = {
    marginBottom: `${margin}px`,
  };

  return (
    <header style={logoStyle}>
      <img src={imageUrl} alt={imageAlt} width={`${width}px`} />
    </header>
  );
}
