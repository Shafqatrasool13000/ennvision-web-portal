import { Link } from "react-router-dom";
import SignupTextStyle from "./style";

type authenticateTextProps = {
  title: string;
  link: string;
  linkText: string;
  margin: string;
};
const AuthenticationText = ({
  title,
  link,
  linkText,
  margin,
}: authenticateTextProps) => {
  return (
    <SignupTextStyle margin={margin}>
      <p>{title}</p>
      <h6 className="ms-1">
        <Link to={link}>{linkText}</Link>
      </h6>
    </SignupTextStyle>
  );
};

export default AuthenticationText;
