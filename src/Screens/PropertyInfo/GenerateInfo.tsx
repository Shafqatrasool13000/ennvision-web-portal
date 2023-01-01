import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import Headbar from "../../Components/Headbar/Headbar";
import { GenerateInfoStyle } from "./style";
import FormControl from "../../Components/FormControl";
import { Formik } from "formik";
import plusIcon from "../../assets/icons/ic_add_property_address_add_field.svg";
import minusIcon from "../../assets/icons/ic_add_property_address_remove_field.svg";
import InputField from "../../Components/InputField/InputField";

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

type additionalInputsType = {
  title: string;
  name: string;
  value: string | number;
};

const GenerateInfo = () => {
  const [additionalInputs, setAdditionalInputs] = useState<
    additionalInputsType[]
  >([
    { title: "Bedrooms", name: "bedroom", value: "0" },
    { title: "Bathroom", name: "bathroom", value: "0" },
    { title: "Drawing Rooms", name: "drawingRooms", value: "0" },
    { title: "Bath", name: "bath", value: "0" },
    { title: "Dining Room", name: "diningRoom", value: "0" },
    { title: "Store Rooms", name: "storeRooms", value: "0" },
    { title: "Kitchens", name: "kitchens", value: "0" },
    { title: "Servant Rooms", name: "servantRooms", value: "0" },
    { title: "Parking Space", name: "parkingSpace", value: "0" },
  ]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required!")
      .matches(/^(\S+$)/g, "Username cannot contain blankspaces"),
    email: Yup.string()
      .email("Email should be valid")
      .required("Email isGenerateInfo required"),
  });

  const additionalInputsHandler = (action: string, index: number) => {
    const data = [...additionalInputs];

    if (action == "add") {
      data[index].value = +data[index].value + 1;
    } else {
      if (data[index].value == 0) {
        return 0;
      }
      data[index].value = +data[index].value - 1;
    }
    setAdditionalInputs(data);
  };
  return (
    <GenerateInfoStyle>
      <Headbar title="Property Generate Info" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => console.log("submit")}
      >
        {(formik) => {
          return (
            <Row className="justify-content-center align-items-center">
              <Col className="input-section" sm={6} md={4}>
                <FormControl
                  control="select"
                  type="email"
                  name="fullName"
                  border="1px solid #EFEFF4"
                  placeholder="Year Build"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "is-invalid"
                      : "customInput"
                  }
                  options={options}
                />
              </Col>
              <Col className="input-section" sm={6} md={4}>
                <FormControl
                  control="select"
                  type="email"
                  name="fullName"
                  border="1px solid #EFEFF4"
                  placeholder="Year Furnished"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "is-invalid"
                      : "customInput"
                  }
                  options={options}
                />
              </Col>
              <Col className="input-section mb-2" sm={6} md={4}>
                <FormControl
                  control="input"
                  type="email"
                  name="fullName"
                  border="1px solid #EFEFF4"
                  placeholder="Year Furnished"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "is-invalid"
                      : "customInput"
                  }
                />
              </Col>
              {additionalInputs.map(({ title, value }, index) => (
                <Col
                  key={index}
                  className="input-section d-flex align-items-center"
                  sm={6}
                  md={4}
                >
                  <img
                    src={minusIcon}
                    className="arithmetic-icon"
                    alt="minus-icon"
                    onClick={() => additionalInputsHandler("minus", index)}
                  />
                  <InputField title={title} value={value} />
                  <img
                    src={plusIcon}
                    className="arithmetic-icon"
                    alt="plus"
                    onClick={() => additionalInputsHandler("add", index)}
                  />
                </Col>
              ))}
            </Row>
          );
        }}
      </Formik>
    </GenerateInfoStyle>
  );
};

export default GenerateInfo;
