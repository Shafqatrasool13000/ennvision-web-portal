import styled from "styled-components";
import {
  lightColor1,
  pureDark,
  secondaryDark5,
  tertiaryGrey7,
  tertiaryGrey8,
} from "../../Components/GlobalStyle";

const ProfessionalPackagesStyle = styled.div`
  padding: 80px 0 20px 0;
  background-color: ${tertiaryGrey8};

  .head-bar {
    background: #fcfcfc;
    border-radius: 7px 7px 0px 0px;
    padding: 10px;
  }

  .cards {
    margin-top: 20px;
    .card {
      border: none;
      padding: 10px;
      border-radius: 7px;
      margin-right: 20px;
      .heading {
        color: ${tertiaryGrey7};
        font-size: 16px;
        font-family: "EnnVisionsMedium";
      }
      .sub-heading {
        color: ${tertiaryGrey7};
        font-size: 14px;
      }
      .price {
        color: ${pureDark};
        font-size: 20px;
        margin-top: 12px;
        font-family: "EnnVisionsMedium";
        margin-top: 0;
        @media screen and (max-width: 991px) {
          font-size: 18px;
        }
        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }
      .offers {
        .offer {
          margin-top: 22px;
          &-type {
            color: ${secondaryDark5};
            font-size: 16px;
            margin-left: 12px;
          }
        }
      }
      .purchase-btn {
        margin: 0 auto;
        width: 80%;
        font-size: 16px;
        padding: 10px 0;
        margin-top: 40px;
        background-color: ${lightColor1};
        color: ${tertiaryGrey7};
      }
    }
  }
`;

export default ProfessionalPackagesStyle;
