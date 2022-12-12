import { Outlet } from "react-router-dom";
import AuthNavbar from "../../Components/Navbar/AuthNavbar";

const Homepage = ({ children }: any) => {
  return (
    <>
      <AuthNavbar />
      {children}
    </>
  );
};

export default Homepage;
