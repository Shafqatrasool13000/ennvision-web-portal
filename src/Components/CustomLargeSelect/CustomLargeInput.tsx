import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Select } from "antd";
import CustomLargeSelectStyle from "./style";
import ic_drop_down from "../../assets/icons/ic_drop_down.svg";
const CustomLargeSelect = (props: any) => {
  const { name, placeholder, onSelect, defaultValue, label, options, ...rest } =
    props;

  const OptionsArr = options?.map((option: any) => {
    return (
      <Select.Option key={option.id} value={option.name}>
        {option.name}
      </Select.Option>
    );
  });

  return (
    <CustomLargeSelectStyle>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest}>
        {({ field, form, meta }: any) => {
          return (
            // <Form.Item name={name}>
            <div className="custom-select-inner">
              <Select
                bordered={false}
                className="customSelect"
                name={name}
                id={name}
                defaultValue={defaultValue}
                {...rest}
                onSelect={(val, event) => onSelect(val, event.key)}
                placeholder={placeholder}
                // You have to provide the onChange function and on changing the value you should call
                // the setFieldValue function provided by the prop of "form"
                suffixIcon={<img src={ic_drop_down} alt="dropdown" />}
                onChange={(val) => {
                  form.setFieldValue(name, val);
                }}
              >
                {OptionsArr}
              </Select>
            </div>
            // </Form.Item>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </CustomLargeSelectStyle>
  );
};

export default CustomLargeSelect;
