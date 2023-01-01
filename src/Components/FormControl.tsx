import Input from "./CustomInput/CustomInput";
import Select from "./CustomSelect/CustomSelect";
import Datepicker from "./CustomDatePicker/Index";
import CustomDateTimePicker from "./CustomDateTimePicker/Index";
import Textarea from "./CustomTextArea/Index";
// import Checkbox from "./Checkbox";
import CustomSearchSelect from "./CustomSearchSelect";
import CustomMultiSelect from "./CustomMultiSelect/Index";
import CustomLargeInput from "./CustomLargeInput/CustomLargeInput";
import CustomLargeSelect from "./CustomLargeSelect/CustomLargeInput";
import CustomPasswordInput from "./CustomPasswordInput/Index";
import { Checkbox, Radio } from "antd";

export interface FieldStyleBasicProps {
  padding: string;
  bgColor: string;
  border: string;
}

export interface FieldStyleBasicProps {
  padding: string;
  bgColor: string;
  border: string;
}

type FormControllerProps = {
  control:
    | "input"
    | "select"
    | "searchSelect"
    | "multiSelect"
    | "checkbox"
    | "password"
    | "textarea"
    | "inputNumber"
    | "largeInput"
    | "largeSelect"
    | "radio"
    | "date"
    | "dateTime";
} & React.ComponentProps<any>;
const FormController: React.FC<FormControllerProps> = (props) => {
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
    case "checkbox":
      return <Checkbox {...rest} />;
    case "password":
      return <CustomPasswordInput {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "largeInput":
      return <CustomLargeInput {...rest} />;
    case "largeSelect":
      return <CustomLargeSelect {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "date":
      return <Datepicker {...rest} />;
    case "dateTime":
      return <CustomDateTimePicker {...rest} />;
    default:
      return null;
  }
};

export default FormController;
