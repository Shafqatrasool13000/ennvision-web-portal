import ExploreNearbyStyle from "./style";
import StoriesList from "../../Components/StoriesList/StoriesList";
import Suggestions from "./Suggestion";
import Posts from "./Posts";
import { Col, Container, Row } from "react-bootstrap";
import Posts2 from "./Post2";
import SuggestedStories from "./SuggestedStories";

const ExploreNearby = () => {
  const responsive = {
    0: { items: 2.2 },
    568: { items: 3.2 },
    1400: { items: 4.2 },
  };
  return (
    <ExploreNearbyStyle>
      <Container>
        <Row>
          <Col md={7}>
            <StoriesList responsive={responsive} />
            <Posts />
            <Posts2 />
            <SuggestedStories />
          </Col>
          <Col md={5}>
            <div className="mt-3">
              <Suggestions />
            </div>
          </Col>
        </Row>
      </Container>
    </ExploreNearbyStyle>
  );
};

export default ExploreNearby;
