import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/AuthNavbar";
import SocialFooter from "../../Components/SocialFooter/SocialFooter";

const PropertyParent = ({ children }: any) => {
  return (
    <>
      <Helmet>
        <title>List Property</title>
      </Helmet>
      <Navbar />
      {children}
      {/* <SocialFooter /> */}
    </>
  );
};

export default PropertyParent;
