import styled from "styled-components";
import { tertiaryGrey7 } from "../GlobalStyle";


export const CustomSelectContainer = styled.div`
margin-bottom: 10px;
width: 100%;

  label {
  font-size: 13px;
  text-transform: capitalize;
  display: block;
  margin-bottom: 10px;
  }
  .ant-select-arrow{
  color: #000000;
  }
  .ant-select-selection-placeholder{
  color: ${tertiaryGrey7};
  }

  .ant-select{
  background: white;
  border: 0.5px solid #D6D6E0;
  border-radius: 3px;
  width: 100%;
  }
`;
