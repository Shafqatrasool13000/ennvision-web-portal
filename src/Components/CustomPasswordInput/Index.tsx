import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Input } from "antd";
import CustomPasswordInputStyle from "./style";

const CustomPasswordInput = (props: any) => {
  const {
    label,
    className,
    placeholder,
    name,
    fontFamily = "EnnVisions",
    border = "1px solid #c6c6c8",
    showErrorMessage = true,
    labelMarginBottom = "10px",
    ...rest
  } = props;
  return (
    <CustomPasswordInputStyle
      fontFamily={fontFamily}
      border={border}
      labelMarginBottom={labelMarginBottom}
    >
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name}>
        {({ field, form, meta }: any) => (
          <Input.Password
            className={className}
            {...rest}
            placeholder={placeholder}
            {...field}
            iconRender={(visible) =>
              visible ? (
                <span className="paswordIconLabel">Hide</span>
              ) : (
                <span className="paswordIconLabel">Show</span>
              )
            }
          />
        )}
      </Field>
      {showErrorMessage && <ErrorMessage name={name} component={ErrorMsg} />}
    </CustomPasswordInputStyle>
  );
};

export default CustomPasswordInput;
