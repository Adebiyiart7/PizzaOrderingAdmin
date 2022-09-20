const PageTitle = ({ text, margin = "40px 0 10px 0" }) => {
  return (
    <h1
      style={{
        fontSize: "2em",
        webkitTextStroke: "medium",
        textTransform: "uppercase",
        color: "var(--primaryText)",
        textAlign: "center",
        margin: margin,
      }}
    >
      {text}
    </h1>
  );
};

export default PageTitle;
