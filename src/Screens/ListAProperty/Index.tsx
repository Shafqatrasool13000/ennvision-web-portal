import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/AuthNavbar";
import SocialFooter from "../../Components/SocialFooter/SocialFooter";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>List Property</title>
      </Helmet>
      <Navbar />
      <Outlet />
      <SocialFooter />
    </>
  );
};

export default Index;
