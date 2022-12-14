import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import { GiFullPizza, GiSandwich, GiWineGlass } from "react-icons/gi";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { MdMenu } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

// LOCAL IMPORTS
import logo from "../../assets/images/logo.png";
import "./Header.css";
import Cart from "./Cart";
import { logout, reset } from "../../features/auth/authSlice";
import { setProductQuery } from "../../features/products/productSlice";
import { setDisplayMenuBar } from "../../features/app/appSlice";

const HideOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Menu = ({ children, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
};

const HideAppBar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { displayMenuBar } = useSelector((state) => state.app);

  const [showListItems, setShowListItems] = useState(true);
  const onClickHamburger = () => {
    let el1 = document.querySelector(".top-nav-list-items");
    let el2 = document.querySelector(".top-nav-auth-items");
    if (showListItems) {
      el1.style.display = "block";
      el2.style.display = "block";
      setShowListItems(false);
    } else {
      el1.style.display = "none";
      el2.style.display = "none";
      setShowListItems(true);
    }
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const setFilter = (filter) => {
    dispatch(setProductQuery(`?category=${filter}`));
  };

  let showMenuBar = "initial";
  const showOrHideMenuBar = () => {
    const current_pathname = window.location.pathname;
    const pathnames = ["/"];

    if (pathnames.includes(current_pathname)) {
      dispatch(setDisplayMenuBar(true));
    } else {
      dispatch(setDisplayMenuBar(false));
    }

    if (displayMenuBar === false) {
      showMenuBar = "none";
    }
  };
  showOrHideMenuBar();

  let cartCount = 0;

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          elevation={0}
          sx={{ backgroundColor: "var(--tranparentBlack)" }}
        >
          <div className="top-nav-container">
            <nav className="top-nav">
              <div className="top-nav-left">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
                <ul className="top-nav-list-items">
                  <Link to="/">
                    <li className="list-item">Home</li>
                  </Link>
                  <Link to="/shop">
                    <li className="list-item">Order</li>
                  </Link>
                  <Link to="/about">
                    <li className="list-item">About</li>
                  </Link>
                  <Link to="/cart">
                    <li className="list-item">Contact</li>
                  </Link>
                </ul>
              </div>
              <div className="top-nav-right">
                <ul className="top-nav-auth-items">
                  {user ? (
                    <>
                      <Link className="logout" to="/login" onClick={onLogout}>
                        <li className="list-item">Logout</li>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <li className="list-item">Login</li>
                      </Link>
                      <Link to="/register">
                        <li className="list-item">Register</li>
                      </Link>
                    </>
                  )}
                </ul>
                {cartCount > 0 && (
                  <Link className="cart" to="/cart">
                    <Cart count={cartCount} />
                  </Link>
                )}
                <span className="hamburger" onClick={onClickHamburger}>
                  <MdMenu size={30} color="var(--primaryYellow)" />
                </span>
              </div>
            </nav>
          </div>
        </AppBar>
      </HideOnScroll>
      <Menu {...props}>
        <AppBar
          elevation={0}
          sx={{
            width: "100vw",
            backgroundColor: "var(--tranparentBlack)",
            display: showMenuBar,
          }}
        >
          <div>
            <nav className="top-nav-menu">
              <ul>
                <li
                  onClick={() => {
                    setFilter("pizza");
                  }}
                  className="list-item"
                >
                  <GiFullPizza size="1em" />
                  <span className="menu-item-text">&nbsp;&nbsp;Pizza</span>
                </li>
                <li
                  onClick={() => {
                    setFilter("burger");
                  }}
                  className="list-item"
                >
                  <LunchDiningOutlinedIcon fontSize="inherit" />
                  <span className="menu-item-text burgers">
                    &nbsp;&nbsp;Burgers
                  </span>
                </li>
                <li
                  onClick={() => {
                    setFilter("dessert");
                  }}
                  className="list-item"
                >
                  <CookieOutlinedIcon fontSize="inherit" />
                  <span className="menu-item-text desserts">
                    &nbsp;&nbsp;Desserts
                  </span>
                </li>
                <li
                  onClick={() => {
                    setFilter("sandwich");
                  }}
                  className="list-item"
                >
                  <GiSandwich size="1em" />
                  <span className="menu-item-text">&nbsp;&nbsp;Sandwiches</span>
                </li>
                <li
                  onClick={() => {
                    setFilter("drink");
                  }}
                  className="list-item"
                >
                  <GiWineGlass size="1em" />
                  <span className="menu-item-text">&nbsp;&nbsp;Drinks</span>
                </li>
              </ul>
            </nav>
          </div>
        </AppBar>
      </Menu>
    </>
  );
};

export default HideAppBar;
