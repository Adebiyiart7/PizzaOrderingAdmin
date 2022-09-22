import "./Layout.css";

const Layout = ({ header, content }) => {
  if (window.location.pathname !== "/") {
    // take user to top of the page when they navigate to another page
    window.scrollTo(0, 0);
  }
  
  return (
    <div className="layout">
      <div>{header}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Layout;
