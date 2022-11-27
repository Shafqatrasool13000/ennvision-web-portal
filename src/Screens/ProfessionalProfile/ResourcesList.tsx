import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { ResourcesListStyled } from './style';
import property1 from '../../assets/Property Details/Property Details (1).png';
import property2 from '../../assets/Property Details/Property Details (2).png';
import property3 from '../../assets/Property Details/Property Details (3).png';
import profileIcon from '../../assets/icons/ic_professional_meet_peron.svg';
import blogIcon from '../../assets/icons/ic_blog_tag.svg';

const ResourcesList = () => {
  return (
    <ResourcesListStyled>
      <Row>
        {
          [property1, property2, property3].map((img, index) => (
            <Col key={index} sm={6} md={4}>
              <Card>
                <Card.Img variant="top" src={img} alt={img} />
                <Card.Body>
                  <Card.Title>How to Choose the Right Franchise for You</Card.Title>
                  <div className="author-bio d-flex justify-content-between">
                    <div className="profession d-flex align-items-center">
                      <span> <img src={profileIcon} alt="profile" /></span>
                      <p className="title">John Smith</p>
                    </div>
                    <div className="author d-flex align-items-center">
                      <span> <img src={blogIcon} alt="blog" /></span>
                      <p className="title">Blog, Photography</p>
                    </div>
                  </div>
                  <Card.Text>
                    I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </ResourcesListStyled>
  )
}

export default ResourcesList