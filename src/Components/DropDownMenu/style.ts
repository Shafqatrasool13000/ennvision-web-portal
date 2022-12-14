import styled from "styled-components";
import { lightGrey10 } from "../GlobalStyle";

const BecomeProfesionalOptionsStyle = styled.div`
  width: 256px;
  background: var(--unnamed-color-fcfbfb) 0% 0% no-repeat padding-box;
  background: #fcfbfb;
  border-radius: 4px 4px 0px 0px;
  box-shadow: 0px 0px 3px #00000029;

  .options {
    .option {
      padding: 12px;
      border-bottom: 1px solid ${lightGrey10};
      .link {
        color: #232837;
        font-size: 15px;
        text-decoration: none;
      }
    }
  }
`;

export default BecomeProfesionalOptionsStyle;

export const UpgradeAccountMenuStyle = styled.div`
  width: 256px;
  background: var(--unnamed-color-fcfbfb) 0% 0% no-repeat padding-box;
  background: #fcfbfb;
  border-radius: 4px 4px 0px 0px;
  box-shadow: 0px 0px 3px #00000029;

  .options {
    .option {
      padding: 12px;
      border-bottom: 1px solid ${lightGrey10};
      .link {
        color: #232837;
        font-size: 15px;
        text-decoration: none;
      }
    }
  }
`;
