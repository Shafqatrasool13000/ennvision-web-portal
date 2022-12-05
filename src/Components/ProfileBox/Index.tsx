import profileImg from "../../assets/Property Details/Owner.png";
import soldPropertyIcon from "../../assets/icons/ic_professional_post.svg";
import availabeBuildingIcon from "../../assets/icons/ic_property_detail_sold.svg";
import person from "../../assets/icons/ic_professional_meet_peron.svg";
import avatar from "../../assets/icons/ic_professional_meet_virtual.svg";
import UserProfileBoxStyle from "./style";
import { Col, Row } from "react-bootstrap";
import { BlackDot, TertiraryHeading, UnderlineRed } from "../GlobalStyle";
import verfiedIcon from "../../assets/icons/ic_verifed.svg";

const UserProfileBox = () => {
  return (
    <UserProfileBoxStyle>
      <TertiraryHeading>Denzel Washington</TertiraryHeading>
      <div>
        <UnderlineRed />
        <BlackDot />
      </div>
      <div className="owner-details">
        <Row>
          <Col md={6} lg={8}>
            <div className="d-flex justify-content-sm-start justify-content-center align-items-center flex-wrap ">
              <img src={profileImg} alt="profile" className="profile-img" />
              <div className="bio ms-3 mt-2 mt-sm-0">
                <h6>
                  <span>
                    <img
                      className="align-baseline me-1"
                      src={verfiedIcon}
                      alt="verified"
                    />
                  </span>
                  Denzel Washington
                </h6>
                <p className="branch mt-2 mb-2">adnan.qureshi@gmail.com</p>
                <p className="location mb-0">+1617045420</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="mt-3 mt-md-0">
            <div className="sold-properties">
              <Row>
                <Col md={6} className="mt-md-0 p-0">
                  <div className="properties d-flex align-items-center justify-content-center justify-content-md-start p-2">
                    <span>
                      <img
                        className="mb-1"
                        src={availabeBuildingIcon}
                        alt="building"
                      />
                    </span>
                    <p className="quantity ms-2 mb-0">22</p>
                    <div className="d-flex justify-content-center">
                      <p className="title text-center text-md-start ms-2 mb-0">
                        Available
                      </p>
                    </div>
                  </div>
                  <div className="properties d-flex align-items-center justify-content-center justify-content-md-start p-2 mt-2">
                    <span>
                      <img className="mb-1" src={person} alt="building" />
                    </span>
                    <p className="quantity ms-2 mb-0">42</p>
                    <div className="d-flex justify-content-center">
                      <p className="title text-center text-md-start ms-2 mb-0">
                        In Person
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="p-0 mt-2 mt-md-0">
                  <div className="properties d-flex align-items-center justify-content-center justify-content-md-start p-2">
                    <span>
                      <img className="mb-1" src={soldPropertyIcon} alt="" />
                    </span>
                    <p className="quantity ms-2 mb-0">47</p>
                    <p className="title text-center text-md-start ms-2 mb-0">
                      Sold
                    </p>
                  </div>

                  <div className="properties d-flex align-items-center justify-content-center justify-content-md-start p-2 mt-2">
                    <span>
                      <img className="mb-1" src={avatar} alt="" />
                    </span>
                    <p className="quantity ms-2 mb-0">12</p>
                    <p className="title text-center text-md-start ms-2 mb-0">
                      Virtual
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </UserProfileBoxStyle>
  );
};

export default UserProfileBox;
