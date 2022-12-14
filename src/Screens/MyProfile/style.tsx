import styled from "styled-components";

const MyProfileStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 13px;
  margin-top: 18px;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .profile-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: #fcfbfb;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    padding: 12px;
    p {
      margin: 0;
    }
    &-name {
      color: #232837;
    }
    &-title {
      font-family: "EnnVisionsMedium";
    }
  }
`;
export default MyProfileStyle;
