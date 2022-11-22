import React  from 'react'
import { HeroSectionStyled } from './style';
import Navbar from '../../Components/Navbar/Index';
import { Col, Container, Row } from 'react-bootstrap';
import search_icon from '../../assets/icons/ic_search.svg';
import SocialFooter from '../../Components/SocialFooter/SocialFooter';


const HeroSection = () => {

    return (
        <>
            <Container>
            <Navbar />
            </Container>
            <HeroSectionStyled>
                <div className='position-absolute w-100' style={{
                    bottom: '2%'
                }}>
                    <SocialFooter />
                </div>
                <div className="inner-container d-flex align-items-center flex-column justify-content-center">
                    <h4 className="inner-container-main-heading">
                        <span> Find <span className='professional-text'>
                        Professional </span>   such as </span>
                        <span className='d-block'> movers, lawyers and contractors  </span>
                    </h4>
                    <Row className="location-select-section d-flex justify-content-sm-between justify-content-center p-3 align-items-center mx-2">
                        <Col sm={6} className="location text-center text-sm-start">
                            <h5 className='title'>Location</h5>
                            <h6 className='sub-title'>City, Area, etc</h6>
                        </Col>
                        <Col sm={6} className="property-type d-flex justify-content-sm-between justify-content-center mt-2 mt-sm-0">
                            <div className="left-section ps-4">
                                <h5 className='title'>Property Type</h5>
                                <h6 className='sub-title'>All Residentials</h6>
                            </div>
                            <div className="search-box ms-2">
                                <img src={search_icon} alt="search" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </HeroSectionStyled>
        </>
    )
}

export default HeroSection