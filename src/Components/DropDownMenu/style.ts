import styled from "styled-components";
import { tertiaryGrey7 } from "../GlobalStyle";

export const DropDownMenuStyle = styled.div`
  .menu-overlay {
    background-color: red;
    a {
      font-size: 15px;
      color: ${tertiaryGrey7};
      list-style: none;
    }
  }
  .ant-dropdown-menu-title-content {
    font-size: 15px;
    color: ${tertiaryGrey7} !important;
    list-style: none;
  }
`;
