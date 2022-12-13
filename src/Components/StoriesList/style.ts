import styled from "styled-components";
import { lightGrey2, whiteColor } from "../GlobalStyle";

const StoriesListStyle = styled.div`
  display: flex;
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
        width: 100%;
        object-fit: cover;
      }
      .card-title {
        font-size: 12px;
        margin-top: 10px;
        font-family: "EnnVisionsBold";
      }
    }
  }

  .story-card {
    border: 0.5px solid ${lightGrey2};
    border-radius: 4px;
    margin-top: 20px;
    margin-left: 16px;
    border: 0.5px solid #efeff4;

    img {
      height: 166px;
      object-fit: cover;
    }
    .card-body {
      padding-bottom: 4px;
      width: 100%;

      border-radius: 4px;
      .card-title {
        font-size: 14px;
        color: ${whiteColor};
        margin-bottom: 6px;
        font-family: "EnnVisionsMedium";
      }
    }
  }
`;

export default StoriesListStyle;
