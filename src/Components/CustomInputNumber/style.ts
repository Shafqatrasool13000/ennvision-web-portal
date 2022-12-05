import styled from "styled-components";
import { lightGrey2 } from "../GlobalStyle";

const CustomInputStyle = styled.div`
  width: 100%;
  margin-bottom: 10px;

  label {
    font-size: 13px;
    text-transform: capitalize;
    ////sad
    display: block;
    margin-bottom: 10px;
  }
`;

export default CustomInputStyle;

export const CustomPhoneInput = styled.div`
  .ant-input-number-group .ant-input-number {
    padding: 5px !important;
    border: 1px solid ${lightGrey2} !important;
    border-radius: 0 4px 4px 0 !important;
  }
`;
