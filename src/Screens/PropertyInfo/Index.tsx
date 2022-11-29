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
import { PropertyInfoStyled } from "./style";
import FormControl from "../../Components/FormControl";
import { Formik } from "formik";
import * as Yup from "yup";
import emptyBox from "../../assets/icons/ic_add_property_type.svg";
import Gallery from "./AdditionalDetails";
import FeatureDetails from "./FeatureDetails";
import GenerateInfo from "./GenerateInfo";
import plusIcon from "../../assets/icons/ic_add_property_address_add_field.svg";
import minusIcon from "../../assets/icons/ic_add_property_address_remove_field.svg";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomModal from "../../Components/Modal/CustomModal";
import Confirmed from "../../Components/Confirmed/Index";
// import Editors from "./Editor";

const Index = () => {
  const [apartment, setApartment] = useState("Rent");
  const [isModalVisib, setIsModalVisible] = useState(false);
  const apartmentHandler = () => {
    setApartment(apartment === "Rent" ? "Buy" : "Rent");
  };

  let initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required!")
      .matches(/^(\S+$)/g, "Username cannot contain blankspaces"),
    email: Yup.string()
      .email("Email should be valid")
      .required("Email isGenerateInfo required"),
  });

  const propertyTypes = ["Residential", "Commercial", "Plot"];

  return (
    <PropertyInfoStyled>
      <CustomModal
        isModalVisible={isModalVisib}
        setIsModalVisible={setIsModalVisible}
      >
        <Confirmed />
      </CustomModal>
      <div className="container">
        <TertiraryHeading className="ms-3">
          Fill Property Information
        </TertiraryHeading>
        <div className="ms-3">
          <UnderlineRed />
          <BlackDot />
        </div>
      </div>
      <Container className="inner-section">
        <div className="heading-bar">
          <h2 className="heading-bar-title">Sell or rent out your property</h2>
          <p className="heading-bar-subtitle">
            Enter your property details below to get is listed on our portal and
            receive lead on your property
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
                    <div className="purchase-btns d-flex justify-content-between gap-3  w-100">
                      <button
                        className={`purchase-btns-rent w-50 ${
                          apartment === "Rent" ? "active" : ""
                        }`}
                        onClick={apartmentHandler}
                      >
                        RENT
                      </button>
                      <button
                        className={`purchase-btns-buy w-50 ${
                          apartment === "Rent" ? "" : "active"
                        }`}
                        onClick={apartmentHandler}
                      >
                        BUY
                      </button>
                    </div>
                  </Col>
                  <Col md={6}>
                    <TetraHeading>Property Title</TetraHeading>
                    <div className="title">
                      <div className="mt-3">
                        <FormControl
                          control="input"
                          type="email"
                          name="fullName"
                          border="1px solid #EFEFF4"
                          placeholder="Full Name"
                          className={
                            formik.errors.email && formik.touched.email
                              ? "is-invalid"
                              : "customInput"
                          }
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <button className="generate-btn">
                      Use generated title
                    </button>
                  </Col>
                </Row>
                <Row className="property-types align-items-center">
                  <Col md={6} className="type">
                    <h6 className="heading">Type of Property</h6>
                    <div className="types-radio d-flex type gap-3 w-100 mt-3">
                      {propertyTypes.map((title, index) => (
                        <div key={index} className="d-flex">
                          <img src={emptyBox} alt="emptyBox" />
                          <p className="type-text mb-0 ms-3">{title}</p>
                        </div>
                      ))}
                    </div>
                  </Col>

                  <Col md={6}>
                    <h6 className="heading mb-0">Sub-type of Property</h6>
                    <div className="title">
                      <div>
                        <FormControl
                          control="select"
                          type="email"
                          name="fullName"
                          border="1px solid #EFEFF4"
                          placeholder="Full Name"
                          className={
                            formik.errors.email && formik.touched.email
                              ? "is-invalid"
                              : "customInput"
                          }
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="place-located align-items-center">
                  <Col md={6}>
                    <TetraHeading>Where's your place located.</TetraHeading>
                    <FormControl
                      control="input"
                      type="email"
                      name="fullName"
                      border="1px solid #EFEFF4"
                      placeholder="Full Name"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col md={3}>
                    <TetraHeading>Select Area</TetraHeading>

                    <FormControl
                      control="select"
                      type="email"
                      name="fullName"
                      border="1px solid #EFEFF4"
                      placeholder="Full Name"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col md={3}>
                    <TetraHeading>Enter New Area</TetraHeading>
                    <FormControl
                      control="select"
                      type="email"
                      name="fullName"
                      border="1px solid #EFEFF4"
                      placeholder="Full Name"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                </Row>
                <Row className="address-details align-items-center mt-3">
                  <TetraHeading>Detailed Address</TetraHeading>
                  <Col md={6}>
                    <FormControl
                      control="input"
                      type="email"
                      name="fullName"
                      border="1px solid #EFEFF4"
                      placeholder="Full Name"
                      className={
                        formik.errors.email && formik.touched.email
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
                    <FormControl
                      control="input"
                      type="input"
                      name="fullName"
                      border="1px solid #EFEFF4"
                      placeholder="Year Furnished"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                    <img src={minusIcon} className="mt-1 ms-2" alt="plus" />
                  </Col>
                  <Col md={6}>
                    <FormControl
                      control="input"
                      type="email"
                      name="fullName"
                      border="1px solid #EFEFF4"
                      placeholder="Full Name"
                      className={
                        formik.errors.email && formik.touched.email
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
                    <FormControl
                      control="input"
                      type="input"
                      name="fullName"
                      border="1px solid #EFEFF4"
                      placeholder="Year Furnished"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                    <img src={plusIcon} className="mt-1 ms-2" alt="plus" />
                  </Col>
                </Row>
                <Row className="propery-results align-items-center mt-3">
                  <TetraHeading>
                    Add Property Info for Better Results
                  </TetraHeading>
                  <Col md={6}>
                    <FormControl
                      control="select"
                      type="email"
                      name="fullName"
                      border="1px solid #EFEFF4"
                      placeholder="Full Name"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>

                  <Col md={6}>
                    <FormControl
                      control="input"
                      type="email"
                      name="fullName"
                      border="1px solid #EFEFF4"
                      placeholder="Full Name"
                      className={
                        formik.errors.email && formik.touched.email
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
      </Container>
      <Container className="mt-3">
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
      </Container>
    </PropertyInfoStyled>
  );
};

export default Index;
