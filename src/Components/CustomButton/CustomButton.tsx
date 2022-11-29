import { Button } from "antd";
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
  icon?: string | null;
  fontFamily?: string;
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
}: ButtonProps) => {
  return (
    <CustormButtonStyle
      bgcolor={bgcolor}
      color={color}
      width={width}
      padding={padding}
      fontSize={fontSize}
      fontFamily={fontFamily}
    >
      <Button
        disabled={disabled}
        form={form}
        key={key}
        onClick={clicked}
        htmlType={type}
      >
        {icon && (
          <span className="me-2">
            <img src={icon} alt={icon} />
          </span>
        )}

        {title}
      </Button>
    </CustormButtonStyle>
  );
};

export default CustomButton;
