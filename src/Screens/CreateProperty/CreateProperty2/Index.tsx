import CustomButton from "../../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import CreateProperty2Style from "./style";
import { Col, Container, Row } from "react-bootstrap";
import {
  BlackDot,
  lightblue2,
  pureDark,
  tertiaryGrey18,
  TertiraryHeading,
  UnderlineRed,
} from "../../../Components/GlobalStyle";
import redTickIcon from "../../../assets/icons/ic_select_red.svg";

const features1 = [
  "Picture of Property (if available)",
  "Property Address",
  "Municipality",
  "Roll Number",
  "Postal Code",
  "Province, Real-time Market Value (AVM",
  "AVM Valuation Date",
  "AVM Confidence Rating",
  "AVM Range, Roll Number",
  "Address",
  "Property Style",
  "Year Built",
];

const features2 = [
  "Picture of Property (if available)",
  "Property Address",
  "Municipality",
  "Roll Number",
  "Postal Code",
  "Province, Real-time Market Value (AVM",
  "AVM Valuation Date",
  "AVM Confidence Rating",
  "AVM Range, Roll Number",
  "Address",
  "Property Style",
  "Year Built",
];

const features = [
  {
    title: "Property Value Sales Report",
    propertyName: "3 Easy Steps To Create A Professional Listing",
    price: "$50.00",
    features: features1,
  },
  {
    title: "Comparable Report",
    propertyName: "We Will Auto Populate Your Home Listing Information",
    price: "$50.00",
    features: features2,
  },
];

const CreateProperty2 = () => {
  const navigate = useNavigate();

  return (
    <CreateProperty2Style>
      <Container>
        <div className="d-flex justify-content-between">
          <div>
            <TertiraryHeading>You May Also Like</TertiraryHeading>
            <div>
              <UnderlineRed />
              <BlackDot />
            </div>
          </div>
          <div className="d-flex">
            <div className="me-2">
              <CustomButton
                bgcolor={tertiaryGrey18}
                color={pureDark}
                padding="8px 8px"
                width="150px"
                type="submit"
                title="SKIP"
                margin="auto"
                fontSize="16px"
                fontFamily="EnnVisionsMedium"
              />
            </div>
            <CustomButton
              bgcolor={lightblue2}
              color="white"
              padding="8px 8px"
              width="150px"
              type="submit"
              title="Next"
              margin="auto"
              fontSize="16px"
              fontFamily="EnnVisionsMedium"
              clicked={() => navigate("/create-property-2")}
            />
          </div>
        </div>
        <Row>
          {features.map(({ features, price, propertyName, title }, index) => (
            <Col key={index} md={6} className="property-card">
              {/* <Headbar title={propertyName} rightText={price} /> */}
              <div className="property-card-inner-section">
                {features.map((title, index) => (
                  <div key={index} className="d-flex feature mt-2">
                    <img src={redTickIcon} alt="check-icon" />
                    <p className="feature-text ms-2 mb-0">{title}</p>
                  </div>
                ))}
                <div className="property-below-btn">
                  <CustomButton
                    bgcolor={index === 0 ? "#F3F3F3" : "#049CCE"}
                    color={index === 0 ? pureDark : "white"}
                    padding="8px 8px"
                    width="120px"
                    type="submit"
                    title="You Want?"
                    margin="auto"
                    fontSize="16px"
                    fontFamily="EnnVisionsMedium"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </CreateProperty2Style>
  );
};

export default CreateProperty2;
