import styled from "styled-components";
import { tertiaryDark2, tertiaryGrey10 } from "../../Components/GlobalStyle";

const StoryStyle = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${tertiaryDark2};
  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    &:hover {
      background-color: rgba(10, 37, 64, 0.35);
      cursor: pointer;
    }
  }
  .indicators {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    img {
      cursor: pointer;
    }
    .indicator {
      height: 4px;
      border-radius: 10px;
      margin-top: 10px;
      &:first-child {
        margin-left: 10px;
      }
      &:last-child {
        margin-right: 10px;
      }
    }
    .indicator-fill {
      background-color: ${tertiaryGrey10};
    }
    .indicator-null {
      background-color: ${tertiaryDark2};
    }
  }

  .inner-container {
    display: grid;
    column-gap: 45px;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr) 2fr repeat(2, 1fr);
    align-items: center;
  }
  .story-arrows {
    background-color: red;
    .slide-img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    .prev-slide-img {
      position: absolute;
      left: -8%;
      top: 37%;
      z-index: 30;
    }
    .next-slide-img {
      position: absolute;
      right: -8%;
      top: 37%;
      z-index: 30;
    }
  }

  .story {
    height: 242px;
    position: relative;
    .big-img {
      height: 100%;
    }
    .profile-details {
      left: 10px;
      bottom: 0;
      .title {
        font-size: 14px;
        color: white;
        font-family: "EnnVisionsMedium";
      }
    }
  }
  .big-story {
    height: 100vh;
    position: relative;
    column-span: span 2;
    .icons {
      img:not(:last-child) {
        margin-right: 10px;
      }
    }
    .big-img {
      height: 100vh;
    }
    .profile-details {
      padding: 10px;

      .title {
        font-size: 14px;
        color: white;
        font-family: "EnnVisionsMedium";
      }
      input {
        border-radius: 20px;
        padding: 10px;
        background-color: transparent;
        border: 1px solid #ffffff;
        color: #ffffff;

        &::placeholder {
          padding: 10px;
          color: #ffffff;
        }
      }
    }
  }
`;
export default StoryStyle;

export const MiniStoryStyle = styled.div`
  @media screen and (max-width: 1024px) {
    background-color: red;
    .miniImg1 {
      display: none !important;
    }
    .miniImg2 {
      column-span: span 2;
    }
    .miniImg3 {
    }
    .miniImg4 {
      display: none !important;
    }
  }
  @media screen and (max-width: 768px) {
    .miniImg2 {
      column-span: span 2;
    }
    .miniImg3 {
    }
  }
  @media screen and (max-width: 480px) {
    .miniImg1 {
      display: none !important;
    }
    .miniImg2 {
      display: none !important;
    }
    .miniImg3 {
      display: none !important;
    }
    .miniImg4 {
      display: none !important;
    }
  }
  .story {
    margin-right: 10px;
    position: relative;
    .profile-details {
      left: 10px;
      bottom: 0;
      .title {
        font-size: 14px;
        color: white;
        font-family: "EnnVisionsMedium";
      }
    }
  }
`;
export const BigStoryStyle = styled.div`
  .big-story {
    height: 100vh;
    position: relative;
    column-span: span 2;
    /* width: 365px; */
    margin-right: 10px;

    .icons {
      img:not(:last-child) {
        margin-right: 10px;
      }
    }
    .big-img {
      height: 100vh;
    }
    .profile-details {
      padding: 10px;

      .title {
        font-size: 14px;
        color: white;
        font-family: "EnnVisionsMedium";
      }
      input {
        border-radius: 20px;
        padding: 10px;
        background-color: transparent;
        border: 1px solid #ffffff;
        color: #ffffff;

        &::placeholder {
          padding: 10px;
          color: #ffffff;
        }
      }
    }
  }
`;
