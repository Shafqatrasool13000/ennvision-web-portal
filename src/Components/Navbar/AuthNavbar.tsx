import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthNavbarStyle } from "./style";
import logo from "../../assets/icons/ic_add_property_payment_wallet.svg";
import profile from "../../assets/icons/ic_profile_placeholder.svg";
import plusIcon from "../../assets/icons/ic_add_property_add_photo.svg";
import { useContext } from "react";
import { ContextApiData } from "../../utils/CreateContext";
import BecomeProfesionalMenu from "../DropDownMenu/BecomeProfessionalMenu";
import UpgradeAccountMenu from "../DropDownMenu/UpgradeAccountMenu";

function AuthNavbar() {
  const {
    isLoggedIn,
    isShowProfessionalOptions,
    setIsShowProfessionalOptions,
    isProfessional,
    setIsShowUpgradeAccountOptions,
    isShowUpgradeAccountOptions,
    isUser,
  } = useContext(ContextApiData);
  console.log({ isShowProfessionalOptions, isShowUpgradeAccountOptions });
  return (
    <AuthNavbarStyle>
      <Navbar expand="lg">
        <Container className="position-relative">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <NavLink to="/">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
          <Navbar.Brand href="#" className="d-lg-none">
            <img
              className="cursor-pointer"
              onClick={() => setIsShowProfessionalOptions((prev) => !prev)}
              src={profile}
              alt="profile"
            />
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
            <div className="d-flex align-items-center position-relative">
              {isLoggedIn && (
                <Link to="/create-post" className="mb-4">
                  <img
                    src={plusIcon}
                    className="position-absolute p-1 bg-warning"
                    alt="plus"
                  />
                </Link>
              )}
              <img
                className="ms-5 cursor-pointer"
                onClick={() =>
                  isUser
                    ? setIsShowProfessionalOptions((prev) => !prev)
                    : setIsShowUpgradeAccountOptions((prev) => !prev)
                }
                src={profile}
                alt="profile"
              />
            </div>
          </div>
          {isLoggedIn && (
            <div
              className={`position-absolute ${
                isShowProfessionalOptions || isShowUpgradeAccountOptions
                  ? "d-block"
                  : "d-none"
              }`}
              style={{
                zIndex: 24,
                top: "100%",
                right: "2%",
              }}
            >
              {isUser ? (
                <BecomeProfesionalMenu />
              ) : isProfessional ? (
                <UpgradeAccountMenu />
              ) : null}
            </div>
          )}
        </Container>
      </Navbar>
    </AuthNavbarStyle>
  );
}

export default AuthNavbar;
