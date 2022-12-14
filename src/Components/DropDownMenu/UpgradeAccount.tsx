import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { PrimaryColor } from "../GlobalStyle";
import { UpgradeAccountStyle } from "./style";

const UpgradeAccount = () => {
  const navigate = useNavigate();

  const options = ["Upgrade Account", "Edit Profile", "Delete Profile"];
  return (
    <UpgradeAccountStyle>
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
            clicked={() => navigate("/")}
          />
        </div>
      </div>
    </UpgradeAccountStyle>
  );
};

export default UpgradeAccount;
