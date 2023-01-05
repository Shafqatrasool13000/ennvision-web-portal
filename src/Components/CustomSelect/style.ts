import styled from "styled-components";
import { tertiaryGrey7 } from "../GlobalStyle";

type CustomSelectProps = {
  padding: string;
  border: string;
  bgColor: string;
  fontFamily: string;
  labelFamily: string;
  labelMarginBottom: string;
};

export const CustomSelectStyle = styled.div<CustomSelectProps>`
  width: 100%;

  label {
    font-size: 13px;
    text-transform: capitalize;
    display: block;
    font-family: ${(props) => props.labelFamily};
    margin-bottom: ${(props) => props.labelMarginBottom};
  }
  .ant-select-arrow {
    color: #000000;
  }
  .ant-select-selection-placeholder {
    color: ${tertiaryGrey7};
  }

  .ant-select {
    background: ${(props) => props.bgColor};
    border: ${(props) => props.border};
    border-radius: 3px;
    width: 100%;
    padding: 3px;
  }
`;
export default CustomSelectStyle;
