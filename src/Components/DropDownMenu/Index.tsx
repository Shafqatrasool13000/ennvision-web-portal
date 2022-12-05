import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { PrimaryColor } from "../GlobalStyle";
import { DropDownMenuStyle } from "./style";

type DropDownMenuProps = {
  children: React.ReactNode;
};
const DropDownMenu = ({ children }: DropDownMenuProps) => {
  const navigate = useNavigate();

  const Index = () => {
    return <div>Index</div>;
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to="/">Become a Professional</Link>,
    },
    {
      key: "2",
      label: <Link to="/">Edit Profile</Link>,
    },
    {
      key: "3",
      label: <Link to="/">Delete Profile</Link>,
    },
    {
      key: "4",
      label: (
        <CustomButton
          bgcolor="transparent"
          color={PrimaryColor}
          padding="8px"
          width="100%"
          type="submit"
          title="Signout    "
          fontSize="14px"
          fontFamily="EnnVisions"
          clicked={() => navigate("/")}
        />
      ),
    },
  ];
  return (
    <DropDownMenuStyle>
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        trigger={["click"]}
        overlayClassName="menu-overlay"
      >
        <div className="inner-container">{children}</div>
      </Dropdown>
    </DropDownMenuStyle>
  );
};

export default DropDownMenu;
