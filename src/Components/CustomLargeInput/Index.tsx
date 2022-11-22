import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Input } from "antd";
import {CustomlargeInputStyled } from "./style";
const InputField = (props) => {
  const { label, prefix,defaultValue,maxLength, disabled , placeholder, className, name, ...rest } = props;
  return (
    <CustomlargeInputStyled>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name}>
        {({ field }) => (
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
      {/* <ErrorMessage name={name} component={ErrorMsg} /> */}
    </CustomlargeInputStyled>
  );
};

export default InputField;
