import React from "react";
import { DatePicker, Space } from "antd";
import { Field, ErrorMessage } from "formik";
import { CustomDatePickerContainer } from "./style";
import ErrorMsg from '../ErrorMessage';
import dateIcon from '../../assets/icons/ic_calendar.svg';

const Index = (props) => {
  const { name, placeholder, label, options, title,defaultValue,onChange,...rest } = props;

  const onOk = (value) => {
    console.log('onOk: ', value);
  };

  return (
    <CustomDatePickerContainer>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest}>
        {({ field, form, meta }) => {
          return (
            // <Form.Item name={name}>
            <div>
              <DatePicker showTime
                format="MM-DD-YYYY h:mm A"
                // onChange={onChange}
                name={name}
                id={name}
                {...rest}
                defaultValue={defaultValue}
                className="customdatepicker"
                onOk={onOk}
                placeholder={placeholder}
                suffixIcon={<img src={dateIcon} alt='date-picker' />}
                onChange={(val,timeandDate) => {
                  form.setFieldValue(name, timeandDate.toString());
                }}
              />
            </div>
            // </Form.Item>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorMsg} />
    </CustomDatePickerContainer>
  );
};

export default Index;
