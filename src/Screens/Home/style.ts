import styled from "styled-components";
import {
  lightColor1,
  lightDark,
  lightGrey3,
  lightGrey4,
  PrimaryColor,
  pureDark,
  secondaryDark4,
  secondaryDark5,
  tertiaryGrewish,
  tertiaryGrey7,
  tertiaryGrey8,
  whiteColor,
} from "../../Components/GlobalStyle";
import banner from "../../assets/Image/ic_image_1.png";

export const HeroSectionStyled = styled.div`
  background: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 82vh;
  width: 100%;
  .footer {
    bottom: 10%;
  }
  .inner-container {
    height: 100vh;
    &-main-heading {
      font-size: 52px;
      color: ${whiteColor};
      @media screen and (max-width: 991px) {
        font-size: 40px;
      }
      @media screen and (max-width: 786px) {
        text-align: center;
        font-size: 32px;
      }

      margin: 0;
      .house-up {
        font-family: "EnnVisionsMedium";
      }
    }
    .purchase-btns {
      max-width: 300px;
      margin-top: 45px;
      background-color: ${whiteColor};
      border-radius: 7px;
      height: 50px;
      padding: 3px;
      .active {
        background-color: ${PrimaryColor};
        height: 100%;
        border-radius: 4px;
        color: ${whiteColor};
      }
      button {
        background: transparent;
        font-size: 18px;
      }
    }
    .location-select-section {
      max-width: 1000px;
      background-color: ${whiteColor};
      border-radius: 7px;
      @media screen and (max-width: 991px) {
        width: 95% !important;
      }
      .title {
        color: ${pureDark};
        font-size: 16px;
        font-family: "EnnVisionsMedium";
      }
      .sub-title {
        color: ${secondaryDark4};
        font-size: 14px;
      }
      .property-type {
        border-left: 1px solid ${lightGrey3};
        .search-box {
          background-color: ${PrimaryColor};
          border-radius: 4px;
          padding: 12px;
          height: 39px;
          margin-top: 30px;
          cursor: pointer;

          img {
            vertical-align: super;
          }
        }
        @media screen and (max-width: 575px) {
          border-left: none;
          .search-box {
            img {
              height: 20px;
            }
            height: 40px;
          }
        }
      }
    }
  }
`;
export const ExplorePropertyStyled = styled.div`
  margin-top: 48px;

  .row {
    margin-top: 40px;
    font-size: 20px;
    border: 1px solid ${lightGrey4};
    .img-section {
      height: 100%;
      img {
        object-fit: cover;
        height: 100%;
        max-height: 470px;
      }
    }
    .sub-title {
      font-size: 16px;
      color: ${lightDark};
      font-size: 16px;
    }
    .explore-btn {
      bottom: 3%;
      right: 0;
    }

    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
  }
`;
export const FeaturePropertiesStyled = styled.div`
  margin-top: 55px;
`;
export const PropertiesStyled = styled.div`
  .properties {
    margin-top: 10px;
    .card {
      box-shadow: 0px 0px 20px #00000012;
      border-radius: 3px;
      margin-top: 30px;
      border: none;
      cursor: pointer;
      .sub-title {
        color: ${lightDark};
        font-size: 14px;
      }
      .property-description {
        border-bottom: 1px solid ${tertiaryGrewish};
        padding-bottom: 5px;
        .btn-primary {
          color: ${PrimaryColor};
          background-color: rgba(199, 17, 43, 0.12);
          font-size: 14px;
          border-radius: 3px;
          border: none;
          @media screen and (max-width: 480px) {
            font-family: "EnnVisionsMedium";
          }
          /* &:hover {
            color: ${whiteColor};
            background-color: ${PrimaryColor};
          } */
        }
        .price {
          font-size: 18px;
          font-family: "EnnVisionsMedium";
          color: ${PrimaryColor};
        }
      }
      .property-details {
        margin-top: 10px;
        .img {
          vertical-align: super;
        }
        .text {
          margin-top: 3px;
          margin-left: 4px;
          margin-bottom: 0;
        }
      }
    }
  }
`;
export const WhyChooseUsStyled = styled.div`
  margin-top: 65px;
  .pxp-services {
    height: 418px;
    padding-top: 56px;
    .pxp-section-h2 {
      color: ${pureDark};
      font-size: 40px;
      font-family: "EnnVisionsMedium";
      @media screen and (max-width: 991px) {
        font-size: 30px;
      }
      @media screen and (max-width: 768px) {
        font-size: 26px;
      }
      @media screen and (max-width: 480px) {
        font-size: 18px;
      }
    }
    .pxp-text-light {
      font-size: 18px;
      color: ${secondaryDark5};
    }
  }
  .cards {
    box-shadow: 0px 0px 21px #00000029;
  }
  .pxp-services-container {
    height: 300px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .pxp-services-item {
    display: block;
    background-color: #fff;
    position: relative;
    border-right: 1px solid #e8e8e8;
    overflow: hidden;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .pxp-dark-mode .pxp-services-item {
    background-color: #000;
    border-right: 1px solid #333;
  }
  .pxp-services-item:first-child {
    border-radius: 0.3rem 0 0 0.3rem;
  }
  .pxp-services-item:nth-child(4) {
    border-right: 0 none;
    border-radius: 0 0.3rem 0.3rem 0;
  }
  .pxp-services-item-fig {
    width: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 40px;
  }
  .truck-icon {
    margin-top: 20px;
  }
  .pxp-services-item-fig img {
    width: 100%;
    height: auto;
  }
  .pxp-services-item-text {
    position: absolute;
    top: 180px;
    left: 20px;
    right: 20px;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .pxp-services-item-text-title {
    font-family: "EnnVisionsMedium";
    color: ${pureDark};
    font-size: 22px;
    margin-bottom: 0.4rem;
    @media screen and (max-width: 991px) {
      font-size: 18px;
    }
    @media screen and (max-width: 768px) {
      font-size: 17px;
    }
    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
  .pxp-dark-mode .pxp-services-item-text-title {
    color: #fff;
  }
  .pxp-services-item-text-sub {
    color: ${secondaryDark4};
    font-size: 16px;
    line-height: 18px;

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
  .pxp-dark-mode .pxp-services-item-text-sub {
    color: #fff;
  }
  @keyframes iconTop {
    0% {
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
    }
    25% {
      opacity: 0;
      -webkit-transform: translate(-50%, -70%);
      transform: translate(-50%, -70%);
    }
    50% {
      opacity: 0;
      -webkit-transform: translate(-50%, -40%);
      transform: translate(-50%, -40%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
    }
  }
  .pxp-services-item-fig {
    img {
      height: 95px;
    }
  }
  .pxp-services-item:hover .pxp-services-item-fig {
    -webkit-animation: iconTop 0.4s ease-in-out;
    -moz-animation: iconTop 0.4s ease-in-out;
    animation: iconTop 0.4s ease-in-out;
  }
  .pxp-services-item:hover .pxp-services-item-text {
    transform: translateY(-50%);
  }
  .pxp-services-item-cta {
    position: absolute;
    color: #333;
    bottom: 40px;
    left: 20px;
    right: 20px;
    z-index: 3;
    font-family: "Regular", sans-serif;
    font-size: 0.7rem;
    letter-spacing: 1px;
    opacity: 0;
    /* font-weight: 700; */
    transform: translateY(400%);
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .pxp-dark-mode .pxp-services-item-cta {
    color: #fff;
  }
  .pxp-services-item:hover .pxp-services-item-cta {
    transform: translateY(0);
    opacity: 1;
  }
  .pxp-services-h {
    background: linear-gradient(90deg, #f7f7f7 50%, #fff 50%);
  }
  .pxp-dark-mode .pxp-services-h {
    background: linear-gradient(90deg, #000 50%, #f7f7f7 50%);
  }
  .pxp-services-h-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .pxp-services-h-fig {
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    height: 540px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
  }
  .pxp-services-h-fig.pxp-animate-in {
    transform: translateX(50px);
    opacity: 0;
    -webkit-transition: all 0.7s ease-in-out;
    -o-transition: all 0.7s ease-in-out;
    transition: all 0.7s ease-in-out;
  }
  .pxp-services-h-fig.pxp-animate-in.pxp-in {
    transform: translateX(0);
    opacity: 1;
  }
  .pxp-services-h-items {
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
  }
  .pxp-services-h-items.pxp-animate-in .pxp-services-h-item {
    transform: translateX(50px);
    opacity: 0;
    -webkit-transition: all 0.7s ease-in-out;
    -o-transition: all 0.7s ease-in-out;
    transition: all 0.7s ease-in-out;
  }
  .pxp-services-h-items.pxp-animate-in.pxp-in .pxp-services-h-item {
    transform: translateX(0);
    opacity: 1;
  }
  .pxp-services-h-items.pxp-animate-in.pxp-in
    .pxp-services-h-item:nth-child(1) {
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }
  .pxp-services-h-items.pxp-animate-in.pxp-in
    .pxp-services-h-item:nth-child(2) {
    -webkit-transition-delay: 0.6s;
    transition-delay: 0.6s;
  }
  .pxp-services-h-items.pxp-animate-in.pxp-in
    .pxp-services-h-item:nth-child(3) {
    -webkit-transition-delay: 0.8s;
    transition-delay: 0.8s;
  }
  .pxp-services-h-items.pxp-animate-in.pxp-in
    .pxp-services-h-item:nth-child(4) {
    -webkit-transition-delay: 1s;
    transition-delay: 1s;
  }
  .pxp-services-h-items.pxp-animate-in.pxp-in
    .pxp-services-h-item:nth-child(5) {
    -webkit-transition-delay: 1.2s;
    transition-delay: 1.2s;
  }
  .pxp-services-h-item img {
    height: 64px;
    width: auto;
  }
  .pxp-services-h-item .media-body {
    color: #999;
  }
  .pxp-services-h-item h5 {
    /* font-weight: 900; */
    color: #333;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  .pxp-services-h .pxp-primary-cta.pxp-animate-in {
    transform: translateX(50px);
    opacity: 0;
    -webkit-transition: all 0.7s ease-in-out;
    -o-transition: all 0.7s ease-in-out;
    transition: all 0.7s ease-in-out;
  }
  .pxp-services-h .pxp-primary-cta.pxp-animate-in.pxp-in {
    transform: translateX(0);
    opacity: 1;
  }
  .pxp-services-c {
    background-position: left center;
    position: absolute;
    top: 0;
    right: 50%;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  .pxp-services-c-content {
    position: relative;
    padding-left: calc((100% - 1140px) / 2 + 15px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 1;
  }
  .pxp-services-c-intro {
    margin-right: 30px;
    width: 25%;
    z-index: 2;
    margin-top: -84px;
  }
  .pxp-services-c-container {
    width: 75%;
  }
  .pxp-services-c-item {
    display: block;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    border-radius: 0.3rem;
    height: 300px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
  }
  .pxp-dark-mode .pxp-services-c-item {
    background-color: #000;
  }
  .pxp-services-c-item-fig {
    width: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 40px;
  }
  .pxp-services-c-item-fig img {
    width: 100%;
    height: auto;
  }
  .pxp-services-c-item-text {
    position: absolute;
    top: 180px;
    left: 20px;
    right: 20px;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .pxp-services-c-item-text-title {
    /* font-weight: 900; */
    color: #333;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  .pxp-dark-mode .pxp-services-c-item-text-title {
    color: #fff;
  }
  .pxp-services-c-item-text-sub {
    color: #333;
    font-size: 0.8rem;
    opacity: 0.7;
  }
  .pxp-dark-mode .pxp-services-c-item-text-sub {
    color: #fff;
  }
  .pxp-services-c-item:hover .pxp-services-c-item-fig {
    -webkit-animation: iconTop 0.4s ease-in-out;
    -moz-animation: iconTop 0.4s ease-in-out;
    animation: iconTop 0.4s ease-in-out;
  }
  .pxp-services-c-item:hover .pxp-services-c-item-text {
    transform: translateY(-50%);
  }
  .pxp-services-c-item-cta {
    position: absolute;
    color: #333;
    bottom: 40px;
    left: 20px;
    right: 20px;
    z-index: 3;
    font-size: 0.7rem;
    letter-spacing: 1px;
    opacity: 0;
    /* font-weight: 700; */
    transform: translateY(400%);
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .pxp-dark-mode .pxp-services-c-item-cta {
    color: #fff;
  }
  .pxp-services-c-item:hover .pxp-services-c-item-cta {
    transform: translateY(0);
    opacity: 1;
  }
  .pxp-services-c-container .owl-carousel .owl-stage {
    padding-left: 0 !important;
  }
  .pxp-services-c-container .owl-stage-outer {
    overflow: visible;
  }
  .pxp-services-c-container .owl-item {
    opacity: 0;
    transition: opacity 0.5s;
  }
  .pxp-services-c-container .owl-item.active {
    opacity: 1;
  }
  .pxp-services-c-container .owl-carousel .owl-nav button {
    outline: none;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .pxp-services-c-container .owl-nav {
    text-align: center;
    margin-top: 3rem;
  }
  .pxp-services-c-container .owl-prev.disabled,
  .pxp-services-c-container .owl-next.disabled {
    opacity: 0.5;
  }
  .pxp-services-c-container .owl-prev {
    margin-right: 20px;
  }
  .pxp-services-c-container .owl-next {
    margin-left: 20px;
  }
`;
export const FindProfessionalStyled = styled.div`
  margin-top: 150px;

  .img1 {
    grid-area: bigImg1;
  }
  .img2 {
    grid-area: smallImg1;
  }
  .img3 {
    grid-area: smallImg2;
  }
  .img4 {
    grid-area: bigImg2;
  }
  .img5 {
    grid-area: smallImg3;
  }
  .img6 {
    grid-area: smallImg4;
  }

  .areas {
    margin-top: 26px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 200px);
    grid-template-areas:
      "bigImg1 smallImg1"
      "bigImg1 smallImg2"
      "smallImg3 bigImg2"
      "smallImg4 bigImg2";
    grid-gap: 6px;

    @media screen and (max-width: 991px) {
      grid-template-areas:
        "bigImg1 bigImg1"
        "smallImg1 smallImg2"
        "bigImg2 bigImg2"
        "smallImg4 smallImg3";
    }

    .area-container {
      position: relative;
    }

    .image {
      display: block;
      width: 100%;
      height: auto;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      transition: 0.5s ease;
      background-color: rgba(0, 0, 0, 0.36);
    }
    .text {
      color: white;
      font-size: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      font-family: "EnnVisionsMedium";
      width: 100%;

      @media screen and (max-width: 991px) {
        font-size: 24px;
      }
      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
      @media screen and (max-width: 480px) {
        font-size: 16px;
      }
    }
  }
`;
export const ProfessionalStyled = styled.div`
  margin-top: 65px;
  .professionals {
    .professional-container {
      margin-top: 42px;
    }
    .detail-text {
      margin-top: -30px;
      background: #ffffff;
      box-shadow: 0px 0px 15px #0000001c;
      border-radius: 6px;
      text-align: center;
      padding: 9px 0;
      width: 94%;
      z-index: 10;
      .name {
        font-size: 20px;
        color: ${pureDark};
        font-family: "EnnVisionsMedium";
      }
      .profession {
        font-size: 15px;
        color: ${pureDark};
        margin: 0;
      }
    }
  }
`;
export const WhoWeAreStyled = styled.div`
  margin-top: 80px;
  @media screen and (max-width: 991px) {
    margin-top: 60px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }

  .inner-container {
    margin-top: 60px;
  }
  p {
    color: #393939;
  }
`;
export const TestomonialStyled = styled.div`
  margin-top: 70px;
  .testomonial-inner {
    padding: 42px 0;
    background-color: #f5f5f5;
    &-cards {
      margin-top: 55px;
      .box {
        box-shadow: 0px 0px 11px #00000017;
        border-radius: 6px;
        padding: 20px;
        margin-right: 25px;
        background: ${tertiaryGrey8};
        .profile-section {
          @media screen and (max-width: 480px) {
            border-bottom: 1px solid #707070;
            padding-bottom: 12px;
          }

          .name {
            font-size: 16px;
            font-family: "EnnVisionsMedium";
            margin-top: 40px;
          }
        }
        .detail-section {
          color: ${secondaryDark5};
          &-text {
            font-size: 16px;
          }
          .line {
            border-bottom: 1px solid ${secondaryDark5};
          }
          .further-details {
            margin-top: 12px;
            .date {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;
export const MembershipPlansStyled = styled.div`
  padding: 80px 0 20px 0;
  background-color: ${tertiaryGrey8};

  @media screen and (max-width: 991px) {
    padding: 60px 0 110px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 80px 0 150px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 80px 0 50px 0;
  }

  .cards {
    margin-top: 20px;
    .card {
      border: none;
      padding: 10px;
      border-radius: 7px;
      margin-right: 20px;
      .heading {
        color: ${tertiaryGrey7};
        font-size: 24px;
        @media screen and (max-width: 991px) {
          font-size: 20px;
        }

        @media screen and (max-width: 480px) {
          font-size: 18px;
        }
      }
      .price {
        color: ${pureDark};
        font-size: 32px;
        margin-top: 12px;
        font-family: "EnnVisionsMedium";
        margin-top: 0;
        @media screen and (max-width: 991px) {
          font-size: 26px;
        }
        @media screen and (max-width: 768px) {
          font-size: 22px;
        }
      }
      .offers {
        .offer {
          margin-top: 22px;
          &-type {
            color: ${secondaryDark5};
            font-size: 16px;
            margin-left: 12px;
          }
        }
      }
      .purchase-btn {
        margin: 0 auto;
        width: 80%;
        font-size: 16px;
        padding: 10px 0;
        margin-top: 40px;
        background-color: ${lightColor1};
        color: ${tertiaryGrey7};
        /* &:hover {
          background-color: ${PrimaryColor};
          color: ${whiteColor};
        } */
      }
    }
  }
`;
