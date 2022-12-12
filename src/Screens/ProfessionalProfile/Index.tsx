import { Container } from "react-bootstrap";
import ProfileBox from "./ProfileBox";
import { ProfessionalProfileStyled } from "./style";
import HeadingViewMore from "../../Components/HeadingViewMore/Index";
import ResourcesList from "./ResourcesList";
import StoriesList from "./StoriesList";
import PostList from "./Posts";
import Properties from "../../Components/Properties/Index";

const ProfessionalProfileStyle = () => {
  const responsive = {
    0: { items: 2.2 },
    568: { items: 3.2 },
    768: { items: 4.2 },
    1024: { items: 5.2 },
    1200: { items: 7.2 },
    1400: { items: 9.2 },
  };
  return (
    <ProfessionalProfileStyled className="pb-3">
      <Container>
        <ProfileBox />
        <StoriesList responsive={responsive} />
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
