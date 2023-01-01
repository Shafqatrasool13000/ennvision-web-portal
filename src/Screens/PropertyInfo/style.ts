import styled from "styled-components";
import {
  lightGrey,
  lightGrey2,
  lightGrey4,
  lightGrey5,
  lightGrey6,
  secondaryDark4,
  tertiaryGrey14,
  tertiaryGrey15,
  tertiaryGrey16,
  tertiaryGrey7,
} from "../../Components/GlobalStyle";

export const PropertyInfoStyle = styled.div`
  padding: 100px 0;
  background-color: #ffffff;

  .arithmetic-icon {
    width: 40px;
    margin-top: 10px;
    cursor: pointer;
  }

  .inner-section {
    border: 1px solid ${lightGrey5};
    padding: 16px;
  }
  .heading-bar {
    padding: 20px;
    background: ${tertiaryGrey15};
    border: 1px dashed rgba(144, 144, 144, 0.589);
    border-radius: 5px;

    &-title {
      font-size: 28px;
      color: ${tertiaryGrey7};
      font-family: "EnnVisionsMedium";
    }
    &-subtitle {
      font-size: 15px;
      color: ${tertiaryGrey7};
    }
  }

  .property-for {
    margin-top: 26px;
    .heading {
      font-size: 16px;
      color: ${tertiaryGrey7};
      font-family: "EnnVisionsMedium";
    }

    .generate-btn:hover button {
      background: transparent;

      color: black;
      border: 1px solid black;
    }
  }

  .property-types {
    margin-top: 30px;
    border-radius: 7px;
    padding: 3px;
    border-radius: 4px;

    .heading {
      font-size: 16px;
      color: ${tertiaryGrey7};
      font-family: "EnnVisionsMedium";
    }

    &-type {
      &-text {
        font-size: 16px;
        color: ${secondaryDark4};
      }
    }
  }

  .place-located {
    margin-top: 16px;
  }
`;
export const AdditionalDetailGalleryStyled = styled.div`
  margin-top: 50px;
  border: 1px solid ${lightGrey2};

  .head-bar {
    background: ${tertiaryGrey16};
    border: 1px solid ${lightGrey2};
    border-radius: 4px 4px 0px 0px;
    &-title {
      padding: 12px;
      font-size: 16px;
      color: ${tertiaryGrey7};
    }
  }

  .gallery {
    padding: 12px;
    .picture {
      position: relative;

      .lg-img {
        height: 150px;
        border: 1px solid #efeff4;
        border-radius: 3px;
        margin-top: 14px;
      }

      .close-icon {
        position: absolute;
        right: 5%;
        background: white;
        top: 15%;
        height: 22px;
      }
    }

    .add-img-container {
      width: 33%;
      margin: 0 auto;

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
      }

      .btn {
        border: none;
        padding: 8px 20px;
        border-radius: 8px;
        color: ${tertiaryGrey14} !important;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }

      .upload-btn-wrapper input[type="file"] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
      }
      .add-img {
        margin-top: 14px;
        background: ${tertiaryGrey15};
        border: 1px dashed ${lightGrey};
        border-radius: 3px;
        width: 100%;
        height: 150px;
        img {
          height: 19px;
        }

        .add-text {
          color: ${tertiaryGrey14};
          font-size: 18px;
          margin-bottom: 0;
        }
        .size-text {
          font-size: 16px;
          color: ${lightGrey};
        }
      }
    }

    .bottom-btns {
      width: 100%;
    }
  }
`;

export const FeatureDetailsStyle = styled.div`
  .key-features {
    border-bottom: 1px solid ${lightGrey4};
    padding-bottom: 12px;
    &-title {
      color: ${tertiaryGrey7};
      font-family: "EnnVisionsMedium";
    }
    .features {
      .details {
        &-text {
          color: ${lightGrey6};
          font-size: 16px;
          background-color: red;
        }
      }
    }
  }

  .features-container {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    &:not(:last-child) {
    }
    &-title {
      color: ${tertiaryGrey7};
      font-size: 19px;
      margin-top: 12px;
    }
    .feature {
      margin-top: 14px;
      &-text {
        color: ${tertiaryGrey7};
        font-size: 14px;
      }
    }
  }
`;

export const GenerateInfoStyle = styled.div`
  margin-top: 57px;
`;
