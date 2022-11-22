import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import property1 from '../../assets/Image/ic_property_1.png';
import property2 from '../../assets/Image/ic_property_2.png';
import property3 from '../../assets/Image/ic_property_3.png';
import property4 from '../../assets/Image/ic_property_4.png';
import property5 from '../../assets/Image/ic_property_5.png';
import property6 from '../../assets/Image/ic_property_6.png';
import bedroomIcon from '../../assets/icons/ic_property_bed.svg';
import bathIcon from '../../assets/icons/ic_property_bath.svg';
import areaIcon from '../../assets/icons/ic_property_area.svg';
import {MiniHeading} from '../../Components/GlobalStyle';
import { Col, Row } from 'react-bootstrap';
import ViewMore from '../../Components/ViewMoreProperties/Index';
import { PropertiesStyled } from './style';
import { useNavigate } from 'react-router-dom';

const propertiesData = [{
  title: '831 Maidstone Drive Bungalow', sub_title: 'L7A 0K5, Brampton, Ontario, Canada', propertyImg: property1,
  bed: '3', bath: '3', area: '8x10 m²'
}, {
  title: '831 Maidstone Drive Bungalow', sub_title: 'L7A 0K5, Brampton, Ontario, Canada', propertyImg: property2,
  bed: '3', bath: '3', area: '8x10 m²'
}, {
  title: '831 Maidstone Drive Bungalow', sub_title: 'L7A 0K5, Brampton, Ontario, Canada', propertyImg: property3,
  bed: '3', bath: '3', area: '8x10 m²'
}, {
  title: '831 Maidstone Drive Bungalow', sub_title: 'L7A 0K5, Brampton, Ontario, Canada', propertyImg: property4,
  bed: '3', bath: '3', area: '8x10 m²'
}, {
  title: '831 Maidstone Drive Bungalow', sub_title: 'L7A 0K5, Brampton, Ontario, Canada', propertyImg: property5,
  bed: '3', bath: '3', area: '8x10 m²'
}, {
  title: '831 Maidstone Drive Bungalow', sub_title: 'L7A 0K5, Brampton, Ontario, Canada', propertyImg: property6,
  bed: '3', bath: '3', area: '8x10 m²'
}]

const Properties = () => {
  const navigate=useNavigate();

  const navigateToDetails=(id)=>{
    navigate(`/property-details/${id}`)
  }
  return (
    <PropertiesStyled>
      <div className="properties pb-5">
        <Row>
          {
            propertiesData.map(({ sub_title, area, bath, propertyImg, bed, title },index) => (
              <Col key={index} md={4}>
                <Card onClick={()=>navigateToDetails(index)}>
                  <Card.Img variant="top" src={propertyImg} />
                  <Card.Body>
                    <MiniHeading>{title}</MiniHeading>
                    <Card.Text>
                      <p className='sub-title'>
                        {sub_title}
                      </p>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center property-description">
                      <Button variant="primary">For Sale</Button>
                      <p className="price m-0">$746,000</p>
                    </div>
                    <div className="property-details d-flex justify-content-between align-items-center">
                      <div className="beds d-flex justify-content-between align-items-center">
                        <span>
                          <img src={bedroomIcon} alt="bed" />
                        </span>
                        <p className="text">{bed}</p>
                      </div>

                      <div className="bathrooms d-flex justify-content-between align-items-center">
                        <span>
                          <img src={bathIcon} alt="bath" />
                        </span>
                        <p className="text">{bath}</p>
                      </div>
                      <div className="length d-flex justify-content-between align-items-center">
                        <span>
                          <img src={areaIcon} alt="area" />
                        </span>
                        <p className="text">{area}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    <ViewMore/>
    </PropertiesStyled>
  )
}

export default Properties;