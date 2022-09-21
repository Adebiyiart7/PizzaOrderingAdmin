import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import Header from "../../layouts/header/Header";
import LoginContent from "./LoginContent";

const Login = () => {
  const app_name = process.env.REACT_APP_APP_NAME;

  useEffect(() => {
    document.title = `${app_name} | Login`;
  }, [app_name]);

  return (
    <>
      <Layout header={<Header />} content={<LoginContent />} />
    </>
  );
};

export default Login;
