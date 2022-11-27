import React from "react";
import { FindHomeStyled } from "./style";
import AuthNavbar from "../../Components/Navbar/AuthNavbar";
import Properties from "../Home/Properties";
import { Container } from "react-bootstrap";
import SocialFooter from "../../Components/SocialFooter/SocialFooter";
import Filters from "./Filters";
import { Helmet } from "react-helmet";
import MapBox from "../../Components/MapBox/Index";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Find Home</title>
      </Helmet>
      <FindHomeStyled>
        <AuthNavbar />
        <SocialFooter />
        <Container>
          <Filters />
          <MapBox width="1320px" height="347px" />

          <Properties />
        </Container>
      </FindHomeStyled>
    </>
  );
};

export default Index;
