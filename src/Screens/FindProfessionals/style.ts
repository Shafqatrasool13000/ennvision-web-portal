import styled from 'styled-components';
import banner from '../../assets/Image/ic_image_1.png';
import { lightGrey3, PrimaryColor, pureDark, secondaryDark4, whiteColor } from '../../Components/GlobalStyle';

export const HeroSectionStyled=styled.div`
background: url(${banner});
background-repeat: no-repeat;
background-size: cover;
position: relative;
height: 82vh;
width: 100%;
.footer{
bottom: 10%;
}
.inner-container{
height: 80vh;
&-main-heading{
font-size: 52px;
color: ${whiteColor};
@media screen and (max-width:991px){
font-size: 40px;
}
@media screen and (max-width:786px){
text-align: center;
font-size: 32px;
}

margin: 0;
.professional-text{
font-family: 'EnnVisionsMedium';
}
}

.location-select-section{
max-width: 1000px;
margin-top: 45px;
background-color: ${whiteColor};
border-radius: 7px;
width: 95%;
.title{
color: ${pureDark};
font-size: 16px;
font-family: 'EnnVisionsMedium';
}
.sub-title{
color: ${secondaryDark4};
font-size: 14px;
}
.property-type{
border-left: 1px solid ${lightGrey3};
height: 70%;
.search-box{
background-color: ${PrimaryColor};
border-radius: 4px;
padding: 12px;

img{
vertical-align: super;
}
}
@media screen and (max-width:575px){
border-left: none;
.search-box{
img{
height:20px
}
height:40px
}
}
}
}


}
`
export const ProfessionalStyled=styled.div`
padding-bottom:120px;
margin-top: 65px;
.professionals{
.professional-container{
margin-top:42px;

}
.detail-text{
margin-top:-40px;
background: #FFFFFF;
box-shadow: 0px 0px 15px #0000001C;
border-radius: 6px;
width: 94%;
text-align: center;
padding: 9px 0;
z-index: 10;
.name{
font-size: 20px;
color: ${pureDark};
font-family: 'EnnVisionsMedium';
}
.profession{
font-size: 15px;
color: ${pureDark};
}
}

}

`