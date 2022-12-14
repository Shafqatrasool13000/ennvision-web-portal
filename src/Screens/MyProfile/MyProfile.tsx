import { Container } from "react-bootstrap";
import MyProfileStyle from "./style";

const MyProfile = () => {
  const profileData = [
    {
      name: "Professions",
      title: "Videographer",
    },
    {
      name: "Business Name",
      title: "EnnVisions Solution",
    },
    {
      name: "Website",
      title: "www.ennvvisions.com",
    },
    {
      name: "Qualifications",
      title: "BFA, Graphics",
    },
    {
      name: "Business started",
      title: "12 July, 2022",
    },
    {
      name: "Document",
      title: "Business registration.png",
    },
    {
      name: "Membership",
      title: "Monthly Plan",
    },
    {
      name: "Membership Expiry",
      title: "12 August, 2022",
    },
    {
      name: "Default Credit Card",
      title: "7432",
    },
  ];
  return (
    <Container>
      <MyProfileStyle>
        {profileData.map(({ name, title }, index) => (
          <div
            key={index}
            className="profile-details d-flex justify-content-between"
          >
            <p className="profile-details-name">{name}</p>
            <p className="profile-details-title">{title}</p>
          </div>
        ))}
      </MyProfileStyle>
    </Container>
  );
};

export default MyProfile;
