import blogIcon from "../../assets/icons/ic_blog_tag.svg";
import profileIcon from "../../assets/icons/ic_professional_meet_peron.svg";
import IconWithTextStyle from "./style";

const IconWithText = ({ marginTop }: any) => {
  return (
    <IconWithTextStyle marginTop={marginTop}>
      <div className="author-bio d-flex justify-content-between">
        <div className="profession d-flex align-items-center">
          <span>
            <img src={profileIcon} alt="profile" />
          </span>
          <p className="title">John Smith</p>
        </div>
        <div className="author d-flex align-items-center">
          <span>
            <img src={blogIcon} alt="blog" />
          </span>
          <p className="title">Blog, Photography</p>
        </div>
      </div>
    </IconWithTextStyle>
  );
};

export default IconWithText;
