import {
  BlackDot,
  tertiaryGrey11,
  TertiraryHeading,
  UnderlineBlue,
} from "../../Components/GlobalStyle";
import { ProInputsStyle } from "./style";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormControl from "../../Components/FormControl";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inputs = () => {
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
    <ProInputsStyle className="mt-5">
      <TertiraryHeading className="ms-3">
        Become a Professional
      </TertiraryHeading>
      <div className="ms-3">
        <UnderlineBlue />
        <BlackDot />
      </div>
      <div className="inputs">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => console.log("e")}
        >
          {(formik) => {
            return (
              <Form
                name="basic"
                // onFinish={formik.handleSubmit}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                // validateMessages={validationSchema}
              >
                <Row className="login-input-fields">
                  <Col sm={6} md={4} className="mt-3">
                    <FormControl
                      control="input"
                      type="email"
                      name="fullName"
                      border="1px solid #EFEFF4"
                      label="Full Name"
                      placeholder="Full Name"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-3">
                    <FormControl
                      control="input"
                      type="email"
                      name="email"
                      border="1px solid #EFEFF4"
                      label="email"
                      placeholder="email"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-3">
                    <FormControl
                      control="input"
                      type="text"
                      name="mobile"
                      border="1px solid #EFEFF4"
                      label="Mobile"
                      placeholder="Mobile"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-3">
                    <FormControl
                      control="input"
                      type="text"
                      name="lastName"
                      border="1px solid #EFEFF4"
                      label="Select a professions"
                      placeholder="Select a professions"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-3">
                    <FormControl
                      control="input"
                      type="text"
                      name="firstName"
                      border="1px solid #EFEFF4"
                      label="Business Name"
                      placeholder="Business Name"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-3">
                    <FormControl
                      control="input"
                      type="email"
                      name="email"
                      label="Website"
                      border="1px solid #EFEFF4"
                      placeholder="Website"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-3">
                    <FormControl
                      control="input"
                      type="text"
                      name="firstName"
                      border="1px solid #EFEFF4"
                      label="Business started"
                      placeholder="Business started"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-3">
                    <FormControl
                      control="input"
                      type="text"
                      name="lastName"
                      border="1px solid #EFEFF4"
                      label="Qualifications"
                      placeholder="Qualifications"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-3">
                    <FormControl
                      control="input"
                      type="email"
                      name="email"
                      border="1px solid #EFEFF4"
                      label="Document"
                      placeholder="Document"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>

                  <div className="mt-3">
                    <Link
                      to="/professional-list"
                      className="w-100 ms-auto d-flex justify-content-md-end justify-content-center"
                    >
                      <CustomButton
                        bgcolor={`${tertiaryGrey11}`}
                        color="white"
                        padding="6px 8px"
                        width="30%"
                        type="submit"
                        title="SUBMIT"
                        fontSize="16px"

                        // clicked={navigateToDashboard}
                      />
                    </Link>
                  </div>
                </Row>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ProInputsStyle>
  );
};

export default Inputs;
