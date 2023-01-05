import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/ic_logo.svg";
import { PrimaryColor, whiteColor } from "../../Components/GlobalStyle";
import { ContextApiData } from "../../utils/CreateContext";
import CustomButton from "../CustomButton/CustomButton";
import DeleteConfirmationStyle from "./style";

const DeleteConfirmation = ({ setIsModalVisible }: any) => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(ContextApiData);

  return (
    <DeleteConfirmationStyle>
      <div className="inner-container">
        <img src={logo} alt="logo" />
        <p className="message">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
        </p>
        <div className="mt-4 d-flex gap-2">
          <CustomButton
            bgcolor="#D6D6E0"
            color="black"
            padding="8px 8px"
            width="100%"
            type="submit"
            title="Yes"
            margin="auto"
            border="none"
            fontSize="16px"
            fontFamily="EnnVisionsMedium"
            clicked={() => {
              setIsLoggedIn(false);
              setIsModalVisible(false);
              navigate("/login");
            }}
          />
          <CustomButton
            bgcolor={PrimaryColor}
            color={whiteColor}
            padding="8px 8px"
            width="100%"
            type="submit"
            title="Cancel"
            margin="auto"
            fontSize="16px"
            border="none"
            fontFamily="EnnVisionsMedium"
            clicked={() => setIsModalVisible(false)}
          />
        </div>
      </div>
    </DeleteConfirmationStyle>
  );
};

export default DeleteConfirmation;
