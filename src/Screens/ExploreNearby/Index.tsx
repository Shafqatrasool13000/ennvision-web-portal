import ExploreNearbyStyle from "./style";
import StoriesList from "../ProfessionalProfile/StoriesList";
import Suggestions from "./Suggestion";
import Posts from "./Posts";
import { Col, Container, Row } from "react-bootstrap";

const ExploreNearby = () => {
  return (
    <ExploreNearbyStyle>
      <Container>
        <Row>
          <Col md={7}>
            <StoriesList />
            <Posts />
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
