import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { BlackDot, TertiraryHeadingMini } from "../../Components/GlobalStyle";
import ProfessionalHeroSection from "../../Components/ProfessionalHeroSection/Index";
import RedUnderline from "../../Components/RedBlackUnderline/RedUnderline";
import ResourcesList from "../ProfessionalProfile/ResourcesList";
import RecentSources from "./RecentSources";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <ProfessionalHeroSection />
      <Container>
        <Row className="mt-5">
          <Col md={7}>
            <ResourcesList md={6} sm={12} />
          </Col>
          <Col md={5}>
            <Heading title="Recent Resources" />
            <RecentSources />
            <Heading title="Text Widget" />
            <Heading title="Resources Tags" />
            <Heading title="Resources Category" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Resources;

const Heading = ({ title }: any) => {
  return (
    <div className="mt-3">
      <TertiraryHeadingMini>{title}</TertiraryHeadingMini>
      <div className="d-flex">
        <RedUnderline />
        <BlackDot />
      </div>
    </div>
  );
};
