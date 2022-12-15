import HeroSection from "./HeroSection";
import ExploreProperty from "./ExploreProperty";
import FeatureProperties from "./FeatureProperties";
import { Container } from "react-bootstrap";
import WhyChooseUs from "./WhyChooseUs";
import FindProperties from "./FindProperties";
import Professionals from "./Professionals";
import WhoWeAre from "./WhoWeAre";
import Testomonials from "./Testomonials";
import MembershipPlans from "./MembershipPlans";
import { Helmet } from "react-helmet";
import { Navigate } from "react-router-dom";
import { ContextApiData } from "../../utils/CreateContext";
import { useContext } from "react";

const Home = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(ContextApiData);

  if (isLoggedIn) {
    return <Navigate to="/explore-nearby" />;
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeroSection />
      <Container>
        <ExploreProperty />
        <FeatureProperties />
      </Container>
      <WhyChooseUs />
      <FindProperties />
      <Professionals />
      <WhoWeAre />
      <Testomonials />
      <MembershipPlans />
    </>
  );
};

export default Home;
