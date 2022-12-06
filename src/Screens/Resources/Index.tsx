import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { BlackDot, TertiraryHeadingMini } from "../../Components/GlobalStyle";
import ProfessionalHeroSection from "../../Components/ProfessionalHeroSection/Index";
import RedUnderline from "../../Components/RedBlackUnderline/RedUnderline";
import ResourcesList from "../ProfessionalProfile/ResourcesList";
import RecentSources from "./RecentSources";
import ResourcesCategory from "./ResourcesCategory";
import ShowCase from "./ShowCase";
import ResourcesTags from "./Tags";
import TextWidget from "./TextWidget";

const Resources = () => {
  return (
    <div className="pb-3">
      <Helmet>
        <title>Resources</title>
      </Helmet>
      <ProfessionalHeroSection />
      <Container>
        <Row className="mt-5">
          <Col md={7}>
            <ShowCase />
            <ResourcesList md={6} sm={12} />
          </Col>
          <Col md={5}>
            <Heading title="Recent Resources" />
            <RecentSources />
            <Heading title="Text Widget" />
            <TextWidget />
            <Heading title="Resources Tags" />
            <ResourcesTags />
            <Heading title="Resources Category" />
            <ResourcesCategory />
          </Col>
        </Row>
      </Container>
    </div>
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
