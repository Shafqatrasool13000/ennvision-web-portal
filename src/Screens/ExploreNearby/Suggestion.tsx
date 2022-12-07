import { SuggestionStyle } from "./style";
import profile from "../../assets/Image/ic_professional_1.png";
import profile1 from "../../assets/Image/ic_professional_2.png";
import profile2 from "../../assets/Image/ic_professional_3.png";
import profile3 from "../../assets/Image/ic_professional_4.png";
import profile4 from "../../assets/Image/ic_professional_1.png";
import profile5 from "../../assets/Image/ic_professional_2.png";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { secondaryBlue, tertiaryGrey7 } from "../../Components/GlobalStyle";

const Suggestions = () => {
  const users = [
    { img: profile, name: "angelina_jolie", profession: "Photography" },
    { img: profile1, name: "sandrabullock", profession: "Home Cleaner" },
    { img: profile2, name: "Jodieoster", profession: "Carpet Cleaners" },
    { img: profile3, name: "morganfreeman", profession: "Drone Photography" },
    {
      img: profile4,
      name: "tomhanks",
      profession: "Hardwood/laminate Flooring",
    },
    { img: profile5, name: "bruce.willis", profession: "Junk Removal" },
  ];
  return (
    <SuggestionStyle>
      <div className="head-bar d-flex justify-content-between">
        <p className="title w-100">Suggestions For You</p>
        <CustomButton
          bgcolor="transparent"
          color={tertiaryGrey7}
          padding="4px 8px"
          width="auto"
          type="button"
          title="See All"
          margin="auto"
          fontSize="14px"
          fontFamily="EnnVisionsMedium"
          border="none"
          clicked={() => console.log("resend")}
        />
      </div>
      {users.map(({ img, name, profession }, index: number) => (
        <div
          key={index}
          className="suggestion d-flex justify-content-between align-items-center"
        >
          <div className="d-flex justify-content-between">
            <img src={img} alt="profile" className="profile-icon" />
            <div className="profile-details">
              <h6 className="profile-details-title">{name}</h6>
              <p className="profile-details-sub-title w-100">{profession}</p>
            </div>
          </div>
          <CustomButton
            bgcolor="transparent"
            color={secondaryBlue}
            padding="4px 8px"
            width="auto"
            type="button"
            title="Follow"
            margin="auto"
            fontSize="14px"
            fontFamily="EnnVisionsMedium"
            border="none"
            clicked={() => console.log("resend")}
          />
        </div>
      ))}
    </SuggestionStyle>
  );
};

export default Suggestions;
