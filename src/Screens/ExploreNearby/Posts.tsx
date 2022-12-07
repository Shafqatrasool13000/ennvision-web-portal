import Card from "react-bootstrap/Card";
import property1 from "../../assets/Image/ic_property_1.png";
import bedroomIcon from "../../assets/icons/ic_property_bed.svg";
import bathIcon from "../../assets/icons/ic_property_bath.svg";
import areaIcon from "../../assets/icons/ic_property_area.svg";
import { MiniHeadingSecondary } from "../../Components/GlobalStyle";
import { Button } from "react-bootstrap";
import like from "../../assets/icons/ic_newsfeed_like.svg";
import sent from "../../assets/icons/ic_newsfeed_sent.svg";
import comment from "../../assets/icons/ic_newsfeed_comment.svg";
import save from "../../assets/icons/ic_newsfeed_saved.svg";

import { PostsStyle } from "./style";

const Posts = () => {
  return (
    <PostsStyle>
      <Card>
        <div className="position-absolute visited-text d-flex justify-content-between w-100 align-items-center">
          <h6 className="mb-0 text-light">Visited Now</h6>
          <span className="fs-3">&#8250;</span>
        </div>
        <Card.Img variant="top" src={property1} />
        <Card.Body>
          <MiniHeadingSecondary>
            831 Maidstone Drive Bungalow
          </MiniHeadingSecondary>
          <Card.Text>
            <p className="sub-title fs-6">L7A 0K5, Brampton, Ontario, Canada</p>
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
              <p className="text">3</p>
            </div>
            <div className="bathrooms d-flex justify-content-between align-items-center">
              <span>
                <img src={bathIcon} alt="bath" />
              </span>
              <p className="text">3</p>
            </div>
            <div className="length d-flex justify-content-between align-items-center">
              <span>
                <img src={areaIcon} alt="area" />
              </span>
              <p className="text">8x10 m²</p>
            </div>
          </div>
          <div className="react d-flex justify-content-between">
            <div className="react-icons mt-xs-2 mt-sm-0">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={sent} alt="" />
            </div>
            <img src={save} alt="" />
          </div>
        </Card.Body>
      </Card>
    </PostsStyle>
  );
};

export default Posts;
