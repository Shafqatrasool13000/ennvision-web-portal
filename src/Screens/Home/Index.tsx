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
import DropDownMenu from "../../Components/DropDownMenu/UpgradeAccount";
import MyProfile from "../MyProfile/MyProfile";

const Home = () => {
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
      <DropDownMenu />
      <MyProfile />
    </>
  );
};

export default Home;
