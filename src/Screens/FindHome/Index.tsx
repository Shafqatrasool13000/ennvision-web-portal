import React from 'react';
import { FindHomeStyled } from './style';
import AuthNavbar from '../../Components/Navbar/AuthNavbar';
import Properties from '../Home/Properties';
import { Container } from 'react-bootstrap';
import SocialFooter from '../../Components/SocialFooter/SocialFooter';
import Filters from './Filters';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
     <Helmet>
    <title>Find Home</title>
    </Helmet>
    <FindHomeStyled>
    <AuthNavbar/>
    <SocialFooter/>
    <Container>
    <Filters/>
    <div style={{
      height: '340px',
      backgroundColor: 'rgb(255 0 0 / 20%)'
    }}/>
    <Properties/>
    </Container>
    </FindHomeStyled>
      </>
  )
}

export default Index