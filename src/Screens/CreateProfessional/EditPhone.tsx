import logo from "../../assets/icons/ic_logo(1).svg";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { PrimaryColor } from "../../Components/GlobalStyle";
import EditPhoneStyle from "./style";
import FormControl from "../../Components/FormControl";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const EditPhone = () => {
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

  const verifyOtpNavigation = () => {
    navigate("/verify-otp");
  };
  return (
    <EditPhoneStyle>
      <div className="inner-container">
        <img src={logo} alt="logo" />
        <p className="message">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => console.log("e")}
        >
          {(formik) => {
            return (
              <div className="login-input-fields-field mt-2">
                <FormControl
                  control="input"
                  type="phone"
                  name="userName"
                  border="1px solid #EFEFF4"
                  placeholder="(617) 397 - 8483"
                  className={
                    formik.errors.password && formik.touched.password
                      ? "is-invalid"
                      : "customPasswordInput"
                  }
                />
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
            fontFamily="EnnVisionsMedium"
            fontSize="16px"
            clicked={verifyOtpNavigation}
          />
        </div>
        <div className="signup-text mt-3">
          <p> Don't have an account ?</p>
          <h6 className="ms-1">
            <Link to="/home">Sign Up</Link>
          </h6>
        </div>
      </div>
    </EditPhoneStyle>
  );
};

export default EditPhone;
