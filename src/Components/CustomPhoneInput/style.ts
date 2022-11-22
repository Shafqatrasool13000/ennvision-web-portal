import styled from 'styled-components';
import { secondaryDark2, tertiaryGrey2 } from '../GlobalStyle';

export const PhoneInputStyled=styled.div`
.ant-select-selection-item{
font-weight: 700;
color: ${secondaryDark2};
}
input{
background: white;
border: 1px solid #c6c6c8;
border-radius: 5px;
padding: 16px;
&::placeholder{
color: ${tertiaryGrey2};
font-size: 13px;
letter-spacing: .5px;
}
}
.ant-input-affix-wrapper{
background: white;
border: 1px solid #c6c6c8;
border-radius: 5px;
padding: 9px;
&::placeholder{
color: ${tertiaryGrey2};
font-size: 13px;
letter-spacing: .5px;
}
}
`

export const PhoneLargeInputStyled=styled.div`
margin-top: 9px;
.ant-select-selection-item{
font-weight: 700;
color: ${secondaryDark2};
}
input{
background: white;
border: 1px solid #c6c6c8;
border-radius: 5px;
padding: 16px;
&::placeholder{
color: ${tertiaryGrey2};
font-size: 19px;
letter-spacing: .5px;
}
}
.ant-input-affix-wrapper{
background: white;
border: 1px solid #c6c6c8;
border-radius: 5px;
padding: 15px;
&::placeholder{
color: ${tertiaryGrey2};
font-size: 19px;
letter-spacing: .5px;
}
}
@media screen and (max-width:1400px) {
input{
padding: 10px;
&::placeholder{
font-size: 14px;
}
}
.ant-input-affix-wrapper{
padding: 10px;
&::placeholder{
font-size: 14px;
}
}
}
@media screen and (max-width:1024px) {
input{
padding: 8px;
&::placeholder{
font-size: 13px;
}
}
.ant-input-affix-wrapper{
padding: 8px;
&::placeholder{
font-size: 13px;
}
}
}
`