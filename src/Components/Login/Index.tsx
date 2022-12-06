import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form } from "antd";
import FormControl from "../../Components/FormControl";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { PrimaryColor } from "../../Components/GlobalStyle";
import { Helmet } from "react-helmet";
import scroll_up from "../../assets/icons/ic_scroll_to_top .svg";
import ic_logo from "../../assets/icons/ic_logo.svg";
import LoginStyle from "./style";
import AuthNavbar from "../Navbar/AuthNavbar";

let initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  password: Yup.string().required("Password is required!"),
  email: Yup.string()
    .email("Email should be valid")
    .required("Email is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = (value: any) => {};

  const navigateToDashboard = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <AuthNavbar />
      <span className="arrow-box">
        <img src={scroll_up} alt="scroll-up" />
      </span>
      <LoginStyle>
        <div className="login-container-card">
          <div className="login-container-card-logo">
            <img src={ic_logo} alt="ic_logo" className="logo" />
          </div>
          <div className="login-container-card-form">
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
                      <div>
                        <FormControl
                          control="input"
                          type="text"
                          name="email"
                          label="Email"
                          placeholder="Email Address"
                          fontFamily="EnnVisionsMedium"
                          labelMarginBottom="8px"
                          className={
                            formik.errors.email && formik.touched.email
                              ? "is-invalid"
                              : "customInput"
                          }
                        />
                      </div>
                      <div className="login-input-fields-field">
                        <FormControl
                          control="password"
                          type="text"
                          name="password"
                          label="Password"
                          placeholder="Password"
                          fontFamily="EnnVisionsMedium"
                          labelMarginBottom="8px"
                          className={
                            formik.errors.password && formik.touched.password
                              ? "is-invalid"
                              : "customPasswordInput"
                          }
                        />
                      </div>
                      <p className="forget_password mb-0">
                        <Link to="/forgetPassword" className="forget_password">
                          Forgot your password?
                        </Link>
                      </p>
                      <div className="remember-password d-flex mb-2 mt-2 align-items-center">
                        <input type="checkbox" name="" id="" />
                        <p className="remember-password-text mb-0 ms-2">
                          Remember me
                        </p>
                      </div>
                      <CustomButton
                        bgcolor={PrimaryColor}
                        color="white"
                        padding="8px"
                        width="100%"
                        type="submit"
                        title="LOG IN"
                        fontSize="14px"
                        fontFamily="EnnVisions"
                        clicked={navigateToDashboard}
                      />
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="signup-text mt-3">
            <p> Don't have an account ?</p>
            <h6 className="ms-1">
              <Link to="/register-phone">Sign Up</Link>
            </h6>
          </div>
        </div>
      </LoginStyle>
    </>
  );
};

export default Login;
