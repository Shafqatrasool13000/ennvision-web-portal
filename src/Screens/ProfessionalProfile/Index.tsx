import { Container } from "react-bootstrap";
import ProfileBox from "./ProfileBox";
import { ProfessionalProfileStyled } from "./style";
import HeadingViewMore from "../../Components/HeadingViewMore/Index";
import ResourcesList from "./ResourcesList";
import StoriesList from "./StoriesList";
import PostList from "./Posts";
import Properties from "../../Components/Properties/Index";

const ProfessionalProfileStyle = () => {
  return (
    <ProfessionalProfileStyled className="pb-3">
      <Container>
        <ProfileBox />
        <StoriesList />
        <div className="mt-4">
          <HeadingViewMore
            title="Property Listing"
            listing="VIEW MORE PROPERTIES"
          />
        </div>
        <Properties />
        <div className="resources-listing">
          <div className="mt-4">
            <HeadingViewMore
              title="Resources Listing"
              listing="VIEW MORE RESOURCES"
            />
            <ResourcesList sm={6} md={4} />
          </div>
        </div>
        <div className="mt-4">
          <HeadingViewMore title="Post Listing" listing="VIEW MORE POST" />
          <PostList />
        </div>
      </Container>
    </ProfessionalProfileStyled>
  );
};

export default ProfessionalProfileStyle;
