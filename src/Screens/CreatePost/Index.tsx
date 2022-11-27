import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CustomModal from "../../Components/Modal/CustomModal";
import EditPost from "./CreatePost4";
import PostDetails from "../PostDetails/Index";
import Post1 from "./CreatePost1";
import Post2 from "./CreatePost1";
import Post3 from "./CreatePost2";
import Post4 from "./CreatePost3";

const Index = () => {
  const [isPostModal, setIsPostModal] = useState(false);
  const [isPost1Modal, setIsPost1Modal] = useState(false);
  const [isPost2Modal, setIsPost2Modal] = useState(false);
  const [isPost3Modal, setIsPost3Modal] = useState(false);
  const [isPost4Modal, setIsPost4Modal] = useState(false);
  const [isPostDetailsModal, setIsPostDetailsModal] = useState(false);

  useEffect(() => {
    setIsPost1Modal(true);
  }, []);

  return (
    <div>
      <CustomModal isModal={isPostModal} setIsModalVisible={setIsPostModal}>
        <EditPost setIsPostModal={setIsPostModal} />
      </CustomModal>
      <CustomModal
        isModalVisible={isPostDetailsModal}
        setIsModalVisible={setIsPostDetailsModal}
      >
        <PostDetails />
      </CustomModal>
      <CustomModal
        isModalVisible={isPost1Modal}
        setIsModalVisible={setIsPost1Modal}
      >
        <Post1
          setIsPost1Modal={setIsPost1Modal}
          setIsPost2Modal={setIsPost2Modal}
        />
      </CustomModal>
      <CustomModal
        isModalVisible={isPost2Modal}
        setIsModalVisible={setIsPost2Modal}
      >
        <Post2
          setIsPost2Modal={setIsPost2Modal}
          setIsPost3Modal={setIsPost3Modal}
        />
      </CustomModal>
      <CustomModal
        isModalVisible={isPost3Modal}
        setIsModalVisible={setIsPost3Modal}
      >
        <Post3
          setIsPost3Modal={setIsPost3Modal}
          setIsPost4Modal={setIsPost4Modal}
        />
      </CustomModal>
      <CustomModal
        isModalVisible={isPost4Modal}
        setIsModalVisible={setIsPost4Modal}
      >
        <Post4 setIsPost4Modal={setIsPost4Modal} />
      </CustomModal>
      <div className="d-none d-md-block">
        <Container>
          <h2>Index</h2>
        </Container>
      </div>
    </div>
  );
};

export default Index;
