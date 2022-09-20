import "./PageTitle.css"

const PageTitle = ({ text }) => {
  return (
    <div className="page-title">
      <h1>{text}</h1>
    </div>
  );
};

export default PageTitle;
