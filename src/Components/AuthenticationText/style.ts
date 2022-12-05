import styled from "styled-components";
import { BasicColor, PrimaryColor } from "../GlobalStyle";

type AuthenticateTextProps = {
  margin: string;
};

const AuthenticateTextStyle = styled.div<AuthenticateTextProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin};
  a {
    color: ${PrimaryColor};
    text-decoration: none;
  }
  p {
    font-size: 14px;
    font-weight: normal;
    color: #8e8e93;
  }
  h6 {
    margin-top: -8px;
    padding: 0;
    font-size: 14px;
    font-weight: normal;
    color: ${BasicColor};
  }
`;
export default AuthenticateTextStyle;
