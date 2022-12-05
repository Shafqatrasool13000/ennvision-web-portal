import {
  BlackDot,
  lightGrey2,
  PrimaryColor,
  TertiraryHeading,
  UnderlineRed,
} from "../../Components/GlobalStyle";
import { ProInputsStyle } from "./style";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormControl from "../../Components/FormControl";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import doc from "../../assets/icons/ic_add_property_add_card.svg";
import { SelectOutlined } from "@ant-design/icons";

const Inputs = () => {
  const navigate = useNavigate();

  let initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    // password: Yup.string()
    //   .required("Password is required!")
    //   .matches(/^(\S+$)/g, "Username cannot contain blankspaces"),
    // email: Yup.string()
    //   .email("Email should be valid")
    //   .required("Email is required"),
  });
  const navigateToProList = () => {
    navigate("/professional-list");
  };

  return (
    <ProInputsStyle className="mt-3">
      <TertiraryHeading className="ms-3 mt-4">
        Become a Professional
      </TertiraryHeading>
      <div className="ms-3">
        <UnderlineRed />
        <BlackDot />
      </div>
      <div className="inputs mt-3 mx-2">
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
                  <Col sm={6} md={4} className="mt-1 mt-sm-0">
                    <FormControl
                      control="select"
                      type="text"
                      name="lastName"
                      padding="3px"
                      border={`1px solid ${lightGrey2}`}
                      label="Select a professions"
                      placeholder="Select a professions"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-1 mt-sm-0">
                    <FormControl
                      control="input"
                      type="text"
                      name="firstName"
                      border={`1px solid ${lightGrey2}`}
                      label="Business Name"
                      placeholder="Business Name"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-1 mt-sm-0">
                    <FormControl
                      control="input"
                      type="email"
                      name="email"
                      label="Website"
                      border={`1px solid ${lightGrey2}`}
                      placeholder="Website"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-1 mt-sm-0">
                    <FormControl
                      control="date"
                      type="text"
                      name="firstName"
                      border={`1px solid ${lightGrey2}`}
                      label="Business started"
                      placeholder="Business started"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-1 mt-sm-0">
                    <FormControl
                      control="input"
                      type="text"
                      name="lastName"
                      border={`1px solid ${lightGrey2}`}
                      label="Qualifications"
                      placeholder="Qualifications"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col sm={6} md={4} className="mt-1 mt-sm-0">
                    <FormControl
                      control="input"
                      type="document"
                      name="email"
                      label="Document"
                      padding="7px"
                      placeholder="Document"
                      border={`1px solid ${lightGrey2}`}
                      suffix={<SelectOutlined />}
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <div className="mt-2 d-flex justify-content-end">
                    <CustomButton
                      bgcolor={`${PrimaryColor}`}
                      color="white"
                      padding="7px 8px"
                      width="auto"
                      type="submit"
                      title="Become A Professional"
                      fontSize="16px"
                      clicked={navigateToProList}
                    />
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
