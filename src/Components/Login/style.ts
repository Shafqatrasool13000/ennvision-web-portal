import styled from "styled-components";
import {
  BasicColor,
  PrimaryColor,
  tertiaryGrey12,
  tertiaryGrey8,
} from "../../Components/GlobalStyle";

export const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background: ${tertiaryGrey8};
  margin: 0 auto;

  .login-container {
    &-card {
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      border-radius: 6px;
      width: 100%;
      margin: auto;
      transform: translateY(-20%);
      padding: 20px 12px;
      &-form {
        width: 96%;
      }

      &-logo {
        text-align: center;

        img {
          width: 164px;
          margin-bottom: 0;
        }

        h1 {
          font-size: 20px;
          font-weight: 700;
          color: #1b283f;
        }
      }
    }
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
      color: #8e8e93;
    }
    h6 {
      margin-top: -8px;
      padding: 0;
      font-size: 14px;
      font-weight: normal;
      color: ${BasicColor};
    }
  }
  .is-invalid {
    border: 1px solid red;
    border-radius: 5px;
    background: white;
    border-radius: 2px;
    padding: 10px;
    width: 100%;
    width: -moz-available;
    outline: none;
    margin-bottom: 8px;
  }
  .customInput,
  .customPasswordInput {
    background: white;
    border: 1px solid #c6c6c8;
    border-radius: 2px;
    padding: 10px;
    width: 100%;
    width: -moz-available;
    outline: none;
    margin-bottom: 8px;
  }
  .forget_password {
    color: ${PrimaryColor};
    font-size: 14px;
    text-decoration: none;
    font-family: "EnnVisionsMedium" !important;
  }
  .remember-password {
    &-text {
      color: ${tertiaryGrey12};
    }
  }
  .ant-input-suffix {
    margin-left: 30px;
  }
  .logo {
    height: 60px;
    width: 155px;
    margin-bottom: 20px;
  }
  .line {
    display: none;
  }

  @media screen and (max-width: 425px) {
    .login-container {
      &-card {
        padding: 3px;
        &-logo {
          h1 {
            display: none;
          }
        }
      }
    }
    .signup-text {
      p {
        font-size: 14px;
      }
      h6 {
        font-size: 14px;
        margin-left: 3px;
      }
    }
    .line {
      display: inline;
      width: 90%;
      margin-bottom: 6px;
    }
  }
`;

export default LoginStyle;
