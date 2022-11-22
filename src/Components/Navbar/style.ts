import styled from "styled-components";
import { PrimaryColor, tertiaryGrey7, whiteColor } from "../GlobalStyle";


export const StyledContainer=styled.div`
background: transparent;
width: 100%;
z-index: 20;
.navbar{
background-color: ${PrimaryColor};
}
.nav-link{
color: ${whiteColor} !important;
@media screen and (min-width:991px){
&:not(:first-child){
margin-left: 27px;
}   
}
}
`
export const StyledAuthContainer=styled.div`
background: transparent;
width: 100%;
z-index: 20;
.logo{
height: 33px;
}
.navbar{
background: #FFFFFF;
box-shadow: 0px 0px 3px #00000029;
}
.active{
font-family: 'EnnVisionsMedium';
}
.nav-link{
color: ${tertiaryGrey7} !important;
@media screen and (min-width:991px){
&:not(:first-child){
margin-left: 27px;
}   
}
}
`