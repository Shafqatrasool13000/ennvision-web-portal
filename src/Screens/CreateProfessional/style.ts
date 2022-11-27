import styled from "styled-components";
import {
  BasicColor,
  lightGrey9,
  PrimaryColor,
  tertiaryGrey12,
  tertiaryGrey8,
  whiteColor,
} from "../../Components/GlobalStyle";

export const EditPhoneStyle = styled.div`
  text-align: center;
  margin: 0 auto;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${tertiaryGrey8};

  .inner-container {
    max-width: 420px;
    background: ${whiteColor};
    box-shadow: 0px 0px 16px #00000017;
    border-radius: 7px;
    padding: 18px;
    img {
      height: 60px;
      margin-bottom: 12px;
    }
    .message {
      margin-top: 14px;
      font-size: 13px;
      width: 90%;
      margin: 0 auto;
      color: ${lightGrey9};
    }

    .signup-text {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        color: ${PrimaryColor};
        text-decoration: none;
      }
      p {
        font-size: 14px;
        font-weight: normal;
        color: ${tertiaryGrey12};
      }
      h6 {
        margin-top: -8px;
        padding: 0;
        font-size: 14px;
        font-weight: normal;
        color: ${BasicColor};
      }
    }
  }
`;

export default EditPhoneStyle;
