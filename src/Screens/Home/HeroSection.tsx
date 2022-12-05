import { useContext, useState } from "react";
import { HeroSectionStyled } from "./style";
import Navbar from "../../Components/Navbar/Index";
import { Button, Col, Container, Row } from "react-bootstrap";
import search_icon from "../../assets/icons/ic_search.svg";
import FormikController from "../../Components/FormControl";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Filters from "../../Components/Filters/Index";
import { ContextApiData } from "../../utils/CreateContext";
import { SelectProps } from "antd";

const HeroSection = () => {
  const [apartment, setApartment] = useState("Rent");
  const [cities, setCities] = useState<any>([]);
  console.log({ cities });

  const { typeSelect, setIsShowProperty, isShowProperty } =
    useContext(ContextApiData);

  const apartmentHandler = () => {
    setApartment(apartment === "Rent" ? "Buy" : "Rent");
  };
  let initialValues = {
    location: "",
    propertyType: "",
  };

  const validationSchema = Yup.object({
    location: Yup.string().required("Location is required!"),
    propertyType: Yup.string().required("Property Type is required!"),
  });

  const options: SelectProps["options"] = [
    {
      value: "Lahore",
      label: "Lahore",
    },
    {
      value: "Islamabad",
      label: "Islamabad",
    },
    {
      value: "Rawalpindi",
      label: "Rawalpindi",
    },
    {
      value: "Karachi",
      label: "Karachi",
    },
    {
      value: "Okara",
      label: "Okara",
    },
    {
      value: "Chakwal",
      label: "Chakwal",
    },
    {
      value: "Chunian",
      label: "Chunian",
    },
  ];

  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  const handleSubmit = (values: any) => {
    console.log({ values }, "formik values");
  };

  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <HeroSectionStyled>
        {/* <div className='position-absolute w-100' style={{
            bottom: '2%'
            }}>
            <SocialFooter />
          </div> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {(formik) => {
            return (
              <Form
                name="basic"
                // onFinish={formik.handleSubmit}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="inner-container d-flex align-items-center flex-column justify-content-center">
                  <h4 className="inner-container-main-heading">
                    <span> Own the way you sell your home</span>
                    <span className="d-block">
                      Only with <span className="house-up">HouseUp </span>
                    </span>
                  </h4>
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
                  <div className="position-relative w-100 mx-2 mt-3">
                    <Row className="location-select-section w-100 mx-auto p-3 align-items-center">
                      <Col
                        sm={6}
                        className="location text-center text-sm-start"
                      >
                        <h5 className="title">Location</h5>
                        <FormikController
                          control="multiSelect"
                          type="text"
                          name="location"
                          border="1px solid #EFEFF4"
                          // label="City, Area, etc"
                          placeholder="City, Area, etc"
                          // defaultValue={["Lahore"]}
                          onChange={handleChange}
                          formik={formik}
                          options={options}
                          setCities={setCities}
                          className=""
                        />
                      </Col>
                      <Col
                        sm={6}
                        className="property-type d-flex justify-content-sm-between justify-content-center align-items-center mt-2 mt-sm-0"
                      >
                        <div className="left-section ps-md-4 w-100">
                          <h5 className="title">Property Type</h5>
                          <FormikController
                            control="input"
                            type="text"
                            name="propertyType"
                            border="1px solid #EFEFF4"
                            // label="All Residentials"
                            placeholder="All Residentials"
                            value={typeSelect}
                            // defaultValue={typeSelect}
                            className=""
                          />
                        </div>
                        <Button
                          disabled={cities.length == 0 || !typeSelect}
                          onClick={() => setIsShowProperty((prev) => !prev)}
                          className="search-box ms-2 mt-3 d-flex justify-content-center align-items-center"
                        >
                          <img src={search_icon} alt="search" />
                        </Button>
                      </Col>
                    </Row>
                    <div
                      className={`position-absolute w-100 mt-2 d-flex justify-content-center ${
                        isShowProperty ? "d-block mx-auto" : "d-none"
                      }`}
                    >
                      <Filters />
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </HeroSectionStyled>
    </>
  );
};

export default HeroSection;
