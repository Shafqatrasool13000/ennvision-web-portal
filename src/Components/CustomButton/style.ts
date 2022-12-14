import styled from "styled-components";

const CustormButtonStyle: any = styled.div`
  width: ${(props: any) => props.width};

  .ant-btn {
    border: none;
    outline: none;
    background-color: ${(props: any) => props.bgcolor};
    color: ${(props: any) => props.color};
    padding: ${(props: any) => props.padding};
    font-size: ${(props: any) => props.fontSize};
    border-radius: 4px;
    width: -moz-available;
    width: -webkit-fill-available;
    height: auto;
    margin: ${(props: any) => props.margin};
    border: ${(props: any) => props.border};
    font-family: ${(props: any) => props.fontFamily};
    cursor: pointer;
    &:hover {
      outline: none;
    }
  }
`;

export default CustormButtonStyle;
