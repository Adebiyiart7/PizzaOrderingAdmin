// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import { GiFullPizza, GiSandwich, GiWineGlass } from "react-icons/gi";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

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
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar elevation={0} sx={{ backgroundColor: "#050505CC" }}>
          <Container>
            <nav className="top-nav">
              <div className="top-nav-left">
                <img height={100} width={100} src={logo} alt="Logo" />
                <ul>
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
                <ul>
                  <Link to="/login">
                    <li className="list-item">Login</li>
                  </Link>
                  <Link to="/register">
                    <li className="list-item">Register</li>
                  </Link>
                  <Link className="cart" to="/cart">
                    <li className="list-item">Cart(0): $0</li>
                  </Link>
                </ul>
              </div>
            </nav>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Menu {...props}>
        <AppBar elevation={0} sx={{ backgroundColor: "#050505CC" }}>
          <Container>
            <nav className="top-nav-menu">
              <ul>
                <li
                  style={{ backgroundColor: "#E60000" }}
                  className="list-item"
                >
                  <GiFullPizza size={30} />
                  <span className="menu-item-text">&nbsp;&nbsp;Pizza</span>
                </li>
                <li className="list-item">
                  <span style={{ fontSize: 30 }}>
                    <LunchDiningOutlinedIcon fontSize="inherit" />
                  </span>
                  <span className="menu-item-text">&nbsp;&nbsp;Burgers</span>
                </li>
                <li className="list-item">
                  <span style={{ fontSize: 30 }}>
                    <CookieOutlinedIcon fontSize="inherit" />
                  </span>
                  <span className="menu-item-text">&nbsp;&nbsp;Desserts</span>
                </li>
                <li className="list-item">
                  <GiSandwich size={30} />
                  <span className="menu-item-text">&nbsp;&nbsp;Sandwiches</span>
                </li>
                <li className="list-item">
                  <GiWineGlass size={30} />
                  <span className="menu-item-text">&nbsp;&nbsp;Drinks</span>
                </li>
              </ul>
            </nav>
          </Container>
        </AppBar>
      </Menu>
    </>
  );
};

export default HideAppBar;
