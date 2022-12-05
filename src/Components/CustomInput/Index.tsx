import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Input } from "antd";
import CustomInputStyle from "./style";
const InputField = (props: any) => {
  const {
    label,
    prefix,
    defaultValue,
    maxLength,
    disabled,
    placeholder,
    className,
    name,
    value,
    padding = "8px 8px",
    formik,
    border = "none",
    fontFamily = "EnnVisions",
    showErrorMessage = true,
    suffix = null,
    bgColor = "white",
    ...rest
  } = props;
  return (
    <CustomInputStyle
      fontFamily={fontFamily}
      bgColor={bgColor}
      border={border}
      padding={padding}
    >
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
            value={value}
            onChange={(e) => console.log(e)}
            suffix={suffix}
          />
        )}
      </Field>
      {showErrorMessage && <ErrorMessage name={name} component={ErrorMsg} />}
    </CustomInputStyle>
  );
};

export default InputField;
