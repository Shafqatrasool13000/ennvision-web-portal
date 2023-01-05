import styled from "styled-components";
import { tertiaryGrey7, whiteColor } from "../GlobalStyle";

const NavbarStyle = styled.div`
  background: transparent;
  width: 100%;
  z-index: 20;
  .navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 200;
  }
  .company-logo {
    width: 164px;
    height: 33px;
  }
  .scroll-navbar {
    background-color: ${whiteColor} !important;
    transition: background-color 200ms linear;
    box-shadow: 0px 0px 3px #00000029;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }
  .active {
    font-family: "EnnVisionsMedium";
  }
  .nav-link {
    color: ${whiteColor} !important;
    font-size: 15px;
    @media screen and (min-width: 991px) {
      &:not(:first-child) {
        margin-left: 27px;
      }
    }
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  .nav-link-dark {
    color: ${tertiaryGrey7} !important;
  }
`;
export default NavbarStyle;

export const AuthNavbarStyle = styled.div`
  background: transparent;
  width: 100%;
  z-index: 20;
  .navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 200;
  }
  .logo {
    height: 33px;
  }
  .navbar {
    background: ${whiteColor};
    box-shadow: 0px 0px 3px #00000029;
  }
  .navbar-toggler:focus {
    box-shadow: none;
  }
  .active {
    font-family: "EnnVisionsMedium";
  }
  .nav-link {
    color: ${tertiaryGrey7} !important;
    font-size: 15px;
    @media screen and (min-width: 991px) {
      &:not(:first-child) {
        margin-left: 27px;
      }
    }
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
