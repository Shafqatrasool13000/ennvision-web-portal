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
    768: { items: 4.2 },
    1024: { items: 5.2 },
  };
  return (
    <ExploreNearbyStyle>
      <Container>
        <Row>
          <Col md={7} className="mt-3 order-1 order-md-0">
            <StoriesList responsive={responsive} />
            <Posts />
            <Posts2 />
            <SuggestedStories />
          </Col>
          <Col md={5} className="mt-3 order-0 order-md-1">
            <Suggestions />
          </Col>
        </Row>
      </Container>
    </ExploreNearbyStyle>
  );
};

export default ExploreNearby;
