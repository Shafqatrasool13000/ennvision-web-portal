import { Outlet } from "react-router-dom";
import AuthNavbar from "../../Components/Navbar/AuthNavbar";

const Homepage = () => {
  return (
    <>
      <AuthNavbar />
      <Outlet />
    </>
  );
};

export default Homepage;
