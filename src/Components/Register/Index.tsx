import { Formik } from "formik";
import * as Yup from "yup";
import { Form, InputNumber } from "antd";
import FormControl from "../../Components/FormControl";
import CustomButton from "../../Components/CustomButton/CustomButton";
import RegisterStyle from "./style";
import { useNavigate } from "react-router-dom";
import { PrimaryColor } from "../../Components/GlobalStyle";
import { Helmet } from "react-helmet";
import flag from "../../assets/icons/ic_flag.svg";
import AuthenticationText from "../AuthenticationText/Index";
import CustomModal from "../Modal/CustomModal";
import Confirmed from "../Confirmed/Index";
import { useState } from "react";

type registerValueTypes = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userName: string;
  password: string;
  confirmPassword: string;
};

const initialValues: registerValueTypes = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  userName: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  email: Yup.string()
    .email("Email should be valid")
    .required("Email is required"),
  phone: Yup.string().required("Phone is Required"),
  userName: Yup.string()
    .required("Password is required!")
    .matches(/^(\S+$)/g, "Username cannot contain blankspaces"),
  password: Yup.string()
    .required("Password is required!")
    .matches(/^(\S+$)/g, "Username cannot contain blankspaces"),
  confirmPassword: Yup.string()
    .required("Password is required!")
    .matches(/^(\S+$)/g, "Username cannot contain blankspaces"),
});

const Register = () => {
  const navigate = useNavigate();
  const onSubmit = (value: any) => {};
  const [isModalVisible, setIsModalVisible] = useState(false);

  const userListNavigator = () => {
    navigate("/user-list");
  };

  return (
    <>
      <Helmet>
        <title>Create User</title>
      </Helmet>
      <CustomModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <Confirmed />
      </CustomModal>
      <RegisterStyle>
        <div className="inner-container-card">
          <div className="inner-container-card-form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form
                    name="basic"
                    onFinish={formik.handleSubmit}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    // validateMessages={validationSchema}
                  >
                    <div className="login-input-fields">
                      <FormControl
                        control="input"
                        type="text"
                        name="firstName"
                        border="1px solid #EFEFF4"
                        placeholder="First Name"
                        className={
                          formik.errors.firstName && formik.touched.firstName
                            ? "is-invalid"
                            : "customInput"
                        }
                      />
                      <div>
                        <FormControl
                          control="input"
                          type="text"
                          name="lastName"
                          border="1px solid #EFEFF4"
                          placeholder="Last Name"
                          className={
                            formik.errors.lastName && formik.touched.lastName
                              ? "is-invalid"
                              : "customInput"
                          }
                        />
                      </div>

                      <div className="mt-2">
                        <InputNumber
                          style={{
                            border: "none",
                            height: "40px",
                            marginBottom: "4px",
                          }}
                          className="w-100 border-0"
                          controls={false}
                          name="phone"
                          addonBefore={
                            <div
                              style={{ width: "40px", height: "40px" }}
                              className="d-flex align-items-center"
                            >
                              <img src={flag} alt="flag" className="me-2" />
                              <p className="m-0">+1</p>
                            </div>
                          }
                        />
                      </div>

                      <div className="login-input-fields-field mt-2">
                        <FormControl
                          control="password"
                          type="text"
                          name="password"
                          border="1px solid #EFEFF4"
                          placeholder="Password"
                          className={
                            formik.errors.password && formik.touched.password
                              ? "is-invalid"
                              : "customPasswordInput"
                          }
                        />
                      </div>
                      <div className="login-input-fields-field mt-2">
                        <FormControl
                          control="password"
                          type="text"
                          name="confirmPassword"
                          border="1px solid #EFEFF4"
                          placeholder="Password"
                          className={
                            formik.errors.confirmPassword &&
                            formik.touched.confirmPassword
                              ? "is-invalid"
                              : "customPasswordInput"
                          }
                        />
                      </div>
                      <div className="mt-2">
                        <CustomButton
                          bgcolor={PrimaryColor}
                          color="white"
                          padding="11px 8px"
                          width="100%"
                          type="submit"
                          title="Register"
                          fontSize="16px"
                          clicked={() => setIsModalVisible(true)}
                        />
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <AuthenticationText
            link="/login"
            title="Already registered?"
            linkText="Log in here"
            margin="10px 0 0 0"
          />
        </div>
      </RegisterStyle>
    </>
  );
};

export default Register;
