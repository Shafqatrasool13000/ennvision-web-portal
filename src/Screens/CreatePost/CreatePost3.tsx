import { CreatePost3Style } from "./style";
import post from "../../assets/Image/ic_image_2.png";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { PrimaryColor } from "../../Components/GlobalStyle";
import icon1 from "../../assets/icons/ic_newsfeed_like.svg";
import icon2 from "../../assets/icons/ic_newsfeed_saved.svg";
import icon3 from "../../assets/icons/ic_newsfeed_sent.svg";
import { Col, Row } from "react-bootstrap";

const Post_List1 = ({ setIsPost4Modal }: any) => {
  return (
    <CreatePost3Style>
      <div className="inner-section">
        <div className="choose-section d-flex flex-wrap justify-content-between">
          <p className="gallery mt-1">Create Post</p>
          <div className="choose-section-icons mt-xs-2 mt-sm-0">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
          </div>
        </div>
        <div className="gallery-imgs">
          <img src={post} alt="" className="main-img" />
          <p className="say-something">Say something about these photos...</p>

          <Row>
            <Col className="p-1" xs={3}>
              <img src={post} alt="" className="post-img" />
            </Col>
            <Col className="p-1" xs={3}>
              <img src={post} alt="" className="post-img" />
            </Col>
            <Col className="p-1" xs={3}>
              <img src={post} alt="" className="post-img" />
            </Col>
            <Col className="p-1" xs={3}>
              <div className="position-relative">
                <img src={post} alt="" />
                <p className="position-absolute more-img-text">3+</p>
                <div className="overlay"></div>
              </div>
            </Col>
          </Row>

          <div className="submit-btn mt-2">
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
              clicked={() => setIsPost4Modal(false)}
            />
          </div>
        </div>
      </div>
    </CreatePost3Style>
  );
};

export default Post_List1;
