import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/ic_logo.svg";
import { ContextApiData } from "../../utils/CreateContext";
import CustomButton from "../CustomButton/CustomButton";
import { PrimaryColor } from "../GlobalStyle";
import { ConfirmedDarkStyle } from "./style";

const ConfirmedDark = () => {
  const navigate = useNavigate();
  const { setIsUser, setIsProfessional } = useContext(ContextApiData);
  return (
    <ConfirmedDarkStyle>
      <div className="inner-container">
        <img src={logo} alt="logo" />
        <p className="message">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
        </p>
        <div className="mt-4">
          <CustomButton
            bgcolor={PrimaryColor}
            color="white"
            padding="8px 8px"
            width="100%"
            type="submit"
            title="THANKS!"
            margin="auto"
            fontFamily="EnnVisionsMedium"
            fontSize="16px"
            clicked={() => {
              setIsUser(false);
              setIsProfessional(true);
              navigate("/");
            }}
          />
        </div>
      </div>
    </ConfirmedDarkStyle>
  );
};

export default ConfirmedDark;
