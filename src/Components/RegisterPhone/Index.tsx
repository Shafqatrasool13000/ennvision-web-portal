import { Formik } from "formik";
import logo from "../../assets/icons/ic_logo.svg";
import CustomButton from "../CustomButton/CustomButton";
import { ImgContainer, PrimaryColor } from "../GlobalStyle";
import RegisterPhoneStyle from "./style";
import * as Yup from "yup";
import FormControl from "../FormControl";
import { Link, useNavigate } from "react-router-dom";
import CustomInputNumber from "../CustomInputNumber/InputNumber";

const RegisterPhone = () => {
  const navigate = useNavigate();
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

  const navigateToVerifyOtp = () => {
    navigate("/verify-otp");
  };
  return (
    <RegisterPhoneStyle>
      <div className="inner-container">
        <ImgContainer src={logo} alt="logo" height="33px" width="164px" />
        <p className="message">
          Curabitur sit amet massa nunc. Fusce at tristique magna. Fusce eget
          dapibus dui.
        </p>
        <div className="mt-3">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={() => console.log("submit")}
          >
            {(formik) => {
              return (
                <div className="login-input-fields-field mt-2">
                  <CustomInputNumber />
                </div>
              );
            }}
          </Formik>
          <div className="mt-3">
            <CustomButton
              bgcolor={PrimaryColor}
              color="white"
              padding="8px 8px"
              width="100%"
              type="submit"
              title="SUBMIT"
              margin="auto"
              fontSize="16px"
              clicked={navigateToVerifyOtp}
            />
          </div>
        </div>
        <div className="signup-text mt-3">
          <p> Don't have an account ?</p>
          <h6 className="ms-1">
            <Link to="/verify-otp">Sign Up</Link>
          </h6>
        </div>
      </div>
    </RegisterPhoneStyle>
  );
};

export default RegisterPhone;
