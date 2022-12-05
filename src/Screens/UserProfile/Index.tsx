import { Container } from "react-bootstrap";
import HeadingViewMore from "../../Components/HeadingViewMore/Index";
import UserProfileBox from "../../Components/ProfileBox/Index";
import Properties from "../../Components/Properties/Index";
import { UserProfileStyled } from "./style";

function UserProfile() {
  return (
    <UserProfileStyled>
      <Container>
        <UserProfileBox />
        <div className="mt-4">
          <HeadingViewMore
            title="Property Listing"
            listing="VIEW MORE PROPERTIES"
          />
        </div>
        <Properties />
        <div className="mt-4">
          <HeadingViewMore
            title="Property Drafts"
            listing="VIEW MORE PROPERTIES"
          />
        </div>
        <Properties />
      </Container>
    </UserProfileStyled>
  );
}

export default UserProfile;
