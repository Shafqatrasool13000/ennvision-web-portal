import styled from "styled-components";
import { FieldStyleBasicProps } from "../FormControl";

interface InputStyleProps extends FieldStyleBasicProps {
  fontFamily: string;
  border: string;
  padding: string;
  labelMarginBottom: string;
  labelFamily: string;
}
const CustomInputStyle = styled.div<InputStyleProps>`
  width: 100%;

  label {
    font-size: 14px;
    text-transform: capitalize;
    display: block;
    color: #1b283f;
    font-family: ${(props) => props.labelFamily};
    margin-bottom: ${(props) => props.labelMarginBottom};
  }
  .ant-input {
    padding: ${(props) => props.padding} !important;
    border: ${(props) => props.border};
  }
  .ant-input-affix-wrapper {
    padding: 0;
    border: ${(props) => props.border};
  }
  .ant-input-suffix {
    margin-right: 10px;
  }
`;

export default CustomInputStyle;
