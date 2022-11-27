import { Modal } from "antd";
import React, { useState } from "react";

const CustomModal = ({ children, isModal }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(isModal);
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      visible={isModalVisible}
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
