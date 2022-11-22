import styled from "styled-components";
import { secondaryDark3 } from "../GlobalStyle";


export const CustomSelectContainer = styled.div`
margin-bottom: 10px;
width: 100%;

/* 
.custom-select-inner{
position: relative;

}

.custom-select-inner::after {
content: '>';
transform: rotate(90deg);
font-size: 1.5rem;
top: 6px;
right: 15px;
position: absolute;
} */


label {
font-size: 18px;
text-transform: capitalize;
display: block;
margin-bottom: 10px;
color: ${secondaryDark3};
font-weight: 700;
letter-spacing: 0.6px;
}
.ant-select-arrow{
color: #000000;
}

.ant-select{
  background: white;
  border: 0.5px solid #D6D6E0;
  border-radius: 3px;
  /* height: 48px; */
  width: 100%;
  padding: 15px 8px !important;
  font-size: 19px;
  }
  .ant-select-selector{
  /* height: 47px !important; */
    /* border: none !important;   
    padding: 8px !important;
    height: 47px !important;
    margin-bottom: 15px;  */
    } 
    @media screen and (max-width:1400px) {
    label {
    font-size: 16px;
    }
    .ant-select{
    padding: 10px 7px !important;
    }
      }
    @media screen and (max-width:1024px) {
    label {
    font-size: 15px;
    }
    .ant-select{
    padding: 8px 6px !important;
    }
    }
`;
