import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorMsg from "../ErrorMessage";
import { Select } from "antd";
import { CustomSelectContainer } from "./style";
import dropDownArrow from "../../assets/icons/ic_add_property_dropdown.svg";
const SelectComp = (props: any) => {
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
    <CustomSelectContainer>
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
                suffixIcon={
                  <img
                    style={{
                      height: "6px",
                    }}
                    src={dropDownArrow}
                    alt="arrow"
                  />
                }
                defaultValue={defaultValue}
                {...rest}
                onSelect={(val, event) => onSelect(val, event.key)}
                placeholder={placeholder}
                // You have to provide the onChange function and on changing the value you should call
                // the setFieldValue function provided by the prop of "form"
                onChange={(val: any) => {
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
    </CustomSelectContainer>
  );
};

export default SelectComp;
