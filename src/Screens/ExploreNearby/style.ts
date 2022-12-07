import styled from "styled-components";
import {
  lightColor1,
  lightDark,
  lightGrey2,
  PrimaryColor,
  pureDark,
  tertiaryGrewish,
  tertiaryGrey14,
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
  .visited-text {
    font-size: 16px;
    color: #fff;
    background-color: ${PrimaryColor};
    padding: 0 10px;
    font-family: "EnnVisionsMedium";
    bottom: 40%;
  }
  .card {
    box-shadow: 0px 0px 20px #00000012;
    border-radius: 3px;
    margin-top: 30px;
    border: none;
    cursor: pointer;
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
        border-radius: 3px;
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
`;
