const Headers = ({ title, bgColor, textColor }) => {
  const headingStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headingStyle}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
};

Headers.defaultProps = {
  title: "Feedback",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a9f",
};

export default Headers;
