import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { InputNumber } from "antd";
import CustomInputStyle from "./style";
const InputField = (props: any) => {
  const {
    label,
    prefix,
    maxLength,
    disabled,
    placeholder,
    className,
    name,
    ...rest
  } = props;
  return (
    <CustomInputStyle>
      <label htmlFor={label}>{label}</label>
      <Field name={name} id={name}>
        {({ field }: any) => (
          <InputNumber
            addonBefore="$"
            addonAfter="Rate"
            {...rest}
            {...field}
            type="text"
            placeholder={placeholder}
            defaultValue={100}
            disabled={disabled}
            className={className}
            maxLength={maxLength}
          />
        )}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </CustomInputStyle>
  );
};

export default InputField;
