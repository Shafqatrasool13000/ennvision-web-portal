import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthNavbarStyle } from "./style";
import logo from "../../assets/icons/ic_add_property_payment_wallet.svg";
import profile from "../../assets/icons/ic_profile_placeholder.svg";
import DropDownMenu from "../DropDownMenu/UpgradeAccount";
import plusIcon from "../../assets/icons/ic_add_property_add_photo.svg";
import { useContext } from "react";
import { ContextApiData } from "../../utils/CreateContext";

function AuthNavbar() {
  const { isLoggedIn } = useContext(ContextApiData);
  return (
    <AuthNavbarStyle>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <NavLink to="/">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
          <Navbar.Brand href="#" className="d-lg-none">
            <img src={profile} alt="profile" />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <NavLink className="nav-link" to="/find-home">
                FIND A HOME
              </NavLink>
              <NavLink className="nav-link" to="/property">
                LIST A PROPERTY
              </NavLink>
              <NavLink className="nav-link" to="/find-professionals">
                FIND A PROFESSIONAL
              </NavLink>
              <NavLink className="nav-link" to="/resources">
                RESOURCES
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <div className="d-none d-lg-block navbar-brand pe-auto">
            <div className="d-flex align-items-center">
              {isLoggedIn && (
                <Link to="/create-post" className="mb-4">
                  <img
                    src={plusIcon}
                    className="position-absolute p-1 bg-warning"
                    alt="plus"
                  />
                </Link>
              )}
              <img className="ms-5" src={profile} alt="profile" />
            </div>
            {/* <DropDownMenu>
            </DropDownMenu> */}
          </div>
        </Container>
      </Navbar>
    </AuthNavbarStyle>
  );
}

export default AuthNavbar;
