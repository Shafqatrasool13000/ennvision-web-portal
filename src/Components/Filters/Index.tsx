import { useContext, useState } from "react";
import { Nav } from "react-bootstrap";
import { ContextApiData } from "../../utils/CreateContext";
import CustomButton from "../CustomButton/CustomButton";
import { BasicColor, PrimaryColor, whiteColor } from "../GlobalStyle";
import FiltersStyle from "./style";

const types = [
  "All",
  "House",
  "Guest House",
  "Flat",
  "Hostel",
  "Upper Portion",
  "Lower Portion",
  "Room",
  "Farm House",
  "Hotel Suites",
  "Basement",
];
const Filters = () => {
  const { typeSelect, setTypeSelect, setIsShowProperty, isShowProperty } =
    useContext(ContextApiData);

  return (
    <FiltersStyle>
      <div className="head-bar">
        <Nav
          activeKey="Residential"
          onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link eventKey="Residential">Residential</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Commercial">Commercial</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Plots">Plots</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="types mt-2">
        <Nav
          variant="pills"
          defaultActiveKey="All"
          onSelect={(selectedKey) => setTypeSelect(selectedKey)}
        >
          {types.map((type, index) => (
            <Nav.Item key={index}>
              <Nav.Link eventKey={type}>{type}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
      <div className="d-flex justify-content-end w-100">
        <div className="me-3 mb-3">
          <CustomButton
            bgcolor="#EFEFF4"
            color="#717272"
            padding="6px 8px"
            width="100px"
            type="button"
            title="Cancel"
            fontSize="16px"
            clicked={() => setIsShowProperty(false)}
          />
        </div>
        <div className="me-2 mb-3">
          <CustomButton
            bgcolor={PrimaryColor}
            color="#FCFBFB"
            padding="6px 8px"
            width="100px"
            type="button"
            fontSize="16px"
            title="Apply"
            clicked={() => setIsShowProperty(false)}
          />
        </div>
      </div>
    </FiltersStyle>
  );
};

export default Filters;
