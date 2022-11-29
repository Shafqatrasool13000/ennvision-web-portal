import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/ic_logo(1).svg";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { PrimaryColor } from "../../Components/GlobalStyle";
import ConfirmedStyle from "./style";
const Confirmed = () => {
  const navigate = useNavigate();
  return (
    <ConfirmedStyle>
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
            fontSize="16px"
            clicked={() => navigate("/")}
          />
        </div>
      </div>
    </ConfirmedStyle>
  );
};

export default Confirmed;
