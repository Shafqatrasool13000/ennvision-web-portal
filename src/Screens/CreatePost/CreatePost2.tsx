import { CreatePost2Style } from "./style";
import post from "../../assets/Image/ic_image_2.png";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { lightblue2, PrimaryColor } from "../../Components/GlobalStyle";
import dropDown from "../../assets/icons/ic_drop_down.svg";
import icon1 from "../../assets/icons/ic_newsfeed_like.svg";
import icon2 from "../../assets/icons/ic_newsfeed_saved.svg";
import icon3 from "../../assets/icons/ic_newsfeed_sent.svg";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../assets/icons/ic_story_close.svg";

const Post_List3 = ({ setIsPost3Modal, setIsPost4Modal }: any) => {
  const navigate = useNavigate();

  const showPost4Modal = () => {
    setIsPost3Modal(false);
    setIsPost4Modal(true);
  };

  return (
    <CreatePost2Style>
      <div className="inner-section">
        <div className="choose-section d-flex flex-wrap justify-content-between">
          <p className="gallery mt-1">Create Post</p>

          <div className="choose-section-icons mt-xs-2 mt-sm-0">
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
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
          </div>
        </div>
        <div className="gallery-imgs">
          <Row className="inner-section">
            <Col className="p-1" xs={7}>
              <div className="position-relative">
                <img src={post} alt="" className="post-img" />
                <img
                  src={closeIcon}
                  alt="close"
                  className="close-img position-absolute"
                />
              </div>
              <div className="position-relative">
                <img src={post} alt="" className="post-img mt-2" />
                <img
                  src={closeIcon}
                  alt="close"
                  className="close-img position-absolute mt-2"
                />
              </div>
            </Col>
            <Col className="p-1 mt-3" xs={5}>
              <div className="position-relative">
                <img src={post} alt="" className="post-img" />
                <img
                  src={closeIcon}
                  alt="close"
                  className="close-img mini position-absolute "
                />
              </div>
              <div className="position-relative mt-2">
                <img src={post} alt="" className="post-img" />
                <img
                  src={closeIcon}
                  alt="close"
                  className="close-img mini position-absolute "
                />
              </div>

              <div className="p-1 mt-2 position-relative">
                <img src={post} alt="" />
                <p className="position-absolute more-img-text">3+</p>
                <div className="overlay" />
                <img
                  src={closeIcon}
                  alt="close"
                  className="close-img mini position-absolute  mt-2"
                />
              </div>
            </Col>
          </Row>
          <div className="submit-btn mt-2 d-flex justify-content-center">
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
      </div>
    </CreatePost2Style>
  );
};

export default Post_List3;
