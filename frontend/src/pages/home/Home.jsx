import React from "react";

// LOCAL IMPORTS
import Layout from "../../layouts/Layout";
import Header from "../../layouts/header/Header";
import Content from "./Content";

const Home = () => {
  return (
    <>
      <Layout header={<Header />} content={<Content />} />
    </>
  );
};

export default Home;
