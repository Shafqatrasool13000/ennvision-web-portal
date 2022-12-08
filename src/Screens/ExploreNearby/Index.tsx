import ExploreNearbyStyle from "./style";
import StoriesList from "../ProfessionalProfile/StoriesList";
import Suggestions from "./Suggestion";
import Posts from "./Posts";
import { Col, Container, Row } from "react-bootstrap";
import Posts2 from "./Post2";
import SuggestedStories from "./SuggestedStories";

const ExploreNearby = () => {
  return (
    <ExploreNearbyStyle>
      <Container>
        <Row>
          <Col md={7}>
            <StoriesList />
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
