import Inputs from "./Inputs";
import ProfessionalProfileBox from "./ProfileBox";
import { BecomeProfessionalStyle } from "./style";

const BecomeProfessional = () => {
  return (
    <BecomeProfessionalStyle>
      <ProfessionalProfileBox />
      <Inputs />
    </BecomeProfessionalStyle>
  );
};

export default BecomeProfessional;
