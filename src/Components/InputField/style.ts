import styled from "styled-components";

const InputFieldStyle = styled.div<any>`
  width: 100%;
  margin-top: ${(props) => props.marginTop};

  .ant-input {
    padding: ${(props) => props.padding} !important;
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    text-align: ${(props) => props.textAlign};
  }
  .ant-input-affix-wrapper {
    padding: 0;
  }
  .ant-input-suffix {
    margin-right: 10px;
  }
`;

export default InputFieldStyle;
