import styled from "styled-components";
import { backImageProps, ImgContainerProps } from "./GlobalTypes";

export const BasicColor = "#C0922E";
export const PrimaryColor = "#C7112B";
export const whiteColor = "#ffffff";
export const pureDark = "#000000";
export const lightDark = "#4D4D4D";
export const secondaryDark = "#221E30";
export const secondaryGrey = "#AAB2BA";
export const secondaryDark2 = "#1C1C1E";
export const secondaryDark3 = "#1B283F";
export const secondaryDark4 = "#4F5460";
export const secondaryDark5 = "#393939";
export const tertiaryDark = "#1A1B1E";
export const lightGrey = "#909090";
export const lightGrey2 = "#EFEFF4";
export const lightGrey3 = "#707070";
export const lightGrey4 = "#D1D1D6";
export const lightGrey5 = "#E9E9E9";
export const lightGrey6 = "#717272";
export const lightGrey7 = "#464E5F";
export const lightGrey8 = "#E9E9E9";
export const lightGrey9 = "#0D0E10";
export const lightGrey10 = "#e5e2e2";

export const secondaryGreen = "#32D74B";
export const greenishColor = "#34C759";

export const tertiaryGrey = "#808896";
export const tertiaryGrey2 = "#80808F";
export const tertiaryGrey3 = "#B5B5C3";
export const tertiaryGrey4 = "#AEAEB2";
export const tertiaryGrey5 = "#E5E5EA";
export const tertiaryGrey6 = "#D6D6E0";
export const tertiaryGrey7 = "#232837";
export const tertiaryGrey8 = "#FCFBFB";
export const tertiaryGrey10 = "#FAFAFA";
export const tertiaryGrey11 = "#00B0E9";
export const tertiaryGrey12 = "#8E8E93";
export const tertiaryGrey13 = "#ECF0F3";
export const tertiaryGrey14 = "#717272";
export const tertiaryGrey15 = "#FCFBFBB3";
export const tertiaryGrey16 = "#F8F8F8";
export const tertiaryGrey17 = "#D1D1D6";
export const tertiaryGrey18 = "#F3F3F3";
export const tertiaryGrey19 = "#EBEBEB";

export const lightColor1 = "#F5F5F5";

export const lightblue = "#04A4D8";
export const lightblue2 = "#049CCE";

export const tertiaryGrewish = "#C6C6C8";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  .ant-btn {
    background-color: ${(props: any) => props.bkColor};
    color: ${(props: any) => props.color};
    width: ${(props: any) => props.width};
    padding: ${(props: any) => props.padding};
    font-size: 16px;
    height: auto;
  }
`;

export const TertiaryHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  color: #1a1b1e;
  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 21px;
    font-weight: bold;
  }
`;
export const InputErrorMessage = styled.div`
  color: red;
  text-align: start;
  margin-left: 3px;
  font-size: 12px;
  letter-spacing: 1px;
  margin-top: 5px;
`;

export const SecondaryHeading = styled.h5`
  color: ${pureDark};
  font-family: "EnnVisionsMedium";
  font-size: 40px;
  @media screen and (max-width: 991px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const SecondaryHeadingMini = styled.h5`
  color: ${pureDark};
  font-family: "EnnVisionsMedium";
  font-size: 31px;
  @media screen and (max-width: 991px) {
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const TertiraryHeading = styled.h6`
  color: ${pureDark};
  font-size: 20px;
  font-family: "EnnVisionsMedium";
  margin-bottom: 0;
  @media screen and (max-width: 991px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const TertiraryHeading1 = styled.h6`
  color: ${lightDark};
  font-size: 20px;
  @media screen and (max-width: 991px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const TertiraryHeadingMini = styled.h6`
  color: ${secondaryDark5};
  font-size: 18px;
  font-family: "EnnVisionsMedium";

  @media screen and (max-width: 991px) {
    font-size: 17px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TetraHeading = styled.div`
  font-size: 16px;
  color: ${tertiaryGrey7};
  font-family: "EnnVisionsMedium";
`;
export const MiniHeading = styled.p`
  font-size: 16px;
  color: ${pureDark};
  font-family: "EnnVisionsMedium";
  margin-bottom: 0;
`;

export const MiniHeadingSecondary = styled.p`
  font-size: 16px;
  color: ${pureDark};
  font-family: "EnnVisionsMedium";
  margin-bottom: 0;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const UnderlineRed = styled.hr`
  border-radius: 4px;
  border-top: 4px solid ${PrimaryColor};
  width: 80px;
  display: inline-block;
  opacity: 1;
  margin-top: 0;
  margin-bottom: 0;
`;
export const UnderlineBlue = styled.hr`
  border-radius: 4px;
  border-top: 3px solid ${lightblue};
  width: 76px;
  display: inline-block;
  opacity: 1;
  margin-top: 0;
  margin-bottom: 0;
`;
export const BlackDot = styled.hr`
  border-radius: 4px;
  border-top: 4px solid ${pureDark};
  width: 20px;
  margin-left: 6px;
  display: inline-block;
  opacity: 1;
  margin-top: 0;
  margin-bottom: 0;
`;

export const ImgContainer = styled.img<ImgContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const BackgroundImage = styled.div<backImageProps>`
  background-image: url(${(props) => `\" ${props.url} \"`});
  background-repeat: ${(props) => props.repeat};
  background-size: ${(props) => props.size};
  background-blend-mode: hard-light;
  background-position: ${(props) => props.postion};
  transition: all 1s ease-in-out;
  background-color: ${(props) => props.bgColor};
  background-blend-mode: ${(props) => props.blendMode};
  cursor: pointer;
  &:hover {
    background-position: bottom;
    color: ${(props) => props.hoverBgColor};
  }
`;
