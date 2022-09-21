import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// LOCAL IMPORTS
import "./Styles.css";
import Spinner from "../../components/spinner/Spinner";
import PageTitle from "../../components/pageTitle/PageTitle";
import { register, reset } from "../../features/auth/authSlice";
import OtherPageLanding from "../../components/otherPageLanding/OtherPageLanding";

const RegisterContent = () => {
  const navigate = useNavigate(); // initialize the navigate hook
  const dispatch = useDispatch(); // initialize the dispatch hook

  // initialize form data with empty strings
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    password2: "",
  });

  // descructure form values
  const { email, password, password2 } = formValues;

  // respond to changes as user types
  const onChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // destructure auth state values user the useSelector hook
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // fire off the useEffect bellow when the auth state values changes
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/");
    }

    dispatch(reset()); // reset auth state
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // validate user passwords and submit
  const onSubmit = (e) => {
    e.preventDefault();

    if (password === password2) {
      let userData = {
        email,
        password,
      };

      dispatch(register(userData)); // register user
    } else {
      toast.error("Passwords do not match!");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <OtherPageLanding title="Register" />
      <Breadcrumbs className="breadcrumbs" aria-label="breadcrumb">
        <Link underline="hover" color="var(--dimBreadCrumbTxt)" to="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          to="/register"
          aria-current="page"
        >
          Register
        </Link>
      </Breadcrumbs>
      <PageTitle text="Create an Account" />
      <form className="auth-form" onSubmit={onSubmit}>
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
            type="submit"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterContent;
