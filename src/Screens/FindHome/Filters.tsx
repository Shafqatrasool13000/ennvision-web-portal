import { Formik } from "formik";
import * as Yup from "yup";
import { Form } from "antd";
import FormControl from "../../Components/FormControl";
import { Container } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required!")
    .email("Valid email address is required"),
  password: Yup.string()
    .required("Invalid credentials. Please try again!")
    .min(6, "Minimum six character is required"),
});

const Index = ({ logIn }: any) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1200: { items: 6 },
    1366: { items: 8 },
  };

  const onSubmit = (value: any) => {
    console.log(value, "value");
  };

  const filtersData = [
    "Select Areas",
    "All Residential",
    "Price Range",
    "Size Range",
    "Bedroom",
    "Bathroom",
    "Propsure Verified",
    "All Filters",
  ];
  const options = [
    {
      value: "text 1",
      label: "text 1",
    },
    {
      value: "text 2",
      label: "text 2",
    },
    {
      value: "text 3",
      label: "text 3",
    },
  ];

  return (
    <Container
      style={{
        marginTop: "70px",
      }}
    >
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
              autoComplete="off"
              // validateMessages={validationSchema}
            >
              <AliceCarousel
                mouseTracking
                disableButtonsControls
                disableDotsControls
                items={[
                  ...filtersData.map((name, index) => (
                    <div key={index} className="me-2">
                      <FormControl
                        control="select"
                        type="text"
                        name="location"
                        placeholder={name}
                        className={
                          formik.errors.email && formik.touched.email
                            ? "is-invalid"
                            : "customInput"
                        }
                        options={options}
                      />
                    </div>
                  )),
                ]}
                responsive={responsive}
                controlsStrategy="alternate"
              />
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default Index;
