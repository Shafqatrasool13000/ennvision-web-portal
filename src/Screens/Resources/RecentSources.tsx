import IconWithText from "../../Components/IconText/Index";
import { RecentResoucesStyle } from "./style";
import sideImg from "../../assets/Image/ic_image_1.png";
import user from "../../assets/icons/ic_blog_user.svg";
import calender from "../../assets/icons/ic_blog_calender.svg";

const RecentSources = () => {
  const recentSources = [1, 2, 3, 4];
  return (
    <RecentResoucesStyle>
      {recentSources.map((_, index) => (
        <section className="resouce-box" key={index}>
          <div className="d-flex algin-items-center">
            <img className="left-img" src={sideImg} alt="sideImg" />
            <div className="ms-3 mt-1">
              <h6 className="heading">
                How to Choose the Right Franchise for you
              </h6>
              <div className="d-flex justify-content-between">
                <IconWithText
                  icon={calender}
                  title="August 20, 2021"
                  marginTop="14px"
                />
                <IconWithText icon={user} title="John Smith" marginTop="14px" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </RecentResoucesStyle>
  );
};

export default RecentSources;
