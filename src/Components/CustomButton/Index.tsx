import { Button } from "antd";
import { CustormButtonContainer } from "./style";

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
  fontFamily = "EnnVisions",
}: any) => {
  return (
    <CustormButtonContainer
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
        {title}
      </Button>
    </CustormButtonContainer>
  );
};

export default CustomButton;
