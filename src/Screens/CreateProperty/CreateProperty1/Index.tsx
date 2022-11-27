import CustomButton from "../../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import CreateProperty1Style from "./style";
import { Col, Container, Row } from "react-bootstrap";
import {
  BlackDot,
  PrimaryColor,
  TertiraryHeading,
  UnderlineRed,
} from "../../../Components/GlobalStyle";
import redTickIcon from "../../../assets/icons/ic_select_red.svg";
import Headbar from "../../../Components/Headbar/Headbar";

const features1 = [
  "Enter your property details, and load pictures and images. Vital info.",
  "List The Price",
  "Lot Details & Primary Structures Details.",
];

const features2 = [
  "Property Image (if available)",
  "Last Sale Date & Price",
  "Lot Details",
  "Building Permit Information",
  "Primary Structures.",
  "Garage Structures",
];

const features = [
  {
    title: "3 Easy Steps To Create A Professional Listing",
    propertyName: "Create Your Own Property Listing",
    price: "FREE",
    features: features1,
  },
  {
    title: "We Will Auto Populate Your Home Listing Information",
    propertyName: "Want To Save Time?",
    price: "$5000",
    features: features2,
  },
];

const CreateProperty1 = () => {
  const navigate = useNavigate();

  return (
    <CreateProperty1Style>
      <Container>
        <TertiraryHeading>List a Property</TertiraryHeading>
        <div>
          <UnderlineRed />
          <BlackDot />
        </div>
        <Row>
          {features.map(({ features, price, propertyName, title }, index) => (
            <Col key={index} md={6} className="property-card">
              <Headbar title={propertyName} />
              <div className="property-card-inner-section">
                <div className="property-intro d-flex justify-content-between">
                  <p className="heading">{title}</p>
                  <p className={`price ${index == 0 ? "free" : "paid"}`}>
                    {price}
                  </p>
                </div>
                {features.map((title, index) => (
                  <div key={index} className="d-flex feature mt-2">
                    <img src={redTickIcon} alt="check-icon" />
                    <p className="feature-text ms-2 mb-0">{title}</p>
                  </div>
                ))}
                <div className="property-btn">
                  <CustomButton
                    bgcolor={PrimaryColor}
                    color="white"
                    padding="8px 8px"
                    width="100%"
                    type="submit"
                    title="Start Listing"
                    margin="auto"
                    fontSize="16px"
                    fontFamily="EnnVisionsMedium"
                    clicked={() => navigate("/list-2")}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </CreateProperty1Style>
  );
};

export default CreateProperty1;
