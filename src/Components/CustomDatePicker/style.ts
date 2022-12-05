import styled from "styled-components";
import { FieldStyleBasicProps } from "../FormControl";

export const CustomDatePickerStyle = styled.div<FieldStyleBasicProps>`
  margin-bottom: 10px;
  width: 100%;

  label {
    font-size: 13px;
    text-transform: capitalize;

    display: block;
    margin-bottom: 10px;
  }

  .ant-picker.customdatepicker {
    width: 100% !important;
    padding: ${(props) => props.padding};
    border-radius: 5px !important;
    background-color: ${(props) => props.bgColor};
    border: ${(props) => props.border};
    //padding: 8px 8px;
  }
  .ant-picker {
    padding: 8px 8px !important;
    width: 100%;
  }
`;
export default CustomDatePickerStyle;
