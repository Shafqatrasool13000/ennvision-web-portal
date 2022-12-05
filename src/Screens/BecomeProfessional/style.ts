import styled from "styled-components";
import {
  lightblue,
  lightGrey2,
  lightGrey5,
  PrimaryColor,
  pureDark,
  secondaryDark4,
  tertiaryGrey7,
  tertiaryGrey8,
  whiteColor,
} from "../../Components/GlobalStyle";

export const ProfessionalProfileBoxStyle = styled.div`
  border-radius: 6px;
  padding-top: 16px;
  max-width: 1040px;
  margin: 0 auto;
  background: ${whiteColor};
  .owner-details {
    border: 1px solid ${lightGrey5};
    border-radius: 5px;
    padding: 10px 14px 0px 14px;
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
      border: 1px solid ${tertiaryGrey8};
      border-radius: 5px;

      .properties {
        background: ${tertiaryGrey8};
        border: 1px solid #f5f5f5;
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
  }
`;

export const ProInputsStyle = styled.div`
  max-width: 1066px;
  margin: 0 auto;
  border-radius: 6px;
  margin-top: 16px;

  .inputs {
    background: ${whiteColor};
    border: 1px solid ${lightGrey2};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
  }
  label {
    margin-bottom: 6px;
  }
`;

export const BecomeProfessionalStyle = styled.div`
  height: 100vh;
  margin-top: 86px;
`;
