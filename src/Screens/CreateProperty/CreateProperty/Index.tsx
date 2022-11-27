import { useState } from "react";
import CustomButton from "../../../Components/CustomButton/CustomButton";
import { Formik } from "formik";
import { Form, Modal } from "antd";
import ic_logo from "../../../assets/icons/ic_logo(1).svg";
import { useNavigate, useParams } from "react-router-dom";
import FormControl from "../../../Components/FormControl";
import ListProperty1Styled from "./style";
import { Col, Container, Row } from "react-bootstrap";
import Headbar from "../../../Components/Headbar/Headbar";
import searchIcon from "../../../assets/icons/ic_add_property_search.svg";
import {
  BlackDot,
  PrimaryColor,
  TertiraryHeading,
  UnderlineRed,
} from "../../../Components/GlobalStyle";
import MapBox from "../../../Components/MapBox/Index";

const initialValues = {
  id: 4,
  name: "",
  coordinate: "72.718292,33.912812929",
  channel: "IOS",
  countryId: "",
  cityId: "",
  stateId: "",
  address: "",
};

const CreateProperty = () => {
  const { locationsId } = useParams();
  const [isModalVisibled, setIsModalVisibled] = useState(false);
  const navigate = useNavigate();

  const handleModalCancel = () => {
    setIsModalVisibled(false);
  };

  return (
    <ListProperty1Styled>
      <Modal
        visible={isModalVisibled}
        footer={null}
        onCancel={handleModalCancel}
        centered={true}
      >
        <div className="login-container-card text-center">
          <div className="login-container-card-logo">
            <img src={ic_logo} alt="ic_logo" className="logo" />
          </div>
          <h5 className="question-text mt-3 fs-5">
            Location Updated Successfull
          </h5>
        </div>
      </Modal>
      <Container>
        <Row>
          <Col md={6} className="left-side">
            <TertiraryHeading>List a Property</TertiraryHeading>
            <div className="d-flex">
              <UnderlineRed />
              <BlackDot />
            </div>
            <Headbar title="Start List A Property" />
            <div className="left-side-inner-section">
              <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={() => console.log("submit")}
              >
                {({ formik, form }: any) => {
                  return (
                    <Form
                      style={{
                        height: "100%",
                      }}
                      name="basic"
                      // onFinish={formik.handleSubmit}
                      // onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <div
                        className="left-side-input-fields"
                        style={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <FormControl
                          control="searchSelect"
                          type="input"
                          name="name"
                          placeholder="Location name"
                          // className={
                          //   formik.errors.name && formik.touched.name
                          //     ? "is-invalid"
                          //     : "customInput"
                          // }
                          icon={searchIcon}
                        />
                        <div>
                          <FormControl
                            control="input"
                            type="text"
                            name="streetNumber"
                            label="Street Number"
                            placeholder="Street Number"
                            // className={
                            //   formik.errors.name && formik.touched.name
                            //     ? "is-invalid"
                            //     : "customInput"
                            // }
                          />
                        </div>
                        <FormControl
                          control="input"
                          name="streetName"
                          label="Street Name"
                          placeholder="Street Name"
                          // handleSelectValue={handleSelectCountry}
                          // className={
                          //   formik.errors.countryId && formik.touched.countryId
                          //     ? "is-invalid"
                          //     : "customPasswordInput"
                          // }
                          defaultValue={locationsId !== "createNew"}
                        />
                        <FormControl
                          control="input"
                          label="Postal Code"
                          name="postalCode"
                          placeholder="Postal Code"
                          // handleSelectValue={handleSelectedState}
                          // className={
                          //   formik.errors.stateId && formik.touched.stateId
                          //     ? "is-invalid"
                          //     : "customInput"
                          // }
                          defaultValue={locationsId !== "createNew"}
                        />
                        <div>
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
                            clicked={() => navigate("/create-property-1")}
                          />
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </Col>
          <Col md={6} className="right-side mt-3 mt-md-0">
            <MapBox width="640px" height="540px" />
          </Col>
        </Row>
      </Container>
    </ListProperty1Styled>
  );
};

export default CreateProperty;
