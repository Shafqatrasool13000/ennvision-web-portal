import { CreatePost1Style } from "./style";
import post from "../../assets/Image/ic_image_2.png";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { PrimaryColor } from "../../Components/GlobalStyle";
import closeIcon from "../../assets/icons/ic_story_close.svg";
import icon1 from "../../assets/icons/ic_newsfeed_like.svg";
import icon2 from "../../assets/icons/ic_newsfeed_saved.svg";
import icon3 from "../../assets/icons/ic_newsfeed_sent.svg";
import { Col, Row } from "react-bootstrap";
import navigate from "../../assets/hooks/useNavigation";
import { useNavigate } from "react-router-dom";

const Post_List1 = ({ setIsPost2Modal, setIsPost3Modal }: any) => {
  const showPost3Modal = () => {
    setIsPost2Modal(false);
    setIsPost3Modal(true);
  };
  const navigate = useNavigate();
  return (
    <CreatePost1Style>
      <div className="inner-section">
        <div className="choose-section d-flex flex-wrap justify-content-between">
          <p className="gallery mt-1">Create Post</p>
          <div className="choose-section-icons mt-xs-2 mt-sm-0">
            <img src={icon1} alt="" />
            <img
              src={icon1}
              onClick={() => navigate("/create-post-1")}
              alt=""
            />
            <img
              src={icon2}
              onClick={() => navigate("/create-post-2")}
              alt=""
            />
            <img
              src={icon1}
              onClick={() => navigate("/create-post-3")}
              alt=""
            />
            <img src={icon2} alt="icon" />
            <img src={icon3} alt="icon" />
          </div>
        </div>
        <Row className="gallery-imgs">
          <Col className="p-1 position-relative" xs={3}>
            <img src={post} alt="post" className="post-img" />
            <img
              src={closeIcon}
              alt="close"
              className="close-img position-absolute "
            />
          </Col>
          <Col className="p-1 mt-4 position-relative" xs={3}>
            <img src={post} alt="" className="post-img" />
            <img
              src={closeIcon}
              alt="close"
              className="close-img position-absolute "
            />
          </Col>
          <Col className="p-1 position-relative" xs={3}>
            <img src={post} alt="" className="post-img" />
            <img
              src={closeIcon}
              alt="close"
              className="close-img position-absolute "
            />
          </Col>
          <Col className="p-1 mt-4 position-relative last-img" xs={3}>
            <img src={post} alt="" className="post-img" />
            <img
              src={closeIcon}
              alt="close"
              className="close-img position-absolute "
            />
            <p className="position-absolute text">3+</p>
            <div className="overlay"></div>
          </Col>
        </Row>

        <div className="submit-btn mt-2 p-3">
          <CustomButton
            bgcolor={PrimaryColor}
            color="white"
            padding="10px 8px"
            width="100%"
            type="submit"
            title="NEXT"
            margin="auto"
            fontSize="18px"
            fontFamily="EnnVisionsMedium"
            clicked={() => navigate("/create-post-4")}
          />
        </div>
      </div>
    </CreatePost1Style>
  );
};

export default Post_List1;
