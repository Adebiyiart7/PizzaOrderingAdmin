import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import Header from "../../layouts/header/Header";
import RegisterContent from "./RegisterContent";

const Register = () => {
  const app_name = process.env.REACT_APP_APP_NAME;

  useEffect(() => {
    document.title = `${app_name} | Register`;
  }, [app_name]);

  return (
    <>
      <Layout header={<Header />} content={<RegisterContent />} />
    </>
  );
};

export default Register;
