import React from "react";
import Input from "./CustomInput/Index";
import Select from "./CustomSelect/Index";
import Datepicker from './CustomDatePicker/Index';
import CustomDateTimePicker from './CustomDateTimePicker/Index';
import Textarea from './CustomTextArea/Index';
import InputNumber from './CustomInputNumber';
// import Checkbox from "./Checkbox";
import PasswordInput from './CustomPasswordInput/Index';
import CustomSearchSelect from './CustomSearchSelect';
import CustomMultiSelect from './CustomMultiSelect/Index';
import CustomLargeInput  from "./CustomLargeInput/Index";
import CustomLargeSelect  from "./CustomLargeSelect/Index";

const FormikController = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "searchSelect":
      return <CustomSearchSelect {...rest} />;
    case "multiSelect":
      return <CustomMultiSelect {...rest} />;
    // case "checkbox":
    //   return <Checkbox {...rest} />;
    case "password":
      return <PasswordInput {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case 'inputNumber':
      return <InputNumber  {...rest} />
      case 'largeInput':
      return <CustomLargeInput  {...rest} />
      case 'largeSelect':
        return <CustomLargeSelect  {...rest} />
    // case "radio":
    //   return <Radio {...rest} />;
    case "date":
      return <Datepicker {...rest} />;
    case "dateTime":
      return <CustomDateTimePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikController;
