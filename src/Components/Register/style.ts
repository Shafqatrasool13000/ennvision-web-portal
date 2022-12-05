import styled from "styled-components";
import { lightGrey5 } from "../../Components/GlobalStyle";

const RegisterStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: ${lightGrey5};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  .inner-container {
    &-card {
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      border-radius: 6px;
      width: 96%;
      margin: auto;

      transform: translateY(-20%);
      padding: 20px 12px;
      &-form {
        width: 96%;
      }
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
  .ant-input-number-input {
    height: 40px;
    border: 1px solid #efeff4;
  }

  .ant-input-suffix {
    margin-left: 30px;
  }

  @media screen and (max-width: 425px) {
    .inner-container {
      &-card {
        padding: 3px;
        &-logo {
          h1 {
            display: none;
          }
        }
      }
    }
  }
`;

export default RegisterStyle;
