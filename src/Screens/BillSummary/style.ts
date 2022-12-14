import styled from "styled-components";
import {
  pureDark,
  tertiaryGrey6,
  tertiaryGrey7,
  tertiaryGrey8,
} from "../../Components/GlobalStyle";

export const BillSummaryStyled = styled.div`
  padding: 100px 0;
  background-color: ${tertiaryGrey8};
  height: 93vh;

  .inner-container {
    .head-bar {
      background: #f5f5f5;
      padding: 16px 8px;
    }

    .bill-info-side {
      background: #ffffff;
      border: 1px solid #f5f5f5;
      border-radius: 6px;
      height: 440px;

      .head-bar-title {
        font-size: 16px;
        color: ${pureDark};
        font-family: "EnnVisionsMedium";
        padding: 0 14px;
      }

      .features {
        padding: 16px;
        .feature {
          padding-bottom: 8px;
          border-bottom: 1px solid ${tertiaryGrey6};
          margin-top: 12px;
          &-title {
            color: ${tertiaryGrey7};
            font-size: 14px;
          }
          &-price {
            font-size: 14px;
            color: ${pureDark};
            font-family: "EnnVisionsMedium";
            margin-bottom: 0;
          }
        }
      }
    }

    .credit-card-side {
      background: #ffffff;
      border: 1px solid #f5f5f5;
      border-radius: 6px;
      height: 440px;

      .head-bar {
        &-title {
          font-size: 16px;
          color: ${pureDark};
          font-family: "EnnVisionsMedium";
          padding: 0 14px;
        }
      }
      .payments {
        padding: 16px;

        &-type {
          border-bottom: 1px solid ${tertiaryGrey6};
          margin-top: 16px;

          &-title {
            font-size: 16px;
            font-weight: 700;
          }
          &-subtitle {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
