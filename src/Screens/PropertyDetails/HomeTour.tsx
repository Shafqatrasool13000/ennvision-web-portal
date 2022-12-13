import { Form } from "antd";
import { Formik } from "formik";
import CustomButton from "../../Components/CustomButton/CustomButton";
import FormController from "../../Components/FormControl";
import { PrimaryColor, pureDark } from "../../Components/GlobalStyle";
import { HomeTourStyle } from "./style";
import * as Yup from "yup";

const HomeTour = () => {
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => console.log("submit")}
    >
      {(formik) => {
        return (
          <Form
            style={{
              height: "100%",
            }}
            name="basic"
            onFinish={formik.handleSubmit}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <HomeTourStyle>
              <h6 className="title">Request a Home Tour</h6>
              <div className="d-flex gap-3">
                <CustomButton
                  bgcolor="transparent"
                  color={PrimaryColor}
                  padding="8px"
                  width="100%"
                  type="submit"
                  title="In Person"
                  fontSize="14px"
                  fontFamily="EnnVisions"
                  //   clicked={() => navigate("/")}
                />
                <CustomButton
                  bgcolor="transparent"
                  color={pureDark}
                  padding="8px"
                  width="100%"
                  type="submit"
                  title="Virtual"
                  fontSize="14px"
                  fontFamily="EnnVisions"
                  //   clicked={() => navigate("/")}
                />
              </div>
              <FormController
                control="dateTime"
                type="text"
                name="to"
                placeholder="02,June,2022 2:30 PM"
                className=""
                // {
                //   formik.errors.to && formik.touched.to
                //     ? "is-invalid"
                //     : "customInput"
                // }
              />
              <div className="mt-3">
                <CustomButton
                  bgcolor="transparent"
                  color={PrimaryColor}
                  padding="8px"
                  width="100%"
                  type="submit"
                  title="Request a Home Tour"
                  fontSize="14px"
                  fontFamily="EnnVisions"
                  //   clicked={() => navigate("/")}
                />
              </div>
              <p className="mt-2 text-center price-text mb-0">
                it 's free with no obligation -Cancel anytime
              </p>
            </HomeTourStyle>
          </Form>
        );
      }}
    </Formik>
  );
};

export default HomeTour;
