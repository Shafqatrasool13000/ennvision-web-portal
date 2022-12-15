import StoryStyle, { BigStoryStyle, MiniStoryStyle } from "./style";
import story from "../../assets/Professional/Professional (1).png";
import story1 from "../../assets/Professional/Professional (2).png";
import story2 from "../../assets/Professional/Professional (3).png";
import story3 from "../../assets/Professional/Professional (4).png";
import story4 from "../../assets/Professional/Professional (5).png";
import { BackgroundImage, ProfileMiniImg } from "../../Components/GlobalStyle";
import like from "../../assets/icons/ic_story_like.svg";
import send from "../../assets/icons/ic_story_send.svg";
import volume from "../../assets/icons/ic_story_speaker.svg";
import more from "../../assets/icons/ic_story_more_info.svg";
import pause from "../../assets/icons/ic_story_pause.svg";
import { Container } from "react-bootstrap";
import nextArrow from "../../assets/icons/ic_forward_arrow_with_circle.svg";
import prevArrow from "../../assets/icons/ic_back_arrow_with_circle.svg";
import close from "../../assets/icons/ic_story_close.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MiniStory = ({ img, className }: any) => {
  return (
    <MiniStoryStyle>
      <div className={`story ${className}`}>
        <BackgroundImage
          className="big-img"
          postion="top"
          repeat="no-repeat"
          size="cover"
          url={img}
          height="242px"
        >
          <div className="profile-details position-absolute">
            <ProfileMiniImg
              className="mini-img"
              src={img}
              alt="story"
              borderRadius="7px"
              height="31px"
              width="31px"
            />
            <p className="title mt-2 mb-2">Morgan Freeman</p>
          </div>
        </BackgroundImage>
      </div>
    </MiniStoryStyle>
  );
};

const BigStory = ({ img, className }: any) => {
  return (
    <BigStoryStyle>
      <div className={`big-story ${className}`}>
        <BackgroundImage
          className="big-img"
          postion="top"
          repeat="no-repeat"
          size="cover"
          url={img}
        >
          <div className="indicators">
            <div className="indicator indicator-fill mb-1" />
            <div className="indicator indicator-null mb-1" />
            <div className="indicator indicator-null mb-1" />
            <div className="indicator indicator-null mb-1" />
          </div>
          <div className="profile-details d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <ProfileMiniImg
                className="mini-img"
                src={story}
                alt="story"
                borderRadius="7px"
                height="31px"
                width="31px"
              />
              <p className="title mt-2 ms-2">Morgan Freeman</p>
            </div>
            <div className="icons">
              <img src={pause} alt="pause" />
              <img src={volume} alt="volume" />
              <img src={more} alt="more" />
            </div>
          </div>
          <div className="story-arrows position-absolute w-100 d-flex justify-content-between align-items-center top-50">
            <NextArrowHandler />
            <PrevArrowHandler />
          </div>
          <div className="profile-details position-absolute bottom-0 w-100 d-flex justify-content-between align-items-center">
            <input placeholder="Reply to" type="text" className="w-75" />
            <div className="icons">
              <img src={like} className="mt-1" alt="like" />
              <img src={send} className="mt-1" alt="send" />
            </div>
          </div>
        </BackgroundImage>
      </div>
    </BigStoryStyle>
  );
};

const storiesData = [
  {
    component: MiniStory,
    img: story,
    cClass: "miniImg1",
  },
  {
    component: MiniStory,
    img: story1,
    cClass: "miniImg2",
  },
  {
    component: BigStory,
    img: story2,
    cClass: "bigImg",
  },
  {
    component: MiniStory,
    img: story3,
    cClass: "miniImg3",
  },
  {
    component: MiniStory,
    img: story4,
    cClass: "miniImg4",
  },
  // <MiniStory img={story} className="miniImg1" />,
  // <MiniStory img={story1} className="miniImg2" />,
  // <BigStory img={story2} className="bigImg" />,
  // <MiniStory img={story3} className="miniImg3" />,
  // <MiniStory img={story4} className="miniImg4" />,
];

const NextArrowHandler = ({ isDisabled }: any) => (
  <span
    style={{ opacity: isDisabled ? "0.5" : 1 }}
    className="d-none d-sm-inline"
  >
    <img
      className="prev-slide-img position-absolute slide-img"
      src={prevArrow}
      alt="previous"
    />
  </span>
);
const PrevArrowHandler = ({ isDisabled }: any) => (
  <span
    style={{ opacity: isDisabled ? "0.5" : 1 }}
    className="d-none d-sm-inline"
  >
    <img
      className="next-slide-img position-absolute slide-img"
      src={nextArrow}
      alt="next"
    />
  </span>
);

const Story = () => {
  const [stories, setStories] = useState(storiesData);
  const navigate = useNavigate();

  const handleImageChanger = (index: number) => {
    const bigImgIndex = stories.findIndex(({ cClass }) => cClass == "bigImg");
    stories[index + 1].img = stories[bigImgIndex].img;
    stories[bigImgIndex].img = stories[bigImgIndex + 1].img;
    setStories([...stories]);
    console.log({ index, stories });
  };

  return (
    <>
      <StoryStyle>
        <img
          className="close-icon"
          onClick={() => navigate("/explore-nearby")}
          src={close}
          alt="close"
        />
        <Container>
          <div className="inner-container">
            {stories.map(
              ({ component: Component, cClass, img }, index: number) => (
                <div key={index}>
                  <Component img={img} className={cClass} />
                </div>
              )
            )}
          </div>
        </Container>
      </StoryStyle>
    </>
  );
};

export default Story;
