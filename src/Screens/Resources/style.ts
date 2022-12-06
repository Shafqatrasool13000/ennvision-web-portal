import styled from "styled-components";
import { secondaryDark4 } from "../../Components/GlobalStyle";

const ResourcesStyle = styled.div``;
export default ResourcesStyle;

export const RecentResoucesStyle = styled.div`
  .resouce-box {
    border: 1px solid #e9e9e9;
    padding: 8px;
    margin-top: 14px;
    border-radius: 5px;
    .left-img {
      width: 76px;
      height: 76px;
      border: 1px solid #e9e9e9;
      border-radius: 3px;
      object-fit: cover;
    }
    .heading {
      font-size: 16px;
      font-family: "EnnVisionsMedium";
      margin-bottom: 0;
    }
  }
`;
export const TextWidgetStyled = styled.section`
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 14px;
  p {
    font-size: 14px;
    margin-bottom: 0;
  }
`;

export const ResourcesTagsStyle = styled.section`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ResourcesCatagoryStyle = styled.div`
  margin-top: 15px;
  .ant-collapse {
    background-color: unset;
    border: none;
  }
  .ant-collapse > .ant-collapse-item {
    border-bottom: none;
    margin-top: 10px;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    border: 1px solid #d9d9d9;
    border-top: none;
  }
  .ant-collapse-header {
    border: 1px solid #d9d9d9;
  }
  .ant-collapse-icon-position-end > .ant-collapse-item > .ant-collapse-header {
    position: relative;
    padding: 6px 16px;
    padding-right: 40px;
  }
`;
export const ShowCaseStyle = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  .large-img {
    object-fit: cover;
  }
  .bottom-section {
    padding: 16px;
    .main-heading {
      font-size: 26px;
      font-family: "EnnVisionsMedium";
    }
    .details {
      color: ${secondaryDark4};
      margin-top: 16px;
      margin-bottom: 0;
    }
  }
`;
