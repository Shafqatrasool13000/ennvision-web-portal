import profileImg from "../../assets/Property Details/Owner.png";
import soldPropertyIcon from "../../assets/icons/ic_professional_post.svg";
import availabeBuildingIcon from "../../assets/icons/ic_property_detail_sold.svg";
import { ProfileBoxStyled } from "./style";
import { Col, Row } from "react-bootstrap";
import {
  BlackDot,
  greenishColor,
  PrimaryColor,
  TertiraryHeading,
  UnderlineRed,
} from "../../Components/GlobalStyle";
import verfiedIcon from "../../assets/icons/ic_verifed.svg";
import CustomButton from "../../Components/CustomButton/CustomButton";
import chat from "../../assets/icons/ic_property_detail_chat.svg";
import phone from "../../assets/icons/ic_property_detail_call.svg";

const ProfileBox = () => {
  return (
    <ProfileBoxStyled>
      <TertiraryHeading> Denzel Washington</TertiraryHeading>
      <div>
        <UnderlineRed />
        <BlackDot />
      </div>
      <div className="owner-details">
        <Row>
          <Col md={6} lg={8}>
            <div className="d-flex">
              <img src={profileImg} alt="profile" className="profile-img" />
              <div className="bio ms-3">
                <h6>
                  <span>
                    <img
                      className="align-baseline"
                      src={verfiedIcon}
                      alt="verified"
                    />
                  </span>
                  Denzel Washington
                </h6>
                <p className="branch mt-2 mb-2">
                  Denzel Capital Properties LLC
                </p>
                <p className="location mb-0">Calgary, Alberta, Canada</p>
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

                  <CustomButton
                    bgcolor={PrimaryColor}
                    color="white"
                    padding="4px 8px"
                    width="130px"
                    type="submit"
                    title="Chat"
                    margin="auto"
                    border="none"
                    icon={<img className="me-2" src={chat} alt="chat" />}
                    fontSize="16px"
                    // clicked={() => editHandler(content)}
                  />
                </Col>
                <Col md={6} className="p-0">
                  <div className="properties d-flex align-items-center justify-content-center justify-content-md-start p-2">
                    <span>
                      <img className="mb-1" src={soldPropertyIcon} alt="" />
                    </span>
                    <p className="quantity ms-2 mb-0">47</p>
                    <p className="title text-center text-md-start ms-2 mb-0">
                      Sold
                    </p>
                  </div>
                  <CustomButton
                    bgcolor={greenishColor}
                    color="white"
                    padding="4px 8px"
                    width="130px"
                    type="submit"
                    title="Call"
                    margin="auto"
                    fontSize="16px"
                    border="none"
                    icon={<img className="me-2" src={phone} alt="phone" />}
                    // clicked={() => editHandler(content)}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <p className="about-us-text mt-2 py-2">
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
          quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
          quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
          grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
          vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
          Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
          quiz. How quickly daft jumping zebras vex. Two driven jocks help fax
          my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz
          Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed.
          Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug
          of bad milk. A very bad quack might jinx zippy fowls. Few quips
          galvanized the mock jury box. Quick brown dogs jump over the lazy fox.
          The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight
          for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A
          wizard’s job is to vex chumps quickly
        </p>
      </div>
    </ProfileBoxStyled>
  );
};

export default ProfileBox;
