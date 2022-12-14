import styled from "styled-components";
import {
  lightblue,
  lightColor1,
  PrimaryColor,
  pureDark,
  secondaryDark4,
  tertiaryGrey2,
  tertiaryGrey7,
  tertiaryGrey8,
  whiteColor,
} from "../../Components/GlobalStyle";

const MyProfileStyle = styled.div`
  margin-top: 90px;
`;
export default MyProfileStyle;

export const ProfileBoxStyled = styled.div`
  padding-top: 16px;
  max-width: 1040px;
  margin: 0 auto;
  background: ${whiteColor};
  .owner-details {
    border: 1px solid ${lightColor1};
    border-radius: 5px;
    padding: 14px;
    margin-top: 22px;

    .bio {
      h6 {
        font-size: 18px;
        font-family: "EnnVisionsMedium";
        color: ${pureDark};
      }
      .branch {
        color: ${tertiaryGrey7};
        font-size: 16px;
      }
      .location {
        color: ${secondaryDark4};
        font-size: 14px;
      }
    }
    .sold-properties {
      background: ${tertiaryGrey8};
      border: 1px solid ${tertiaryGrey8};
      border-radius: 5px;

      .properties {
        background: ${tertiaryGrey8};
        border: 1px solid ${lightColor1};
        border-radius: 5px;

        .quantity {
          font-size: 18px;
          font-family: "EnnVisionsMedium";
        }
      }
      padding: 15px;
      .title {
        color: ${tertiaryGrey7};
        font-size: 15px;
      }
      .chat-btn {
        background: ${lightblue};
        border-radius: 5px;
        font-size: 15px;
        padding: 4px;
        color: ${whiteColor};
        width: 90%;
      }
      .call-btn {
        background: ${PrimaryColor};
        border-radius: 5px;
        font-size: 15px;
        padding: 4px;
        color: ${whiteColor};
        width: 90%;
      }
      @media screen and (min-width: 576px) {
        margin-top: -10px;
        button {
          width: 100%;
        }
      }
      @media screen and (max-width: 576px) {
        margin-top: 10px;
        button {
          width: 50%;
        }
      }
    }
    .about-us-text {
      color: ${tertiaryGrey7};
      border-top: 1px solid ${tertiaryGrey2};
      width: 98%;
    }
    .further-details {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 13px;
      margin-top: 18px;
      padding-bottom: 10px;

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .profile-details {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background: #fcfbfb;
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding: 12px;
        p {
          margin: 0;
        }
        &-name {
          color: #232837;
        }
        &-title {
          font-family: "EnnVisionsMedium";
        }
      }
    }
  }
`;
