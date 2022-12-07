import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/AuthNavbar";
import SocialFooter from "../../Components/SocialFooter/SocialFooter";
import ParentComponentStyle from "./style";

const ParentComponent = ({ children }: any) => {
  return (
    <ParentComponentStyle>
      <Helmet>
        <title>List Property</title>
      </Helmet>
      <Navbar />
      {children}
      {/* <SocialFooter /> */}
    </ParentComponentStyle>
  );
};

export default ParentComponent;
