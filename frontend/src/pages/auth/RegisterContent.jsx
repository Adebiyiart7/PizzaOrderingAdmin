import { useState } from "react";
import TextField from "@mui/material/TextField";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

// LOCAL IMPORTS
import OtherPageLanding from "../../components/otherPageLanding/OtherPageLanding";
import PageTitle from "../../components/pageTitle/PageTitle";
import "./Styles.css";

const RegisterContent = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formValues;

  const onChange = (e) => {
    setFormValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };
  
  return (
    <div>
      <OtherPageLanding title="Register" />
      <Breadcrumbs className="breadcrumbs" aria-label="breadcrumb">
        <Link underline="hover" color="var(--dimBreadCrumbTxt)" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/register"
          aria-current="page"
        >
          Register
        </Link>
      </Breadcrumbs>
      <PageTitle text="Create an Account" />
      <form className="auth-form">
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <TextField
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
            label="Email"
            size="small"
          />
        </div>
        <div>
          <label className="label" htmlFor="password">
            Password
          </label>
          <TextField
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
            label="Password"
            size="small"
          />
        </div>
        <div>
          <label className="label" htmlFor="password2">
            Confirm password
          </label>
          <TextField
            type="password"
            name="password2"
            value={password2}
            placeholder="Confirm password"
            onChange={onChange}
            label="Confirm Password"
            size="small"
          />
        </div>
        <div className="other-auth-actions">
          <Link to="/login">Login</Link>
          <Link to="/forget-password">Forget Password</Link>
        </div>
        <div>
          <Button
            sx={{ backgroundColor: "var(--primaryColor)" }}
            variant="contained"
            className="button"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterContent;
