import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApiData } from "../../utils/CreateContext";
import CustomButton from "../CustomButton/CustomButton";
import { PrimaryColor } from "../GlobalStyle";
import BecomeProfesionalMenuStyle from "./style";

const BecomeProfesionalMenu = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setIsShowProfessionalOptions } =
    useContext(ContextApiData);

  const options = ["Become a Professional", "Edit Profile", "Delete Profile"];
  return (
    <BecomeProfesionalMenuStyle>
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
              setIsShowProfessionalOptions(false);
              navigate("/login");
            }}
          />
        </div>
      </div>
    </BecomeProfesionalMenuStyle>
  );
};

export default BecomeProfesionalMenu;
