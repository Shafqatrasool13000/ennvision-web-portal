import { Button } from "antd";
import CustormButtonStyle from "./style";

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
}: any) => {
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
