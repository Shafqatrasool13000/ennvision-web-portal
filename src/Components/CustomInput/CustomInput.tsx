import { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Input } from "antd";
import CustomInputStyle from "./style";
import { ContextApiData } from "../../utils/CreateContext";

const CustomInput: React.FC<any> = ({
  label,
  prefix,
  defaultValue,
  maxLength,
  disabled,
  placeholder,
  className,
  name,
  onFocus = false,
  value,
  formik,
  fontFamily = "EnnVisions",
  bgColor = "white",
  border = "1px solid #d9d9d9",
  padding = "8px 8px",
  showErrorMessage = true,
  suffix = null,
  labelMarginBottom = "10px",
  ...rest
}: any) => {
  const { setIsShowProperty } = useContext(ContextApiData);
  return (
    <CustomInputStyle
      fontFamily={fontFamily}
      bgColor={bgColor}
      border={border}
      padding={padding}
      labelMarginBottom={labelMarginBottom}
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
            onFocus={() => setIsShowProperty((prev) => !prev)}
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

export default CustomInput;
