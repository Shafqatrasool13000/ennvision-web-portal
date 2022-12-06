import { NavLink } from "react-router-dom";
import ErrorImg from "../../assets/Image/error.svg";
import { Button } from "../styles/Button";
import Page404Style from "./style";

const Page404 = () => {
  return (
    <Page404Style>
      <img src={ErrorImg} alt="error" />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Page404Style>
  );
};

export default Page404;
