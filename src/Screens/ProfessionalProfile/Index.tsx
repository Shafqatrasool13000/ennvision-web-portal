import { Container } from "react-bootstrap";
import ProfileBox from "./ProfileBox";
import { ProfessionalProfileStyled } from "./style";
import HeadingViewMore from "../../Components/HeadingViewMore/Index";
import ResourcesList from "./ResourcesList";
import StoriesList from "./StoriesList";
import PostList from "./Posts";

const Index = () => {
  return (
    <ProfessionalProfileStyled>
      <Container>
        <ProfileBox />
        <StoriesList />
        <div className="mt-4">
          <HeadingViewMore
            title="Property Listing"
            listing="VIEW MORE PROPERTIES"
          />
        </div>
        {/* <div className="resources-listing">
          <HeadingViewMore
            title="Resources Listing"
            listing="VIEW MORE RESOURCES"
          />
          <ResourcesList />
          <HeadingViewMore title="Post Listing" listing="VIEW MORE POST" />
        </div> */}
        <PostList />
      </Container>
    </ProfessionalProfileStyled>
  );
};

export default Index;
