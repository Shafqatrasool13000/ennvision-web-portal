import React from 'react'
import { SecondaryHeading, TertiraryHeadingMini, UnderlineRed } from '../../Components/GlobalStyle'
import { FindProfessionalStyled } from './style';
import property1 from '../../assets/Image/ic_property_1.png';
import property2 from '../../assets/Image/ic_property_2.png';
import property3 from '../../assets/Image/ic_property_3.png';
// import property4 from '../../assets/Image/ic_property_4.png';
// import property5 from '../../assets/Image/ic_property_5.png';
// import property6 from '../../assets/Image/ic_property_6.png';
import { Col, Container, Row } from 'react-bootstrap';
import ViewMore from '../../Components/ViewMoreProperties/Index';

const FindProfessional = () => {
  return (
    <FindProfessionalStyled>
      <SecondaryHeading className='text-center'>Find a Professionals</SecondaryHeading>
      <TertiraryHeadingMini className='text-center'>Search For A Qualified Professional In Your Area</TertiraryHeadingMini>
      <UnderlineRed />
      <Container>
        <div className="areas">
        <Row className="areas-inner">
        <Col md={8}>
          <div className="area-container">
          <img src={property1} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Toronto</div>
          </div>
          </div>
        </Col>
        <Col md={4}>
        <div className="area-container mt-3 mt-md-0">
          <img src={property2} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text text-small">Calgaty</div>
          </div>
          </div>
          <div className="area-container mt-3">
          <img src={property3} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text text-small">Quebec City</div>
          </div>
          </div>
        </Col>
        
      </Row>
      <Row className="areas-inner">
       
        <Col>
        <div className="area-container">
          <img src={property2} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text text-small">Montreal</div>
          </div>
          </div>
          <div className="area-container mt-3">
          <img src={property3} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text text-small">Moncton</div>
          </div>
          </div>
        </Col>
        <Col md={8}>
          <div className="area-container mt-3 mt-md-0">
          <img src={property1} alt="Avatar" className="image" />
          <div className="overlay">
            <div className="text">Ottawa</div>
          </div>
          </div>
        </Col>
      </Row>
      <ViewMore/>
        </div>
      </Container>
    </FindProfessionalStyled>
  )
}

export default FindProfessional