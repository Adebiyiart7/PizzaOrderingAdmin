import { useState } from "react";
import { Link } from "react-router-dom";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import { GiFullPizza, GiSandwich, GiWineGlass } from "react-icons/gi";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { MdMenu } from "react-icons/md";

// LOCAL IMPORTS
import logo from "../../assets/images/logo.png";
import "./Header.css";
import Cart from "./Cart";

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
                  <Link to="/login">
                    <li className="list-item">Login</li>
                  </Link>
                  <Link to="/register">
                    <li className="list-item">Register</li>
                  </Link>
                </ul>

                <Link className="cart" to="/cart">
                  <Cart />
                </Link>
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
          sx={{ width: "100vw", backgroundColor: "var(--tranparentBlack)" }}
        >
          <div>
            <nav className="top-nav-menu">
              <ul>
                <li
                  style={{ backgroundColor: "var(--primaryColor)" }}
                  className="list-item"
                >
                  <GiFullPizza size="1em" />
                  <span className="menu-item-text">&nbsp;&nbsp;Pizza</span>
                </li>
                <li className="list-item">
                  <LunchDiningOutlinedIcon fontSize="inherit" />
                  <span className="menu-item-text burgers">
                    &nbsp;&nbsp;Burgers
                  </span>
                </li>
                <li className="list-item">
                  <CookieOutlinedIcon fontSize="inherit" />
                  <span className="menu-item-text desserts">
                    &nbsp;&nbsp;Desserts
                  </span>
                </li>
                <li className="list-item">
                  <GiSandwich size="1em" />
                  <span className="menu-item-text">&nbsp;&nbsp;Sandwiches</span>
                </li>
                <li className="list-item">
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
