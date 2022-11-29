import styled from "styled-components";
import { pureDark } from "../GlobalStyle";

const FiltersStyle = styled.div`
  max-width: 720px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 7px;
  background: white;
  z-index: 20;
  .nav-link {
    color: ${pureDark};
    font-size: 16px;
  }
  .head-bar {
    background: #f8f8f8;
    border: 1px solid #efeff4;
    border-radius: 4px 4px 0px 0px;
    .active {
      font-family: "EnnVisionsMedium";
    }
  }
  .types {
    padding: 16px;

    .nav-link {
      color: #717272;
      font-size: 16px;
      border: 1px solid #909090;
      border-radius: 4px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 19px;
    }
    .nav-pills .nav-link.active {
      color: #c7112b;
      background: #f8e2e5 0% 0% no-repeat padding-box;
      border: 1px solid #c7112b;
      border-radius: 4px;
    }
    .nav-pills {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      column-gap: 9px;
      row-gap: 10px;

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media screen and (max-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;

export default FiltersStyle;
