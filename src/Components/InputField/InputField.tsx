import { Input } from "antd";
import InputFieldStyle from "./style";

type InputFieldProps = {
  title: string;
  value: string | number;
};

const InputField: React.FC<InputFieldProps> = ({ title, value }) => {
  return (
    <InputFieldStyle
      fontFamily="EnnVisions"
      bgColor="white"
      border="1px solid #EFEFF4"
      padding="8px 8px"
      marginTop="10px"
    >
      <Input placeholder="Basic usage" value={`${value} ${title}`} />
    </InputFieldStyle>
  );
};

export default InputField;
