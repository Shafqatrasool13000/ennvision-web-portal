import { useState } from "react";
import { CreatePost4Style } from "./style";
import post from "../../assets/Image/ic_image_2.png";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { PrimaryColor } from "../../Components/GlobalStyle";
import icon1 from "../../assets/icons/ic_newsfeed_like.svg";
import icon2 from "../../assets/icons/ic_newsfeed_saved.svg";
import icon3 from "../../assets/icons/ic_newsfeed_sent.svg";
import { Col, Form, Row } from "react-bootstrap";
import FormControl from "../../Components/FormControl";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomModal from "../../Components/Modal/CustomModal";
import Confirmed from "../../Components/Confirmed/Index";

const Post_List5 = () => {
  const [isModalVisib, setIsModalVisible] = useState(false);

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
      .required("Email is required"),
  });

  return (
    <CreatePost4Style>
      <CustomModal
        isModalVisible={isModalVisib}
        setIsModalVisible={setIsModalVisible}
      >
        <Confirmed />
      </CustomModal>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => console.log("e")}
      >
        {(formik) => (
          <div className="inner-section">
            <div className="choose-section d-flex flex-wrap justify-content-between">
              <p className="gallery mt-1">Create Post</p>
              <div className="choose-section-icons mt-xs-2 mt-sm-0">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
              </div>
            </div>
            <Row className="justify-content-center align-items-center">
              <Col md={6}>
                <div className="left-side text-center">
                  <img src={post} alt="" className="main-img rounded" />

                  <div className="gallery-imgs">
                    <p className="say-something">
                      Say something about these photos...
                    </p>
                    <Row>
                      <Col className="p-1" xs={3}>
                        <img src={post} alt="" className="post-img" />
                      </Col>
                      <Col className="p-1" xs={3}>
                        <img src={post} alt="" className="post-img" />
                      </Col>
                      <Col className="p-1" xs={3}>
                        <img src={post} alt="" className="post-img" />
                      </Col>
                      <Col className="p-1" xs={3}>
                        <div className="position-relative">
                          {" "}
                          <img src={post} alt="" />
                          <p className="position-absolute more-img-text">3+</p>
                          <div className="overlay"></div>
                        </div>
                      </Col>
                    </Row>
                    <div className="my-2">
                      <CustomButton
                        bgcolor={PrimaryColor}
                        color="white"
                        padding="8px 8px"
                        width="100%"
                        type="submit"
                        title="Post Now"
                        margin="auto"
                        fontSize="18px"
                        fontFamily="EnnVisionsMedium"
                        clicked={() => setIsModalVisible(true)}
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} className="mt-3 mt-md-0 right-section">
                <FormControl
                  control="textarea"
                  type="email"
                  name="fullName"
                  border="1px solid #EFEFF4"
                  placeholder="Write a Caption"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "is-invalid"
                      : "customInput"
                  }
                />
                <div className="tag-section">
                  <p className="mini-title pb-2 btm-border">Tag People</p>
                  <div className="add-location mt-2">
                    <p className="mini-title mb-1 border-0">Add Location</p>
                    <div className="locations d-flex justify-content-between mt-2 flex-wrap">
                      <button className="mt-2 ms-2 ms-sm-0 mt-sm-0">
                        Jauharabad
                      </button>
                      <button className="mt-2 ms-2 ms-sm-0 mt-sm-0">
                        Islamabad
                      </button>
                      <button className="mt-2 ms-2 ms-sm-0 mt-sm-0">
                        OshaToronto, Ontorio
                      </button>
                      <button className="mt-2 ms-2 ms-sm-0 mt-sm-0">
                        Osha
                      </button>
                    </div>
                  </div>
                </div>
                <div className="request-section mt-2 pb-2">
                  <div className="d-flex justify-content-between btm-border">
                    <p className="text mini-title mb-2">Contact Request</p>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>

                  <div className="d-flex justify-content-between post-request mt-2">
                    <p className="text mini-title mb-0">Post Boost</p>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                </div>
                <p className="advanced-title mt-2 mb-1">Advanced settings</p>
                <div className="advanced-settings ">
                  <div className="d-flex justify-content-between">
                    <p className=" mini-title mb-0">
                      Hide like and view counts in this post
                    </p>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Formik>
    </CreatePost4Style>
  );
};

export default Post_List5;
