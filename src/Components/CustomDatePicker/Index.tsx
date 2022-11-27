import { DatePicker } from "antd";
import { Field, ErrorMessage } from "formik";
import { CustomDatePickerContainer } from "./style";
import ErrorMsg from "../ErrorMessage";
import dateIcon from "../../assets/icons/ic_calendar.svg";

const Index = (props: any) => {
  const { name, placeholder, label, options, title, ...rest } = props;

  return (
    <CustomDatePickerContainer>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest}>
        {({ field, form, meta }: any) => {
          return (
            // <Form.Item name={name}>
            <div>
              <DatePicker
                className="customdatepicker"
                placeholder={placeholder}
                suffixIcon={<img src={dateIcon} />}
                name={name}
                id={name}
                {...rest}
                onChange={(val) => {
                  // form.setFieldValue(name, val._d.toString());
                }}
              />
            </div>
            // </Form.Item>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </CustomDatePickerContainer>
  );
};

export default Index;
