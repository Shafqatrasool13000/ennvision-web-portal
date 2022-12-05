import { DatePicker } from "antd";
import { Field, ErrorMessage } from "formik";
import CustomDatePickerStyle from "./style";
import ErrorMsg from "../ErrorMessage";
import dateIcon from "../../assets/icons/ic_calendar.svg";

const Index = (props: any) => {
  const {
    name,
    placeholder,
    label,
    options,
    bgColor = "white",
    border = "1px solid #c6c6c8;",
    padding = "4px",
    title,
    ...rest
  } = props;

  return (
    <CustomDatePickerStyle bgColor={bgColor} border={border} padding={padding}>
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
    </CustomDatePickerStyle>
  );
};

export default Index;
