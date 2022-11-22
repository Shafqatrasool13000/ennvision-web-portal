import React from 'react';
import { Col,Row } from 'react-bootstrap';
import { ExplorePropertyStyled } from './style';
import ic_image_2 from '../../assets/Image/ic_image_2.png';
import { BlackDot, SecondaryHeading, TertiaryHeading, TertiraryHeadingMini, UnderlineRed } from '../../Components/GlobalStyle';
const ExploreProperty = () => {
  return (
   
    <ExplorePropertyStyled>
        <SecondaryHeading className='text-center'>Explore MPAC Property</SecondaryHeading>
        <TertiraryHeadingMini className='text-center'>Browse Listings Curated By Neighborhoods</TertiraryHeadingMini>
        <div>
     <UnderlineRed/>
     {/* <BlackDot/> */}
     </div>
     <Row className='align-items-center'>
    <Col md={7} className='p-0'>
        <div className="img-section">
            <img src={ic_image_2} alt="property" />
        </div>
    </Col>
    <Col md={5} className='mt-4 mt-md-none'>
        <TertiaryHeading>MPAC Autofill property</TertiaryHeading>
        <p className="sub-title">Power your search with our House Up real estate platform, for timely listings and a seamless experience</p> 
        <TertiaryHeading>Get MPAC Reports</TertiaryHeading>
        <p className="sub-title">
            <span>Power your search with our House Up real estate platform, for timely listings and a seamless experience</span>
            <span className='d-block mt-3'>Power your search with our House Up real estate platform, for timely listings and a seamless experience</span>
        </p>
    </Col>
     </Row>
    </ExplorePropertyStyled>
   
  )
}

export default ExploreProperty