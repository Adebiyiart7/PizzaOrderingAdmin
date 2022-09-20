import "./Layout.css"

const Layout = ({ header, content }) => {
  return (
    <div className="layout">
      <div>{header}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Layout;
