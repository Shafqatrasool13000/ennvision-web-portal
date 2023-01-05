import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BlackDot,
  lightGrey4,
  PrimaryColor,
  TertiraryHeading,
  TetraHeading,
  UnderlineRed,
} from "../../Components/GlobalStyle";
import { PropertyInfoStyle } from "./style";
import FormControl from "../../Components/FormControl";
import { Formik } from "formik";
import * as Yup from "yup";
import UnselectedIcon from "../../assets/icons/ic_add_property_type.svg";
import selectedIcon from "../../assets/icons/ic_add_property_type_sel.svg";
import Gallery from "./AdditionalDetails";
import FeatureDetails from "./FeatureDetails";
import GenerateInfo from "./GenerateInfo";
import plusIcon from "../../assets/icons/ic_maximum.svg";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomModal from "../../Components/Modal/CustomModal";
import Confirmed from "../../Components/Confirmed/ConfirmedLight";
import PurchaseBtns from "../../Components/PurchaseBtns/PurchaseBtns";
import InputField from "../../Components/InputField/InputField";
import inputFieldSetter from "./functional";
// import Editors from "./Editor";

const propertyTypes = [
  {
    title: "Residential",
    selected: true,
  },
  { title: "Commercial", selected: false },
  {
    title: "Plot",
    selected: false,
  },
];

const options = [
  {
    value: "text 1",
    label: "text 1",
  },
  {
    value: "text 2 ",
    label: "text 2",
  },

  {
    value: "text 3",
    label: "text 3",
  },
];
const PropertyInfo = () => {
  const [isModalVisib, setIsModalVisible] = useState(false);
  const [propertyTypesData, setPropertyTypesData] = useState(propertyTypes);

  const [detailedAddress1, setDetailedAddress1] = useState<string | number>(
    "0"
  );
  const [detailedAddress2, setDetailedAddress2] = useState<string | number>(
    "0"
  );

  const initialValues = {
    propertyTitle: "",
    subTypeProperty: "",
    placeLocated: "",
    selectArea: "",
    newArea: "",
    deatailAddress1: "",
    deatailAddress2: "",
    propertyInfo: "",
    yearBuild: "",
    yearFinished: "",
    placeLoacted: "",
    address1: "",
    address2: "",
    selectProperty: "",
  };

  const validationSchema = Yup.object({
    // propertyTitle: Yup.string().required("required!"),
    // subTypeProperty: Yup.string().required("required!"),
    // placeLocated: Yup.string().required("required!"),
    // selectArea: Yup.string().required("required!"),
    // newArea: Yup.string().required("required!"),
    // deatailAddress1: Yup.string().required("required!"),
    // deatailAddress2: Yup.string().required("required!"),
    // propertyInfo: Yup.string().required("required!"),
    // yearBuild: Yup.string().required("required!"),
    // yearFinished: Yup.string().required("required!"),
    // placeLoacted: Yup.string().required("required!"),
    // address1: Yup.string().required("required!"),
    // address2: Yup.string().required("required!"),
    // selectProperty: Yup.string().required("required!"),
  });

  const propertySelectHandler = (index: number) => {
    const data = [...propertyTypesData];
    const intialSelected = data.find(({ selected }) => selected === true);
    intialSelected!.selected = false;
    data[index].selected = !data[index].selected;
    setPropertyTypesData(data);
  };

  return (
    <PropertyInfoStyle>
      <CustomModal
        isModalVisible={isModalVisib}
        setIsModalVisible={setIsModalVisible}
      >
        <Confirmed />
      </CustomModal>
      <Container>
        <TertiraryHeading className="ms-3">
          Fill Property Information
        </TertiraryHeading>
        <div className="ms-3">
          <UnderlineRed />
          <BlackDot />
        </div>
        <div className="inner-section mt-2">
          <div className="heading-bar">
            <h2 className="heading-bar-title">
              Sell or rent out your property
            </h2>
            <p className="heading-bar-subtitle">
              Enter your property details below to get is listed on our portal
              and receive lead on your property
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={() => console.log("hello")}
          >
            {(formik) => {
              return (
                <>
                  <Row className="property-for align-items-center">
                    <Col md={3} className="type">
                      <TetraHeading>Property for</TetraHeading>
                      <PurchaseBtns />
                    </Col>
                    <Col md={6}>
                      <TetraHeading>Property Title</TetraHeading>
                      <FormControl
                        control="input"
                        type="text"
                        name="propertyTitle"
                        border="1px solid #EFEFF4"
                        placeholder="Enter Title ..."
                        className={
                          formik.errors.propertyInfo &&
                          formik.touched.propertyInfo
                            ? "is-invalid"
                            : "customInput"
                        }
                      />
                    </Col>
                    <Col md={3} className="align-self-end generate-btn">
                      <CustomButton
                        bgcolor={PrimaryColor}
                        color="white"
                        padding="8px"
                        width="100%"
                        type="submit"
                        title="Use generated title"
                        margin="auto"
                        fontSize="16px"
                      />
                    </Col>
                  </Row>
                  <Row className="property-types align-items-center">
                    <Col md={6} className="type align-self-start">
                      <h6 className="heading">Type of Property</h6>
                      <div className="types-radio d-flex type gap-3 w-100 mt-3">
                        {propertyTypesData.map(({ title, selected }, index) => (
                          <div
                            onClick={() => propertySelectHandler(index)}
                            key={index}
                            className="d-flex cursor-pointer"
                          >
                            <img
                              src={selected ? selectedIcon : UnselectedIcon}
                              alt="emptyBox"
                            />
                            <p className="type-text mb-0 ms-3">{title}</p>
                          </div>
                        ))}
                      </div>
                    </Col>
                    <Col md={6}>
                      <h6 className="heading mb-0">Sub-type of Property</h6>
                      <div className="mt-2">
                        <FormControl
                          control="select"
                          name="subTypeProperty"
                          border="1px solid #EFEFF4"
                          placeholder="Sub-Type property..."
                          options={options}
                          className={
                            formik.errors.propertyInfo &&
                            formik.touched.propertyInfo
                              ? "is-invalid"
                              : "customInput"
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="place-located align-items-center">
                    <Col md={6}>
                      <TetraHeading>Where's your place located.</TetraHeading>
                      <FormControl
                        control="input"
                        type="text"
                        name="placeLocated"
                        border="1px solid #EFEFF4"
                        placeholder="Enter Place Located..."
                        className={
                          formik.errors.propertyInfo &&
                          formik.touched.propertyInfo
                            ? "is-invalid"
                            : "customInput"
                        }
                      />
                    </Col>
                    <Col md={3}>
                      <TetraHeading>Select Area</TetraHeading>
                      <div className="mt-2">
                        <FormControl
                          control="select"
                          name="selectArea"
                          border="1px solid #EFEFF4"
                          placeholder="Select Area"
                          margin
                          className={
                            formik.errors.propertyInfo &&
                            formik.touched.propertyInfo
                              ? "is-invalid"
                              : "customInput"
                          }
                          options={options}
                        />
                      </div>
                    </Col>
                    <Col md={3}>
                      <TetraHeading>Enter New Area</TetraHeading>
                      <div className="mt-2">
                        <FormControl
                          control="select"
                          name="newArea"
                          border="1px solid #EFEFF4"
                          placeholder="New Area"
                          className={
                            formik.errors.propertyInfo &&
                            formik.touched.propertyInfo
                              ? "is-invalid"
                              : "customInput"
                          }
                          options={options}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="address-details align-items-center mt-3">
                    <TetraHeading>Detailed Address</TetraHeading>
                    <Col md={6}>
                      <FormControl
                        control="input"
                        type="text"
                        name="deatailAddress1"
                        border="1px solid #EFEFF4"
                        placeholder="Enter Address 1"
                        className={
                          formik.errors.propertyInfo &&
                          formik.touched.propertyInfo
                            ? "is-invalid"
                            : "customInput"
                        }
                      />
                    </Col>
                    <Col
                      className="input-section d-flex align-items-center"
                      sm={6}
                      md={4}
                    >
                      <InputField title="Bathrooms" value={detailedAddress1} />
                      <img
                        onClick={() =>
                          setDetailedAddress1((prev) =>
                            inputFieldSetter("add", prev)
                          )
                        }
                        src={plusIcon}
                        className="ms-2 arithmetic-icon"
                        alt="plus"
                      />
                    </Col>
                    <Col md={6}>
                      <FormControl
                        control="input"
                        type="text"
                        name="address2"
                        border="1px solid #EFEFF4"
                        placeholder="Enter Address 2"
                        className={
                          formik.errors.propertyInfo &&
                          formik.touched.propertyInfo
                            ? "is-invalid"
                            : "customInput"
                        }
                      />
                    </Col>
                    <Col
                      className="input-section d-flex align-items-center"
                      sm={6}
                      md={4}
                    >
                      <InputField title="Bedroom" value={detailedAddress2} />
                      <img
                        src={plusIcon}
                        className="arithmetic-icon ms-2"
                        alt="plus"
                        onClick={() =>
                          setDetailedAddress2((prev) =>
                            inputFieldSetter("add", prev)
                          )
                        }
                      />
                    </Col>
                  </Row>
                  <Row className="propery-results align-items-center mt-3">
                    <TetraHeading>
                      Add Property Info for Better Results
                    </TetraHeading>
                    <Col md={6}>
                      <FormControl
                        control="select"
                        name="propertyInfo  "
                        border="1px solid #EFEFF4"
                        placeholder="Select Property"
                        className={
                          formik.errors.propertyInfo &&
                          formik.touched.propertyInfo
                            ? "is-invalid"
                            : "customInput"
                        }
                        options={options}
                      />
                    </Col>
                    <Col md={6} className="mb-2">
                      <FormControl
                        control="input"
                        type="text"
                        name="propertyInfo"
                        border="1px solid #EFEFF4"
                        placeholder="Property Info..."
                        className={
                          formik.errors.propertyInfo &&
                          formik.touched.propertyInfo
                            ? "is-invalid"
                            : "customInput"
                        }
                      />
                    </Col>
                  </Row>
                </>
              );
            }}
          </Formik>
          {/* <Editors/> */}
          <GenerateInfo />
          <FeatureDetails />
          <Gallery />
        </div>
        <div className="mt-3">
          <Row className="justify-content-end">
            <Col md={4} />
            <Col
              className="d-flex justify-content-end"
              md={{ span: 2, offset: 4 }}
            >
              <CustomButton
                bgcolor={lightGrey4}
                color="white"
                padding="8px 8px"
                width="100%"
                type="submit"
                title="Draft"
                margin="auto"
                border="none"
                fontSize="18px"
              />
            </Col>
            <Col
              className="d-flex justify-content-end mt-2 mt-md-0"
              md={{ span: 2 }}
            >
              <CustomButton
                bgcolor={PrimaryColor}
                color="white"
                padding="8px 8px"
                width="100%"
                type="submit"
                title="Submit"
                margin="auto"
                fontSize="18px"
                clicked={() => setIsModalVisible(true)}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </PropertyInfoStyle>
  );
};

export default PropertyInfo;
