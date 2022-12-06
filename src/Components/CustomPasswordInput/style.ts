import styled from "styled-components";
import { BasicColor } from "../GlobalStyle";

export const CustomPasswordInputStyle = styled.div<any>`
  label {
    font-family: ${(props) => props.fontFamily};
    margin-bottom: ${(props) => props.labelMarginBottom};
  }

  .customPasswordInput {
    background: white;
    border: 1px solid #c6c6c8;
    border-radius: 4px;
    margin-top: 7px;
    input {
      border: none;
      outline: none;
      width: 83%;
      font-family: ${(props) => props.fontFamily};
      font-family: ${(props) => props.border};
    }
  }

  .ant-input-suffix span {
    font-size: 12px;
    font-weight: normal;
    color: ${BasicColor};
    cursor: pointer;
  }
`;

export default CustomPasswordInputStyle;
