import styled from "styled-components";
import {
  lightblue,
  lightColor1,
  lightGrey2,
  lightGrey5,
  lightGrey8,
  PrimaryColor,
  pureDark,
  secondaryDark4,
  tertiaryGrey2,
  tertiaryGrey7,
  tertiaryGrey8,
  whiteColor,
} from "../../Components/GlobalStyle";

export const ProfessionalProfileStyled = styled.div`
  background-color: ${tertiaryGrey8};
  height: 100%;
`;

export const ProfileBoxStyled = styled.div`
  border: 1px solid ${tertiaryGrey8};
  padding-top: 16px;
  max-width: 1040px;
  margin: 0 auto;
  background: ${whiteColor};
  .owner-details {
    border: 1px solid ${lightGrey5};
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
  }
`;

export const PostsStyled = styled.div`
  .card {
    border: 0.5px solid ${lightGrey2};
    border-radius: 3px;
    margin-top: 20px;
    img {
      height: 250px;
    }
    &-body {
      padding-bottom: 8px;
      .card-title {
        font-size: 14px;
        color: ${whiteColor};
        font-family: "EnnVisionsMedium";
        margin-bottom: 6px;
      }
      .card-text {
        font-size: 12px;
        color: ${tertiaryGrey8};
      }
    }
  }
`;

export const ResourcesListStyled = styled.div`
  .card {
    border: 0.5px solid ${lightGrey2};
    border-radius: 3px;
    margin-top: 20px;
    border: 1px solid ${lightGrey8};
    border-radius: 5px;
    .card-img-top {
      height: 250px;
      border: 1px solid ${lightGrey8};
      border-radius: 5px;
    }
    &-body {
      padding-bottom: 8px;
      .author-bio {
        margin-top: 18px;
        img {
          height: 18px;
          vertical-align: baseline;
        }
        .title {
          font-family: "EnnVisionsMedium";
          font-size: 14px;
          margin-bottom: 0;
          margin-left: 8px;
        }
      }
      .card-title {
        font-size: 16px;
        color: ${pureDark};
        font-family: "EnnVisionsMedium";
      }
      .card-text {
        margin-top: 16px;
        font-size: 14px;
        color: ${secondaryDark4};
      }
    }
  }
`;

export const StoriesListStyled = styled.div`
  display: flex;
  margin-top: 22px;
  column-gap: 16px;
  .add-story-container {
    .card {
      margin-top: 20px;
      height: 170px;
      .plus-icon {
        position: absolute !important;
        bottom: 30%;
        left: 40%;
        background: wheat;
        padding: 5px;
        border-radius: 50%;
        cursor: pointer;
      }
      .add-story-img {
        height: 120px;
        width: 160px;
        object-fit: cover;
      }
      .card-title {
        font-size: 12px;
        margin-top: 10px;
      }
    }
  }

  .story-card {
    border: 0.5px solid ${lightGrey2};
    border-radius: 4px;
    margin-top: 20px;
    margin-left: 16px;

    img {
      height: 166px;
      object-fit: cover;
    }
    .card-body {
      padding-bottom: 8px;
      .card-title {
        font-size: 14px;
        color: ${whiteColor};
        margin-bottom: 6px;
      }
    }
  }
`;
