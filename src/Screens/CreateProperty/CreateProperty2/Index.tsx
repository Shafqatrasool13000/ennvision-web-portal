import CustomButton from "../../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import CreateProperty2Style from "./style";
import { Col, Container, Row } from "react-bootstrap";
import {
  BlackDot,
  lightblue2,
  PrimaryColor,
  pureDark,
  tertiaryGrey18,
  TertiraryHeading,
  UnderlineRed,
  whiteColor,
} from "../../../Components/GlobalStyle";
import redTickIcon from "../../../assets/icons/ic_select_red.svg";
import grayTickIcon from "../../../assets/icons/ic_select_gry.svg";
import Headbar from "../../../Components/Headbar/Headbar";
import { useState } from "react";

const features1 = [
  { title: "Picture of Property (if available)", select: true },
  { title: "Property Address", select: true },
  { title: "Municipality", select: true },
  { title: "Roll Number", select: true },
  { title: "Postal Code", select: true },
  { title: "Province, Real-time Market Value (AVM", select: false },
  { title: "AVM Valuation Date", select: false },
  { title: "AVM Confidence Rating", select: false },
  { title: "AVM Range, Roll Number", select: false },
  { title: "Address", select: false },
  { title: "Property Style", select: false },
  { title: "Year Built", select: false },
];

const features2 = [
  { title: "Picture of Property (if available)", select: true },
  { title: "Property Address", select: true },
  { title: "Municipality", select: true },
  { title: "Roll Number", select: true },
  { title: "Postal Code", select: true },
  { title: "Province, Real-time Market Value (AVM", select: false },
  { title: "AVM Valuation Date", select: false },
  { title: "AVM Confidence Rating", select: false },
  { title: "AVM Range, Roll Number", select: false },
  { title: "Address", select: false },
  { title: "Property Style", select: false },
  { title: "Year Built", select: false },
];

const properties = [
  {
    isWant: false,
    title: "3 Easy Steps To Create A Professional Listing",
    price: "$50.00",
    features: features1,
  },
  {
    isWant: true,
    title: "We Will Auto Populate Your Home Listing Information",
    price: "$50.00",
    features: features2,
  },
];

const CreateProperty2 = () => {
  const [propertiesIntro, setPropertiesIntro] = useState(properties);
  const navigate = useNavigate();

  const toggleProperty = (index: number) => {
    const data = [...propertiesIntro];
    data[index].isWant = !data[index].isWant;
    setPropertiesIntro(data);
  };
  const toggleFeature = (index: number, featureIndex: number) => {
    const data = [...propertiesIntro];
    data[index].features[featureIndex].select =
      !data[index].features[featureIndex].select;
    setPropertiesIntro(data);
  };

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
                border="none"
                fontFamily="EnnVisionsMedium"
              />
            </div>
            <CustomButton
              bgcolor={PrimaryColor}
              color="white"
              padding="8px 8px"
              width="150px"
              type="submit"
              title="Next"
              margin="auto"
              fontSize="16px"
              fontFamily="EnnVisionsMedium"
              border="none"
              clicked={() => navigate("/bill-info")}
            />
          </div>
        </div>
        <Row>
          {propertiesIntro.map(({ features, price, title, isWant }, index) => (
            <Col key={index} md={6} className="property-card">
              <Headbar title={title} rightText={price} />
              <div className="property-card-inner-section cursor-pointer">
                {features.map(({ title, select }, featureIndex) => (
                  <div
                    onClick={() => toggleFeature(index, featureIndex)}
                    key={index}
                    className="d-flex feature mt-2"
                  >
                    {select ? (
                      <img src={redTickIcon} alt="check-icon" />
                    ) : (
                      <img src={grayTickIcon} alt="grey-tick" />
                    )}
                    <p className="feature-text ms-2 mb-0">{title}</p>
                  </div>
                ))}
                <div className="property-below-btn">
                  <CustomButton
                    bgcolor={isWant ? lightblue2 : PrimaryColor}
                    color={whiteColor}
                    padding="8px 8px"
                    width="120px"
                    type="submit"
                    title="You Want?"
                    margin="auto"
                    fontSize="16px"
                    fontFamily="EnnVisionsMedium"
                    border="none"
                    clicked={() => toggleProperty(index)}
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
