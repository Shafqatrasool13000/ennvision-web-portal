import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApiData } from "../../utils/CreateContext";
import CustomButton from "../CustomButton/CustomButton";
import DeleteConfirmation from "../DeleteConfirmation/DeleteConfirmation";
import { PrimaryColor } from "../GlobalStyle";
import CustomModal from "../Modal/CustomModal";
import { UpgradeAccountMenuStyle } from "./style";

const UpgradeAccountMenu = () => {
  const navigate = useNavigate();
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const { setIsLoggedIn, setIsShowUpgradeAccountOptions } =
    useContext(ContextApiData);

  const options = [
    {
      title: "Upgrade Account",
      link: "",
      taskTodo: () => {
        setIsShowUpgradeAccountOptions(false);
      },
    },
    {
      title: "Edit Profile",
      link: "/become-professional",
      taskTodo: () => {
        setIsShowUpgradeAccountOptions(false);
      },
    },
    {
      title: "Delete Profile",
      link: "",
      taskTodo: () => {
        setIsDeleteModal(true);
        setIsShowUpgradeAccountOptions(false);
      },
    },
  ];
  return (
    <UpgradeAccountMenuStyle>
      <CustomModal
        isModalVisible={isDeleteModal}
        setIsModalVisible={setIsDeleteModal}
      >
        <DeleteConfirmation setIsModalVisible={setIsDeleteModal} />
      </CustomModal>
      <div className="options">
        {options.map(({ title, taskTodo, link }, index) => (
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
              setIsShowUpgradeAccountOptions(false);
              navigate("/login");
            }}
          />
        </div>
      </div>
    </UpgradeAccountMenuStyle>
  );
};

export default UpgradeAccountMenu;
