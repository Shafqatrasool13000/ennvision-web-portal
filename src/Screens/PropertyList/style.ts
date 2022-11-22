import styled from 'styled-components';
import { lightGrey6, lightGrey7, secondaryDark3 } from '../../Components/GlobalStyle';

export const PropertyList = styled.div`
margin-top: 28px;

.table-link{
color: ${secondaryDark3} !important;
font-family: 'EnnVisionsMedium';
font-size: 16px !important;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.ant-table-body::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.ant-table-body{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}


.btn{
display: flex;
justify-content: flex-end;
margin-top: -25px;
}

.ant-table-thead{
background-color: ${lightGrey6} ;
border-radius:8px;
.ant-table-cell{
background: transparent;
color:${secondaryDark3};
font-family: 'EnnVisionsMedium';
padding: 8px 16px;
font-size: 14px;
}
}
.ant-table-tbody{
.ant-table-cell{
padding: 3px 16px;  
&::before{
height: 0 !important;
} 
a{
 text-decoration: none;
 color: ${lightGrey7};
 font-size: 14px;
 &:first-child{
}

}
}    
}
.ant-table-tbody > tr > td{
border-bottom: none !important;
}
.action_icons{
background:#E1E2E2 ;
width:23px;
height:22px;
padding: 3px;
border-radius: 2px;
cursor: pointer;
}
.deleteicon{
background: #D63229 !important;
cursor: pointer;
}
.editicon{
background: #007AFF !important;
cursor: pointer;
}
`;

export const MobileTableStyled = styled.div`

.plus-icon{
right:5%;
bottom: 5%;
position: fixed;
z-index: 30;
}
display: flex;
justify-content: space-between;
p{
margin:0;    
font-size: 16px;
}

.inner-section{
padding-bottom: 10px;
.card:first-child{
margin-top: 12px;
} 
.card:not(:first-child){
margin-top:20px;
}  
.card{
padding:12px;

.name-section{
.name{
font-weight: 600;
}
.id{
color:#156985 ;
}
}

.details{
margin-top:10px;
font-size: 16px;
}
.details-1{
margin-top:10px;
font-size: 13px;
}

.price-section{
margin-top:14px;
}

.actions-section{
margin-top:16px;
img{
background-color:#E1E2E2;
padding: 10px;
height: 35px;
}
img:not(:first-child){
margin-left:4px ;
}

.warn-actions{
img:first-child{
background-color:#C7112B;
}
img:last-child{
background-color:#007AFF ;  
}    
}
}
}

}
`