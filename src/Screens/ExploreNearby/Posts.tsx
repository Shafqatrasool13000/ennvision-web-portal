import Card from "react-bootstrap/Card";
import property1 from "../../assets/Image/ic_property_1.png";
import bedroomIcon from "../../assets/icons/ic_property_bed.svg";
import bathIcon from "../../assets/icons/ic_property_bath.svg";
import areaIcon from "../../assets/icons/ic_property_area.svg";
import {
  ImgContainer,
  MiniHeadingSecondary,
  ProfileMiniImg,
  secondaryBlue,
  tertiaryGrey20,
} from "../../Components/GlobalStyle";
import { Button } from "react-bootstrap";
import like from "../../assets/icons/ic_newsfeed_like.svg";
import sent from "../../assets/icons/ic_newsfeed_sent.svg";
import comment from "../../assets/icons/ic_newsfeed_comment.svg";
import save from "../../assets/icons/ic_newsfeed_saved.svg";
import profile from "../../assets/Image/ic_professional_1.png";
import { PostsStyle } from "./style";
import CustomLink from "../../Components/CustomLink/Index";
import newFeed from "../../assets/icons/ic_newsfeed_more.svg";

const Posts = () => {
  return (
    <PostsStyle>
      <div className="post-owner-section">
        <div className="d-flex justify-content-end  mb-1">
          <img className="view-more-icon" src={newFeed} alt="newFeed" />
        </div>
        <div className="d-flex">
          <ImgContainer
            src={profile}
            alt="profile"
            height="40px"
            width="40px"
          />
          <div className="ms-3">
            <div className="d-flex">
              <p className="name mb-0">Hira Qureshi</p>
              <div className="ms-2">
                <CustomLink
                  color={secondaryBlue}
                  link=""
                  textDecoration="none"
                  title="Follow"
                  fontFamily="EnnVisionsMedium"
                />
              </div>
            </div>
            <p className="time mb-0">5 hours ago</p>
          </div>
        </div>
      </div>
      <Card>
        <img src={property1} alt="property" />
        <div className=" visited-text d-flex justify-content-between w-100 align-items-center">
          <h6 className="mb-0 text-light">Visited Now</h6>
          <span className="fs-3">&#8250;</span>
        </div>
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
              <p className="text">8x10 m??</p>
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
          <p className="views my-1 fw-bold">60 Views</p>
          <div className="caption-section">
            <div className="d-flex align-items-center">
              <ProfileMiniImg
                width="21px"
                height="21px"
                borderRadius="50%"
                src={profile}
                alt="profile"
              />
              <p className="mb-0 ms-2">
                Liked by <strong>yousfshk</strong> and <strong>214,033 </strong>
                others
              </p>
            </div>
            <p className="post-caption mb-1">
              Executive Greengard-built most sought-after neighborhood in
              Central Erin Mills. This Family home is bright, spacious and
              features 3 plus bedroom and 3 bathrooms.
              <br />
              <strong> Maqsood </strong> Awesome property on premium location
            </p>
            <CustomLink
              fontSize="15px"
              color={tertiaryGrey20}
              link="/"
              title="View all 45 Comments"
              textDecoration="none"
            />
          </div>
        </Card.Body>
      </Card>
    </PostsStyle>
  );
};

export default Posts;
