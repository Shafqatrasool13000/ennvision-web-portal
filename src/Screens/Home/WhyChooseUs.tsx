import React from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import { WhyChooseUsStyled } from './style';
import whyChooseBanner from '../../assets/Image/ic_services_img.png';
import serviceIcon1 from '../../assets/icons/ic_services_1.svg';
import serviceIcon2 from '../../assets/icons/ic_services_2.svg';
import serviceIcon3 from '../../assets/icons/ic_services_3.svg';
import serviceIcon4 from '../../assets/icons/ic_services_4.svg';
import { BlackDot, UnderlineRed } from '../../Components/GlobalStyle';
import {Container} from 'react-bootstrap';

const whyChooseUsData = [
  {
    title: '  List Your Property',
    sub_title: 'Sell or rent your property',
    sub_title1: 'without paying realtor fees',
    img: serviceIcon2
  }, {
    title: ' Find a Home',
    sub_title: ' A smarter, easier way to',
    sub_title1: 'search homes and rentals',
    img: serviceIcon3
  }, {
    title: 'Get Help From The Pros',
    sub_title: 'Find a professional to help',
    sub_title1: 'you sell your home',
    img: serviceIcon4
  }, {
    title: 'Engage The Audience',
    sub_title: 'Search thousands of house',
    sub_title1: 'and apartments in your area',
    img: serviceIcon1
  }
]
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};
const items = [
  ...whyChooseUsData.map(({ title, sub_title,sub_title1,img }) => (
    <div className="pxp-services-container rounded-lg p-0">
      <Link to="/properties" className="pxp-services-item">
        <div className="pxp-services-item-fig">
          <img src={img} alt="properties" />
        </div>
        <div className="pxp-services-item-text text-center">
          <div className="pxp-services-item-text-title">
            {title}
          </div>
          <div className="pxp-services-item-text-sub">
            {sub_title}
            <br />
            {sub_title1}
          </div>
        </div>
        <div className="pxp-services-item-cta text-uppercase text-center">
          Learn More
        </div>
      </Link>
    </div>
  ))
];
const WhyChooseUs = () => {
  return (
    <WhyChooseUsStyled>
      <div
        className="pxp-services pxp-cover mt-100 pt-100 mb-200"
        style={{ backgroundImage: `url(${whyChooseBanner})` }}
      >
        <h2 className="text-center pxp-section-h2">Why Choose Us</h2>
        <p className="pxp-text-light text-center">
          Take Control Of The Most Important Decision Of Your Life
        </p>
        <div>
          <UnderlineRed />
          <BlackDot />
        </div>
        <Container>
          <div className="cards mt-4 mt-md-5">
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
              disableDotsControls
              disableButtonsControls
            />
          </div>
        </Container>
      </div>
    </WhyChooseUsStyled>
  )
}

export default WhyChooseUs