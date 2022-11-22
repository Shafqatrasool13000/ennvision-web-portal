import { Formik } from "formik";
import * as Yup from "yup";
import {Form } from "antd";
import FormControl from "../../Components/FormControl";
import { useNavigate } from "react-router-dom";
import GenericService from "../../Services/GenericService";
import { API_URL } from "../../Services/config";
import { toast } from "react-toastify";
import {Container} from "react-bootstrap";
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

const Index = ({ logIn }) => {
  const navigation = useNavigate();
  const genericService = new GenericService();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1200: { items: 6 },
    1366:{items:8}
  };

  const onSubmit = (value) => {
    console.log(value, "value");
    genericService
      .post(`${API_URL}auth/signin`, value)
      .then((msg) => {
        if (msg.resultCode == 200) {
          logIn();
          localStorage.setItem("userData", JSON.stringify(msg.data));
          navigation("/my-home");
        } else {
          toast(msg.message, "top-right");
        }
      })
      .catch((error) => {
        console.log(error, "error");
        if (error.response.status == 401) {
          toast("login credentials is invalid", "top-right");
        }
      });
  };

 const filtersData=[
  'Select Areas','All Residential','Price Range','Size Range','Bedroom','Bathroom','Propsure Verified','All Filters'
 ]

  return (
    <Container style={{
      marginTop:'70px'
    }}>
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
              validateMessages={validationSchema}
            >
                <AliceCarousel
                  mouseTracking
                  disableButtonsControls
                  disableDotsControls
                  items={[ 
                  ...filtersData.map((name,index)=>(
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
                    options={[{ id: "0", name: 'City 1' }, { id: "1", name: 'City 2' },]}
                  />
                 </div>
                  ))
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