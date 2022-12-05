import { Formik } from "formik";
import logo from "../../assets/icons/ic_logo.svg";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { ImgContainer, PrimaryColor } from "../../Components/GlobalStyle";
import VerifyOtpStyle from "./style";
import * as Yup from "yup";
import FormControl from "../../Components/FormControl";
import { useNavigate } from "react-router-dom";
import AuthenticateText from "../../Components/AuthenticationText/Index";

const VerifyOtp = () => {
  const navigate = useNavigate();
  let initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required!")
      .matches(/^(\S+$)/g, "Username cannot contain blankspaces"),
    email: Yup.string().required("Email is required"),
  });

  const navigateToVerifyOtp = () => {
    navigate("/verify-otp");
  };
  return (
    <VerifyOtpStyle>
      <div className="inner-container">
        <ImgContainer src={logo} alt="logo" height="33px" width="164px" />
        <h6 className="title mb-0">Veriﬁcation codes OTP</h6>
        <p className="message">
          A verification codes has been sent to:
          <p className="number d-flex justify-content-center align-items-center mb-0">
            1 (617) 397-8483
            <span>
              <CustomButton
                bgcolor="transparent"
                color={PrimaryColor}
                padding="4px 8px"
                width="100%"
                type="button"
                title="Edit"
                margin="auto"
                fontSize="14px"
                fontFamily="EnnVisionsMedium"
                clicked={navigateToVerifyOtp}
              />
            </span>
          </p>
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => console.log("submit")}
        >
          {(formik) => {
            return (
              <div className="login-input-fields-field mt-2">
                <FormControl
                  control="input"
                  type="text"
                  name="userName"
                  border="1px solid #EFEFF4"
                  placeholder="_ _ - _ _"
                  className={
                    formik.errors.password && formik.touched.password
                      ? "is-invalid text-center"
                      : "customPasswordInput text-center"
                  }
                />
              </div>
            );
          }}
        </Formik>
        <p className="resend-box-time d-flex justify-content-between align-items-center">
          59s
          <span>
            <CustomButton
              bgcolor="transparent"
              color={PrimaryColor}
              padding="4px 8px"
              width="100%"
              type="button"
              title="RESEND"
              margin="auto"
              fontSize="14px"
              fontFamily="EnnVisionsMedium"
              clicked={() => console.log("resend")}
            />
          </span>
        </p>
        <div className="mt-3">
          <CustomButton
            bgcolor={PrimaryColor}
            color="white"
            padding="8px 8px"
            width="100%"
            type="submit"
            title="NEXT"
            margin="auto"
            fontSize="16px"
            clicked={() => navigate("/register")}
          />
        </div>
        <AuthenticateText
          title="Don't have an account ?"
          link="/register-phone"
          linkText="Sign Up"
          margin="10px 0 0 0"
        />
      </div>
    </VerifyOtpStyle>
  );
};

export default VerifyOtp;
