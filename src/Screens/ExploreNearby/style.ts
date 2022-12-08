import styled from "styled-components";
import {
  lightColor1,
  lightDark,
  lightGrey2,
  PrimaryColor,
  pureDark,
  secondaryDark4,
  tertiaryGrewish,
  tertiaryGrey14,
  tertiaryGrey7,
  whiteColor,
} from "../../Components/GlobalStyle";

const ExploreNearbyStyle = styled.div`
  margin-top: 90px;
`;

export default ExploreNearbyStyle;

export const SuggestionStyle = styled.div`
  .title {
    font-size: 15px;
    color: ${tertiaryGrey14};
  }
  .profile-icon {
    border-radius: 50%;
    width: 34px;
    height: 34px;
  }
  .profile-details {
    margin-left: 10px;
    &-title {
      font-family: "EnnVisionsMedium";
      font-size: 14px;
    }
    &-sub-title {
      color: ${tertiaryGrey14};
      font-size: 12px;
    }
  }
`;

export const PostsStyle = styled.div`
  padding-bottom: 12px;
  margin-top: 30px;

  .visited-text {
    font-size: 16px;
    color: #fff;
    background-color: ${PrimaryColor};
    padding: 0 10px;
    font-family: "EnnVisionsMedium";
  }
  .post-owner-section {
    padding: 10px;
    border: 0.5px solid #efeff4;
    .name {
      color: ${tertiaryGrey7};
      font-family: "EnnVisionsMedium";
    }
    .time {
      font-size: 14px;
      color: ${secondaryDark4};
    }
  }
  .card {
    box-shadow: 0px 0px 20px #00000012;
    border-radius: 3px;
    border: none;
    .sub-title {
      color: ${lightDark};
      font-size: 14px;
    }
    .property-description {
      border-bottom: 1px solid ${tertiaryGrewish};
      padding-bottom: 5px;
      .btn-primary {
        color: ${PrimaryColor};
        background-color: rgba(199, 17, 43, 0.12);
        font-size: 14px;
        border: none;
        @media screen and (max-width: 480px) {
          font-family: "EnnVisionsMedium";
        }
        /* &:hover {
            color: ${whiteColor};
            background-color: ${PrimaryColor};
          } */
      }
      .price {
        font-size: 18px;
        font-family: "EnnVisionsMedium";
        color: ${PrimaryColor};
      }
    }
    .property-details {
      margin-top: 10px;
      border-bottom: 1px solid ${tertiaryGrewish};
      padding-bottom: 10px;

      .img {
        vertical-align: super;
      }
      .text {
        margin-top: 3px;
        margin-left: 4px;
        margin-bottom: 0;
      }
    }

    .react {
      margin-top: 10px;
      padding-bottom: 10px;
      &-icons {
        img {
          border-radius: 3px;
          padding: 6px;
          &:not(:last-child) {
            /* margin-right: 10px; */
          }
        }
      }
    }
    .caption-section {
      .post-caption {
        font-size: 14px;
        color: ${tertiaryGrey7};
      }
    }
  }
`;

export const Posts2Style = styled.div`
  padding-bottom: 12px;
  margin-top: 30px;

  .alice-carousel__dots-item:not(.__custom):hover,
  .alice-carousel__dots-item:not(.__custom).__active {
    background-color: ${PrimaryColor};
  }

  .alice-carousel__dots {
    margin: 10px 3px 5px;
  }
  .visited-text {
    font-size: 16px;
    color: #fff;
    background-color: ${PrimaryColor};
    padding: 0 10px;
    font-family: "EnnVisionsMedium";
  }
  .post-owner-section {
    padding: 10px;
    border: 0.5px solid #efeff4;
    .name {
      color: ${tertiaryGrey7};
      font-family: "EnnVisionsMedium";
    }
    .time {
      font-size: 14px;
      color: ${secondaryDark4};
    }
  }
  .card {
    box-shadow: 0px 0px 20px #00000012;
    border-radius: 3px;
    border: none;
    .sub-title {
      color: ${lightDark};
      font-size: 14px;
    }
    .property-description {
      border-bottom: 1px solid ${tertiaryGrewish};
      padding-bottom: 5px;
      .btn-primary {
        color: ${PrimaryColor};
        background-color: rgba(199, 17, 43, 0.12);
        font-size: 14px;
        border: none;
        @media screen and (max-width: 480px) {
          font-family: "EnnVisionsMedium";
        }
        /* &:hover {
            color: ${whiteColor};
            background-color: ${PrimaryColor};
          } */
      }
      .price {
        font-size: 18px;
        font-family: "EnnVisionsMedium";
        color: ${PrimaryColor};
      }
    }
    .property-details {
      margin-top: 10px;
      border-bottom: 1px solid ${tertiaryGrewish};
      padding-bottom: 10px;

      .img {
        vertical-align: super;
      }
      .text {
        margin-top: 3px;
        margin-left: 4px;
        margin-bottom: 0;
      }
    }

    .react {
      margin-top: 10px;
      padding-bottom: 10px;
      &-icons {
        img {
          border-radius: 3px;
          padding: 6px;
          &:not(:last-child) {
            /* margin-right: 10px; */
          }
        }
      }
    }
    .caption-section {
      .post-caption {
        font-size: 14px;
        color: ${tertiaryGrey7};
      }
    }
  }
`;

export const SuggestedStoriesStyle = styled.div`
  padding-bottom: 14px;
  margin-top: 10px;
  .card {
    border: 0.5px solid ${lightGrey2};
    border-radius: 4px;
    margin-top: 16px;
    margin-left: 16px;
    .mini-profile-img {
      position: absolute;
      z-index: 10;
      left: 10px;
      top: 10px;
    }

    &-img-top {
      height: 260px;
      object-fit: cover;
    }
    &-body {
      padding-bottom: 8px;
      .card-title {
        font-size: 16px;
        color: ${whiteColor};
        margin-bottom: 2px;
        font-family: "EnnVisionsMedium";
      }
      .card-subtitle {
        font-size: 12px;
        margin-top: 4px;
        color: white;
      }
    }
  }
`;
