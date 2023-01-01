import { Col, Container, Row } from "react-bootstrap";
import selectIcon from "../../assets/icons/ic_select.svg";
import unSelectIcon from "../../assets/icons/ic_add_property_additional.svg";
import Headbar from "../../Components/Headbar/Headbar";
import { FeatureDetailsStyle } from "./style";
import addFeatureIcon from "../../assets/icons/ic_add_property_general_info_add.svg";
import { useState } from "react";

const featureData = [
  { title: "Central Heating", selected: false },
  { title: "Central Cooling", selected: false },
  { title: "Servant Quarter", selected: false },
  { title: "Tv Lounge", selected: false },
  { title: "Lawn", selected: false },
  { title: "Dirty Kitchen", selected: false },
  { title: "Dining Room", selected: false },
  { title: "Swimming Pool", selected: false },
  { title: "Elevators", selected: false },
  { title: "Drawing Room", selected: false },
  { title: "Fully Furnished", selected: false },
  { title: "Study Room", selected: false },
  { title: "Home Theatre", selected: false },
  { title: "Semi Furnished", selected: false },
  { title: "Powder Room", selected: false },
  { title: "Corner House", selected: false },
  { title: "Wifi", selected: false },
  { title: "Security Staff", selected: false },
  { title: "Kitchen", selected: false },
  { title: "Balcony", selected: false },
  { title: "Accessible For Specially-Abled Persons", selected: false },
  { title: "Store Room", selected: false },
  { title: "Laundry Room", selected: false },
  { title: "Nearby Landmark", selected: false },
];
const facingsData = [
  { title: "North", selected: false },
  { title: "North West", selected: false },
  { title: "West", selected: false },
  { title: "North East", selected: false },
  { title: "South West", selected: false },
  { title: "South", selected: false },
  { title: "South East", selected: false },
  { title: "West", selected: false },
];
const utilityData = [
  { title: "Electricity", selected: false },
  { title: "Gas", selected: false },
  { title: "Maintenance", selected: false },
  { title: "Water", selected: false },
];

const FeatureDetails = () => {
  const [featuresData, setFeaturesData] = useState(featureData);
  const [facingData, setFacingData] = useState(facingsData);
  const [utilitiesData, setUtilitiesData] = useState(utilityData);

  const featuresHandler = (index: number) => {
    const data = [...featureData];
    data[index].selected = !data[index].selected;
    setFeaturesData(data);
  };
  const facingDataHandler = (index: number) => {
    const data = [...facingData];
    data[index].selected = !data[index].selected;
    setFacingData(data);
  };
  const utilitiesDataHandler = (index: number) => {
    const data = [...utilitiesData];
    data[index].selected = !data[index].selected;
    setUtilitiesData(data);
  };
  return (
    <FeatureDetailsStyle>
      <div className="mt-4">
        <Headbar title="Additional Details" icon={addFeatureIcon} />
      </div>
      <div className="features-container pb-3">
        <p className="features-container-title mb-0">Features</p>
        <Row>
          {featuresData.map(({ title, selected }, index) => (
            <Col key={index} sm={6} md={4}>
              <div
                onClick={() => featuresHandler(index)}
                className="feature cursor-pointer d-flex align-items-center"
              >
                <span>
                  <img
                    className="mb-1"
                    src={selected ? selectIcon : unSelectIcon}
                    alt={selected ? "check-icon" : "uncheck-icon"}
                  />
                </span>
                <p className="feature-text mb-0 ms-2">{title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="features-container pb-3">
        <p className="features-container-title mb-0">Utilities</p>
        <Row>
          {utilitiesData.map(({ title, selected }, index) => (
            <Col key={index} sm={6} md={4}>
              <div
                onClick={() => utilitiesDataHandler(index)}
                className="feature cursor-pointer d-flex align-items-center"
              >
                <span>
                  <img
                    src={selected ? selectIcon : unSelectIcon}
                    alt={selected ? "check-icon" : "uncheck-icon"}
                  />
                </span>
                <p className="feature-text mb-0 ms-2">{title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="features-container pb-3">
        <p className="features-container-title mb-0">Facing</p>
        <Row>
          {facingData.map(({ title, selected }, index) => (
            <Col key={index} sm={6} md={4}>
              <div
                onClick={() => facingDataHandler(index)}
                className="feature cursor-pointer d-flex align-items-center"
              >
                <span>
                  <img
                    src={selected ? selectIcon : unSelectIcon}
                    alt={selected ? "check-icon" : "uncheck-icon"}
                  />
                </span>
                <p className="feature-text mb-0 ms-2">{title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </FeatureDetailsStyle>
  );
};

export default FeatureDetails;
