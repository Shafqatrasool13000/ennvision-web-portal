import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SecondaryHeadingMini, TertiraryHeading1 } from '../../Components/GlobalStyle'
import { PropertyDetailsStyled } from './style';
import propertPic1 from '../../assets/Property Details/Property Details (3).png';
import propertPic2 from '../../assets/Property Details/Property Details (1).png';
import propertPic3 from '../../assets/Property Details/Property Details (2).png';
import Navbar from '../../Components/Navbar/Index';
import SocialFooter from '../../Components/SocialFooter/SocialFooter';
import bedroomIcon from '../../assets/icons/ic_property_bed.svg';
import bathIcon from '../../assets/icons/ic_property_bath.svg';
import areaIcon from '../../assets/icons/ic_property_area.svg';
import qualityIcon from '../../assets/icons/ic_property_detail_repair.svg';
import statusIcon from '../../assets/icons/ic_property_detail_features.svg';
import profileImg from '../../assets/Property Details/Owner.png';
import soldPropertyIcon from '../../assets/icons/ic_professional_post.svg';
import availabeBuildingIcon from '../../assets/icons/ic_property_detail_sold.svg';
import redTickIcon from '../../assets/icons/ic_select_red.svg';
import lightTickIcon from '../../assets/icons/ic_property_detail_status.svg';

const propertyDetailsData = [
    {
        name: 'Bedrooms', img: bedroomIcon, quantity: '4'
    }, {
        name: 'Bathrooms', img: bathIcon, quantity: '2'
    }, {
        name: 'Square Area', img: areaIcon, quantity: '8x10 m²'
    }, {
        name: 'Repair Quality', img: qualityIcon, quantity: 'Modern Loft'
    }, {
        name: 'Status', img: statusIcon, quantity: 'Available'
    },
]
const keyFeaturesData =[
    '10 bedrooms',
    '12 washrooms', 
    'TV lounge', 
    '3 Drawing and Dining rooms', 
    '3 Storerooms', 
    '3 Kitchens', 
    '5 Servant Rooms',
    'Parking Space'
];
const featuresData=[
    'Central Heating','Central Cooling','Servant Quarter','Tv Lounge','Lawn','Dirty Kitchen','Dining Room','Swimming Pool','Elevators','Drawing Room','Fully Furnished','Study Room','Home Theatre','Semi Furnished','Powder Room','Corner House','Wifi','Security Staff','Kitchen','Balcony','Accessible For Specially-Abled Persons','Store Room','Laundry Room','Nearby Landmark'
]

const facingData=[
'North','North West','West','North East','South West','South','South East','West'
]

const utilitiesData=[
    'Electricity','Gas','Maintenance','Water'
]

const Index = () => {
    return (
        <>
            <Navbar />
            <PropertyDetailsStyled>
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        <SecondaryHeadingMini>Sensational And Brilliant Bungalow In Calgary!</SecondaryHeadingMini>
                        <h5 className='for-sale'>For Sale</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <TertiraryHeading1 className='mt-2'>83 Woodford Crescent Southwest, Calgary, Alberta, Canada</TertiraryHeading1>
                        <h4 className='property-price'>$746,000.00</h4>
                    </div>
                    <div className="imgs-gallery">
                        <Row>
                            <Col sm={6} lg={8}>
                                <img src={propertPic1} alt="peroperty-pic" className='img-large' />
                            </Col>
                            <Col sm={6} lg={4}>
                                <img src={propertPic2} alt="property2" />
                                <img src={propertPic3} alt="property3" />
                            </Col>
                        </Row>
                    </div>
                    <div className="property-details">
                        {
                            propertyDetailsData.map(({ name, img, quantity }, index) => (
                                <div key={index} className="property-details-box">
                                    <div className="property-details-box-inner">
                                        <p className='name mb-0'>{name}</p>
                                        <div className="d-flex mt-1 align-items-center">
                                            <img src={img} alt="bedroom" />
                                            <p className="quantity mb-0 ms-2">{quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="owner-details">
                        <p className="listed-by text-center text-md-start">Listed by Property owner</p>
                        <Row>
                            <Col md={6} lg={8}>
                                <div className="d-flex">
                                    <img src={profileImg} alt="profile" className="profile-img" />
                                    <div className="bio ms-3">
                                        <h6>Denzel Washington</h6>
                                        <p className="branch mt-3">Denzel Capital Properties LLC</p>
                                        <p className="location">Calgary, Alberta, Canada</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='mt-3 mt-md-0'>
                                <div className="sold-properties">
                                    <Row>
                                        <Col md={6}>
                                            <p className="title text-center text-md-start">Sold Properties    </p>
                                            <div className="properties d-flex align-items-center justify-content-center justify-content-md-start">
                                                <span>
                                                    <img src={soldPropertyIcon} alt="" />
                                                </span>
                                                <p className="quantity ms-2 mb-0">47</p>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                            <button className='chat-btn'> <span><img src="" alt="" /></span> Start Chat</button>
                                            </div>
                                        </Col>
                                        <Col md={6} className='mt-3 mt-md-0'>
                                            <p className="title text-center text-md-start">Available Properties</p>
                                            <div className="properties d-flex align-items-center justify-content-center justify-content-md-start">
                                                <span>
                                                    <img src={availabeBuildingIcon} alt="building" />
                                                </span>
                                                <p className="quantity ms-2 mb-0">22</p>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                            <button className='call-btn'><span><img src="" alt="" /></span> Call Now</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="about-property">
                        <div className="about-property-main-details">
                            <h6 className="about-property-main-details-title">About this property</h6>
                            <div className="posted-at d-flex">
                                <p className="posted-at-text">Posted on</p>
                                <p className="posted-at-date ms-2"> - June 29, 2022</p>
                            </div>
                            <p className="posted-at-area">4500 Sq. Ft. House for Sale in Calgary!</p>
                            <p className="posted-at-detail-text">A grand 2400 sq. ft. house for sale in E-11/3, Islamabad. It comprises of 10 bedrooms, 12 washrooms, TV lounge, 3 drawing & dining rooms, store room, servant quarters and car parking space. Key lifestyle and convenience around this property includes beautiful parks, commercial area, Restaurants and food outlets, medical care/ hospital, gym, health/sports centre within 1-2 KMs. Margalla Road can be used for daily commute.</p>
                        </div>
                        <div className="key-features">
                            <p className="key-features-title">Key features:</p>
                            <div className="details">
                                {
                                keyFeaturesData.map((title,index)=>(
                                    <div key={index} className="d-flex feature mt-3">
                                    <img src={redTickIcon} alt="check-icon" />
                                    <p className='text ms-2 mb-0'>{title}</p>
                                </div>
                                ))
                                }
                               
                            </div>
                        </div>
                        <div className="features-container pb-3">
                            <p className="features-container-title mb-0">Features</p>
                            <Row>
                                {
                                    featuresData.map((title,index)=>(
                                        <Col key={index} sm={6} md={4}>
                                        <div className="feature d-flex align-items-center">
                                            <span><img src={lightTickIcon} alt="check-icon" /></span>
                                            <p className="feature-text mb-0 ms-2">{title}</p>
                                        </div>
        
                                        </Col>
                                    ))
                                }
                              
                            </Row>
                        </div>
                        <div className="features-container pb-3">
                            <p className="features-container-title mb-0">Utilities</p>
                            <Row>
                                {
                                    utilitiesData.map((title,index)=>(
                                        <Col key={index} sm={6} md={4}>
                                        <div className="feature d-flex align-items-center">
                                            <span><img src={lightTickIcon} alt="check-icon" /></span>
                                            <p className="feature-text mb-0 ms-2">{title}</p>
                                        </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                        <div className="features-container pb-3">
                            <p className="features-container-title mb-0">Facing</p>
                            <Row>
                                {
                                    facingData.map((title,index)=>(
                                        <Col key={index} sm={6} md={4}>
                                        <div className="feature d-flex align-items-center">
                                            <span><img src={lightTickIcon} alt="check-icon" /></span>
                                            <p className="feature-text mb-0 ms-2">{title}</p>
                                        </div>
        
                                        </Col>
                                    ))
                                }
                              
                            </Row>
                        </div>
                    </div>
                    <div className="location-map"></div>
                </Container>
                <SocialFooter />
            </PropertyDetailsStyled>
        </>
    )
}

export default Index