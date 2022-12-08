import Card from "react-bootstrap/Card";
import property1 from "../../assets/Image/ic_property_1.png";
import property2 from "../../assets/Image/ic_property_2.png";
import property3 from "../../assets/Image/ic_property_3.png";
import bedroomIcon from "../../assets/icons/ic_property_bed.svg";
import bathIcon from "../../assets/icons/ic_property_bath.svg";
import areaIcon from "../../assets/icons/ic_property_area.svg";
import {
  ImgContainer,
  MiniHeadingSecondary,
  PrimaryColor,
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
import { Posts2Style } from "./style";
import CustomLink from "../../Components/CustomLink/Index";
import newFeed from "../../assets/icons/ic_newsfeed_more.svg";
import AliceCarousel from "react-alice-carousel";

const Posts2 = () => {
  const responsive = {
    0: { items: 1 },
    //   568: { items: 3.2 },
    //   768: { items: 4.2 },
    //   1024: { items: 5.2 },
    //   1200: { items: 7.2 },
    //   1400: { items: 9.2 },
  };

  const items = [
    <img className="w-100" src={property1} alt="property" />,
    <img className="w-100" src={property2} alt="property" />,
    <img className="w-100" src={property3} alt="property" />,
  ];
  return (
    <Posts2Style>
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
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls
        />

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
          <div className="react d-flex justify-content-between align-items-center">
            <div className="react-icons mt-xs-2 mt-sm-0">
              <img src={like} alt="like" />
              <img src={comment} alt="comment" />
              <img src={sent} alt="send" />
            </div>
            <div className="d-flex align-items-center">
              <CustomLink
                fontSize="14px"
                color={PrimaryColor}
                link="/"
                title="Promotion"
                textDecoration="none"
                fontFamily="EnnVisionsMedium"
              />
              <span>
                <img className="ms-2" src={save} alt="save" />
              </span>
            </div>
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
    </Posts2Style>
  );
};

export default Posts2;
