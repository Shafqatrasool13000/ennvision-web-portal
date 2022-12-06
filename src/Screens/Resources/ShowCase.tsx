import IconWithText from "../../Components/IconText/Index";
import { ShowCaseStyle } from "./style";
import largeImg from "../../assets/Add Property/Add Property 5.png";
import blog from "../../assets/icons/ic_blog_tag.svg";
import user from "../../assets/icons/ic_blog_user.svg";
import comment from "../../assets/icons/ic_blog_user.svg";
import calender from "../../assets/icons/ic_blog_calender.svg";
import { TertiaryHeading } from "../../Components/GlobalStyle";

const ShowCase = () => {
  return (
    <ShowCaseStyle>
      <img className="w-100 large-img" src={largeImg} alt="large-img" />
      <div className="bottom-section">
        <TertiaryHeading>
          How to Choose the Right Franchise for You
        </TertiaryHeading>
        <div className="d-flex justify-content-between flex-wrap">
          <IconWithText
            marginTop="10px"
            icon={calender}
            title="August 20, 2021"
          />
          <IconWithText
            marginTop="10px"
            icon={blog}
            title="Blog, Photography"
          />
          <IconWithText marginTop="10px" icon={user} title="John Smith" />
          <IconWithText marginTop="10px" icon={comment} title="No Comments" />
        </div>
        <p className="details">
          I neglect my talents Far far away, behind the word mountains, far from
          the countries Vokalia and Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows
          by...
        </p>
      </div>
    </ShowCaseStyle>
  );
};

export default ShowCase;
