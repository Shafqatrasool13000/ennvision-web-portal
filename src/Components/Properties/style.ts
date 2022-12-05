import styled from "styled-components";
import {
  lightDark,
  PrimaryColor,
  tertiaryGrewish,
  whiteColor,
} from "../GlobalStyle";

type PropertiesProps = {
  marginTop: string;
};
export const PropertiesStyle = styled.div<PropertiesProps>`
  border-radius: 6px;
  .properties {
    margin-top: ${(props) => props.marginTop};
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
          &:hover {
            color: ${whiteColor};
            background-color: ${PrimaryColor};
          }
        }
        .price {
          font-size: 18px;
          font-family: "EnnVisionsMedium";
          color: ${PrimaryColor};
        }
      }
      .property-details {
        margin-top: 10px;
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
  }
`;
