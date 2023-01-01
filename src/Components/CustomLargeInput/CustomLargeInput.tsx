import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Input } from "antd";
import CustomlargeInputStyle from "./style";
const CustomLargeInput = (props: any) => {
  const {
    label,
    prefix,
    defaultValue,
    maxLength,
    disabled,
    placeholder,
    className,
    name,
    ...rest
  } = props;
  return (
    <CustomlargeInputStyle>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name}>
        {({ field }: any) => (
          <Input
            disabled={disabled}
            prefix={prefix}
            className={className}
            type="text"
            maxLength={maxLength}
            {...rest}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...field}
          />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </CustomlargeInputStyle>
  );
};

export default CustomLargeInput;
