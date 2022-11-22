import styled from "styled-components";

export const CustomlargeInputStyled = styled.div`
width: 100%;
margin-bottom: 10px;

label {
font-size: 13px;
text-transform: capitalize;
display: block;
margin-bottom: 10px;
color:#1B283F;
}
.ant-input {
padding: 15px 8px !important;
font-size: 19px;
}
@media screen and (max-width:1400px) {
.ant-input{
padding: 12px 5px !important;
font-size: 16px;
}

}

@media screen and (max-width:1024px) {
.ant-input{
padding: 9px 4px !important;
font-size: 14px;
}
}
`;
