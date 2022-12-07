import post from "../../assets/Image/ic_image_2.png";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { PrimaryColor } from "../../Components/GlobalStyle";
import icon1 from "../../assets/icons/ic_newsfeed_like.svg";
import icon2 from "../../assets/icons/ic_newsfeed_saved.svg";
import closeIcon from "../../assets/icons/ic_story_close.svg";
import { CreatePostStyle } from "./style";
import { useNavigate } from "react-router-dom";

const CreatePost1 = ({ setIsPost1Modal, setIsPost2Modal }: any) => {
  const showPost2Modal = () => {
    setIsPost1Modal(false);
    setIsPost2Modal(true);
  };
  const navigate = useNavigate();
  return (
    <CreatePostStyle>
      <div className="inner-section">
        <div className="choose-section d-flex flex-wrap justify-content-between">
          <p className="gallery mt-1">Create Post</p>
          <div className="choose-section-icons mt-xs-2 mt-sm-0">
            <img src={icon1} onClick={() => navigate("create-post-1")} alt="" />
            <img src={icon2} alt="" />
          </div>
        </div>
        <div className="gallery-section">
          <div className="position-relative">
            <img src={post} alt="post" className="post-img" />
            <img
              src={closeIcon}
              alt="close"
              className="close-img position-absolute "
            />
          </div>
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
              clicked={() => navigate("create-post-4")}
            />
          </div>
        </div>
      </div>
    </CreatePostStyle>
  );
};

export default CreatePost1;
