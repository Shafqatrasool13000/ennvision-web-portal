import { Col, Row } from "react-bootstrap";
import { ExplorePropertyStyled } from "./style";
import ic_image_2 from "../../assets/Image/ic_image_2.png";
import {
  BlackDot,
  PrimaryColor,
  SecondaryHeading,
  TertiaryHeading,
  TertiraryHeadingMini,
  UnderlineRed,
} from "../../Components/GlobalStyle";
import CustomButton from "../../Components/CustomButton/CustomButton";
const ExploreProperty = () => {
  return (
    <ExplorePropertyStyled>
      <SecondaryHeading className="text-center">
        Explore MPAC Property
      </SecondaryHeading>
      <TertiraryHeadingMini className="text-center">
        Browse Listings Curated By Neighborhoods
      </TertiraryHeadingMini>
      <div className="d-flex justify-content-center">
        <UnderlineRed />
        <BlackDot />
      </div>
      <Row className="position-relative">
        <Col sm={6} md={6} className="p-0 pe-sm-2">
          <div className="img-section">
            <img src={ic_image_2} alt="property" />
          </div>
        </Col>
        <Col sm={6} md={6} className="mt-4 mt-md-none pb-5">
          <TertiaryHeading>MPAC Autofill property</TertiaryHeading>
          <p className="sub-title">
            Power your search with our House Up real estate platform, for timely
            listings and a seamless experience
          </p>
          <TertiaryHeading>Get MPAC Reports</TertiaryHeading>
          <p className="sub-title">
            <span>
              Power your search with our House Up real estate platform, for
              timely listings and a seamless experience
            </span>
            <span className="d-block mt-3">
              Power your search with our House Up real estate platform, for
              timely listings and a seamless experience
            </span>
          </p>
          <div className="explore-btn position-absolute w-100 d-flex justify-content-end me-3 mt-3">
            <CustomButton
              bgcolor={PrimaryColor}
              color="white"
              padding="6px 8px"
              width="160px"
              type="submit"
              title="EXPLORE"
              fontSize="16px"
              // clicked={navigateToDashboard}
            />
          </div>
        </Col>
      </Row>
    </ExplorePropertyStyled>
  );
};

export default ExploreProperty;
