import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Input } from "antd";
import { CustomInputContainer } from "./style";
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
    ...rest
  } = props;
  return (
    <CustomInputContainer>
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
          />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </CustomInputContainer>
  );
};

export default InputField;
