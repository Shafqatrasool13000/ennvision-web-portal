import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApiData } from "../../utils/CreateContext";
import CustomButton from "../CustomButton/CustomButton";
import { PrimaryColor } from "../GlobalStyle";
import { UpgradeAccountMenuStyle } from "./style";

const UpgradeAccountMenu = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(ContextApiData);

  const options = ["Upgrade Account", "Edit Profile", "Delete Profile"];
  return (
    <UpgradeAccountMenuStyle>
      <div className="options">
        {options.map((title, index) => (
          <div className="option" key={index}>
            <Link to="" className="link mb-0">
              {title}
            </Link>
          </div>
        ))}

        <div className="option">
          <CustomButton
            bgcolor="transparent"
            color={PrimaryColor}
            padding="0px"
            width="auto"
            type="submit"
            title="Signout"
            fontSize="16px"
            fontFamily="EnnVisionsMedium"
            border="none"
            clicked={() => {
              setIsLoggedIn(false);
              navigate("/login");
            }}
          />
        </div>
      </div>
    </UpgradeAccountMenuStyle>
  );
};

export default UpgradeAccountMenu;
