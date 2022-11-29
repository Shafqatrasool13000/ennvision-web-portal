import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import AppBar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import NavbarStyle from "./style";
import logo from "../../assets/icons/ic_logo2.svg";
import logo1 from "../../assets/icons/ic_logo.svg";
import profile from "../../assets/icons/ic_profile_placeholder.svg";

function Navbar() {
  const [changeNavColor, setChangeNavColor] = useState(false);
  const navColorHandler = () => {
    if (window.scrollY >= 80) {
      setChangeNavColor(true);
    } else {
      setChangeNavColor(false);
    }
  };
  window.addEventListener("scroll", navColorHandler);

  return (
    <NavbarStyle>
      <AppBar
        className={changeNavColor ? "scroll-navbar" : ""}
        expand="lg"
        fixed="top"
      >
        <Container>
          <AppBar.Toggle aria-controls="navbarScroll" />
          <NavLink to="/">
            <img
              className="company-logo"
              src={changeNavColor ? logo1 : logo}
              alt="logo"
            />
          </NavLink>
          <AppBar.Brand href="#" className="d-lg-none">
            <img src={profile} alt="profile" />
          </AppBar.Brand>
          <AppBar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <NavLink
                className={
                  changeNavColor ? "nav-link nav-link-dark" : "nav-link"
                }
                to="/find-home"
              >
                FIND A HOME
              </NavLink>
              <NavLink
                className={
                  changeNavColor ? "nav-link nav-link-dark" : "nav-link"
                }
                to="/property"
              >
                LIST A PROPERTY
              </NavLink>
              <NavLink
                className={
                  changeNavColor ? "nav-link nav-link-dark" : "nav-link"
                }
                to="/find-professionals"
              >
                FIND A PROFESSIONAL
              </NavLink>
              <NavLink
                className={
                  changeNavColor ? "nav-link nav-link-dark" : "nav-link"
                }
                to="/resources"
              >
                RESOURCES
              </NavLink>
            </Nav>
          </AppBar.Collapse>
          <AppBar.Brand href="#" className="d-none d-lg-block">
            <img src={profile} alt="profile" />
          </AppBar.Brand>
        </Container>
      </AppBar>
    </NavbarStyle>
  );
}

export default Navbar;
