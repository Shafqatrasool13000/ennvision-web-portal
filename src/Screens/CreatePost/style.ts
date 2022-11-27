import styled from "styled-components";
import {
  lightColor1,
  lightGrey,
  lightGrey10,
  lightGrey2,
  PrimaryColor,
  pureDark,
  tertiaryGrey19,
  tertiaryGrey7,
  whiteColor,
} from "../../Components/GlobalStyle";

export const CreatePostStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .inner-section {
    background: ${whiteColor};
    max-width: 465px;
    margin: 0 auto;
    box-shadow: 0px 0px 15px #0000000f;
    border: 1px solid ${lightGrey10};
    border-radius: 6px;
    @media screen and (max-width: 480px) {
      width: 94%;
      margin: 0 auto;
    }

    .gallery-section {
      padding: 10px;
      .close-img {
        height: 24px;
        width: 24px;
        background: red !important;
        right: 3%;
        top: 3%;
        cursor: pointer;
        border-radius: 4px;
        z-index: 10;
      }
    }

    .choose-section {
      margin-top: 16px;
      border-bottom: 1px solid ${lightGrey2};
      margin-bottom: 10px;
      padding: 0 20px;
      .gallery {
        font-size: 18px;
        color: ${pureDark};
        font-family: "EnnVisionsMedium";
      }

      &-icons {
        img {
          background: ${lightColor1};
          border-radius: 3px;
          padding: 6px;
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export const CreatePost1Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .inner-section {
    background: ${whiteColor};
    box-shadow: 0px 0px 15px #0000000f;
    border: 1px solid ${lightGrey10};
    border-radius: 6px;
    max-width: 465px;
    margin: 0 auto;
    @media screen and (max-width: 480px) {
      width: 94%;
      margin: 0 auto;
    }

    .gallery-imgs {
      padding: 0px 20px;
      .close-img {
        height: 20px;
        width: 20px;
        background: red !important;
        right: 10%;
        top: 4%;
        cursor: pointer;
        border-radius: 4px;
        z-index: 10;
      }
    }

    .post-img {
      height: 313px;
      border-radius: 7px;
      object-fit: cover;
    }

    .last-img {
      .text {
        font-size: 24px;
        color: ${whiteColor};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "EnnVisionsMedium";
        z-index: 1;
      }

      .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        transition: 0.5s ease;
        background: ${pureDark};
        border-radius: 7px;
        opacity: 0.46;
      }
    }

    .choose-section {
      margin-top: 16px;
      border-bottom: 1px solid ${lightGrey2};
      margin-bottom: 10px;
      padding: 0 20px;

      .gallery {
        font-size: 18px;
        color: ${pureDark};
        font-family: "EnnVisionsMedium";
      }

      &-icons {
        flex-wrap: wrap;
        img {
          background: #f5f5f5;
          border-radius: 3px;
          padding: 6px;
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export const CreatePost2Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .inner-section {
    background: ${whiteColor};
    box-shadow: 0px 0px 15px #0000000f;
    border: 1px solid ${lightGrey10};
    border-radius: 6px;
    max-width: 465px;
    margin: 0 auto;

    .gallery-imgs {
      padding: 0 10px 10px 10px;

      .inner-section {
        padding: 0px 10px;
      }
      .close-img {
        height: 24px;
        width: 24px;
        background: red !important;
        right: 8%;
        top: 4%;
        cursor: pointer;
        border-radius: 4px;
        z-index: 10;
      }
      .mini {
        height: 18px;
        width: 18px;
        right: 6%;
        top: 6%;
      }
    }

    @media screen and (max-width: 480px) {
      width: 94%;
      margin: 0 auto;
    }
    .more-img-text {
      font-size: 24px;
      color: ${whiteColor};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: "EnnVisionsMedium";
      z-index: 1;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      transition: 0.5s ease;
      background: ${pureDark};
      border-radius: 7px;
      opacity: 0.46;
    }
    .row {
      background-color: ${tertiaryGrey7};
      width: 99.9%;
      margin: 0 auto;
    }

    .post-img {
      max-height: 333px;
    }

    .choose-section {
      margin-top: 16px;
      border-bottom: 1px solid ${lightGrey2};
      margin-bottom: 10px;
      padding: 0 10px;

      .gallery {
        font-size: 18px;
        color: ${pureDark};
        font-family: "EnnVisionsMedium";
      }

      &-icons {
        img {
          background: #f5f5f5;
          border-radius: 3px;
          padding: 6px;
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export const CreatePost3Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .inner-section {
    background: ${whiteColor};
    box-shadow: 0px 0px 15px #0000000f;
    border: 1px solid ${lightGrey10};
    border-radius: 6px;
    max-width: 465px;
    margin: 0 auto;
    @media screen and (max-width: 480px) {
      width: 94%;
      margin: 0 auto;
    }

    .gallery-imgs {
      padding: 0 10px 10px 10px;
    }

    .more-img-text {
      font-size: 24px;
      color: ${whiteColor};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: "EnnVisionsMedium";
      z-index: 1;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      transition: 0.5s ease;
      background: ${pureDark};
      border-radius: 7px;
      opacity: 0.46;
    }

    .say-something {
      color: ${lightGrey};
      font-size: 13px;
      margin: 10px 0;
      text-align: center;
    }

    .row {
      width: 100%;
      margin: 0 auto;
    }

    .post-img {
      max-height: 333px;
    }

    .choose-section {
      margin-top: 16px;
      border-bottom: 1px solid ${lightGrey2};
      margin-bottom: 10px;
      padding: 0 10px;
      .gallery {
        font-size: 18px;
        color: ${pureDark};
        font-family: "EnnVisionsMedium";
      }

      &-icons {
        img {
          background: #f5f5f5;
          border-radius: 3px;
          padding: 6px;
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export const CreatePost4Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding-top: 18px;
  }
  .inner-section {
    background: ${whiteColor};
    box-shadow: 0px 0px 15px #0000000f;
    border: 1px solid ${lightGrey10};
    border-radius: 6px;
    max-width: 850px;
    border-radius: 6px;
    margin: 0 auto;

    @media screen and (max-width: 480px) {
      width: 94%;
      margin: 0 auto;
    }

    .say-something {
      color: ${lightGrey};
      font-size: 13px;
      margin: 10px 0;
      text-align: center;
    }
    .row {
      width: 100%;
      margin: 0 auto;
    }

    .more-img-text {
      font-size: 24px;
      color: ${whiteColor};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: "EnnVisionsMedium";
      z-index: 1;
    }

    .mini-title {
      color: ${pureDark};
      font-size: 14px;
    }

    .btm-border {
      border-bottom: 1px solid ${tertiaryGrey19};
    }
    .tag-section {
      border: 1px solid ${tertiaryGrey19};
      border-radius: 7px;
      padding: 8px 10px;

      button {
        font-size: 12px;
        padding: 4px;
        border-radius: 4px;
        color: ${pureDark};
        &:hover {
          background: ${PrimaryColor};
          color: ${whiteColor};
        }
      }
    }
    .advanced-title {
      font-size: 17px;
      color: ${pureDark};
      font-family: "EnnVisionsMedium";
    }

    .request-section {
      border: 1px solid ${tertiaryGrey19};
      border-radius: 7px;
      padding: 8px 10px;
    }

    .advanced-settings {
      border: 1px solid ${tertiaryGrey19};
      border-radius: 7px;
      padding: 8px 10px;
    }

    .post-img {
      max-height: 333px;
    }

    .choose-section {
      margin-top: 16px;
      border-bottom: 1px solid ${lightGrey2};
      margin-bottom: 10px;
      padding: 0 10px;
      .gallery {
        font-size: 18px;
        color: ${pureDark};
        font-family: "EnnVisionsMedium";
      }

      &-icons {
        img {
          background: #f5f5f5;
          border-radius: 3px;
          padding: 6px;
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }
    input[type="checkbox"] {
      cursor: pointer;
    }
  }
`;
