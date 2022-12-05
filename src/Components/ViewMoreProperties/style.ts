import styled from "styled-components";
import { PrimaryColor } from "../GlobalStyle";

export const ViewMoreStyled = styled.div`
  .view-more {
    margin-top: 26px;
    &-text {
      color: ${PrimaryColor};
      font-size: 14px;
      cursor: pointer;
    }
    &-line {
      height: 3px;
      border-radius: 7px;
      background-color: ${PrimaryColor};
      width: 60px;
      margin-top: 10px;
      margin-left: 10px;
      opacity: 0.6;
    }

    @media screen and (max-width: 991px) {
      font-size: 20px;
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
