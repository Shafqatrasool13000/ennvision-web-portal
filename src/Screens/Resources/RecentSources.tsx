import IconWithText from "../../Components/IconText/Index";
import { RecentResoucesStyle } from "./style";
import sideImg from "../../assets/Image/ic_image_1.png";

const RecentSources = () => {
  const recentSources = [1, 2, 3, 4];
  return (
    <RecentResoucesStyle>
      {recentSources.map((title, index) => (
        <section className="resouce-box" key={index}>
          <div className="d-flex algin-items-center">
            <img className="left-img" src={sideImg} alt="sideImg" />
            <div className="ms-3 mt-1">
              <h6 className="title">
                How to Choose the Right Franchise for you
              </h6>
              <IconWithText marginTop="14px" />
            </div>
          </div>
        </section>
      ))}
    </RecentResoucesStyle>
  );
};

export default RecentSources;
