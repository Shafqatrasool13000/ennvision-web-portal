import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApiData } from "../../utils/CreateContext";
import CustomButton from "../CustomButton/CustomButton";
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";
import { PrimaryColor } from "../GlobalStyle";
import CustomModal from "../Modal/CustomModal";
import BecomeProfesionalMenuStyle from "./style";

const BecomeProfesionalMenu = () => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn, setIsShowProfessionalOptions } =
    useContext(ContextApiData);

  const options = [
    {
      title: "Become a Professional",
      link: "/become-professional",
      taskTodo: () => {
        setIsShowProfessionalOptions(false);
      },
    },
    {
      title: "Edit Profile",
      link: "/register",
      taskTodo: () => {
        setIsShowProfessionalOptions(false);
      },
    },
    {
      title: "Delete Profile",
      link: "",
      taskTodo: () => {
        setIsDeleteModal(true);
        setIsShowProfessionalOptions(false);
      },
    },
  ];
  return (
    <BecomeProfesionalMenuStyle>
      <CustomModal
        isModalVisible={isDeleteModal}
        setIsModalVisible={setIsDeleteModal}
      >
        <DeleteConfirmation setIsModalVisible={setIsDeleteModal} />
      </CustomModal>
      <div className="options">
        {options.map(({ title, link, taskTodo }, index) => (
          <div onClick={taskTodo} className="option" key={index}>
            <Link to={link} className="link mb-0">
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
