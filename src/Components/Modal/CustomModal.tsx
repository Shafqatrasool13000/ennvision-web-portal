import { Modal } from "antd";

type CustomModalPropsTypes = {
  children: React.ReactNode;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomModal: React.FC<CustomModalPropsTypes> = ({
  children,
  isModalVisible,
  setIsModalVisible,
}) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      open={isModalVisible}
      footer={null}
      onCancel={handleCancel}
      centered={true}
      closable={false}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
