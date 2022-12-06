import { Button } from "antd";
import { PrimaryColor } from "../GlobalStyle";
import CustormButtonStyle from "./style";

export type ButtonProps = {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  bgcolor: string;
  disabled?: boolean;
  width: string;
  color: string;
  padding: string;
  clicked?: () => void;
  form?: any;
  key?: string | number;
  fontSize: string;
  fontFamily?: "EnnVisions" | "EnnVisionsMedium";
  margin?: string;
  icon?: React.ReactNode | null;
  border?: string;
};

const CustomButton = ({
  title,
  type,
  bgcolor,
  disabled,
  width,
  color,
  padding,
  clicked,
  form,
  key,
  fontSize,
  icon = null,
  fontFamily = "EnnVisions",
  margin = "auto",
  border = `1px solid ${PrimaryColor}`,
}: ButtonProps) => {
  return (
    <CustormButtonStyle
      bgcolor={bgcolor}
      color={color}
      width={width}
      padding={padding}
      fontSize={fontSize}
      fontFamily={fontFamily}
      margin={margin}
      border={border}
    >
      <Button
        disabled={disabled}
        form={form}
        key={key}
        onClick={clicked}
        htmlType={type}
        icon={icon}
      >
        {title}
      </Button>
    </CustormButtonStyle>
  );
};

export default CustomButton;
