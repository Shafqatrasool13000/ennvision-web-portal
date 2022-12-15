import {
  BackgroundImage,
  SecondaryHeading,
  TertiraryHeadingMini,
} from "../../Components/GlobalStyle";
import { FindPropertiesStyle } from "./style";
import property1 from "../../assets/Image/ic_property_1.png";
import property2 from "../../assets/Image/ic_property_2.png";
import property3 from "../../assets/Image/ic_property_3.png";
import { Container } from "react-bootstrap";
import ViewMore from "../../Components/ViewMoreProperties/Index";
import RedBlackUnderline from "../../Components/RedBlackUnderline/RedBlackUnderline";

type propertyData = {
  img: string;
  imgClass: string;
  title: string;
};
const FindProperties = () => {
  const propertiesData: propertyData[] = [
    {
      img: property1,
      imgClass: "img1",
      title: "Calgaty",
    },
    {
      img: property2,
      imgClass: "img2",
      title: "Quebec City",
    },
    {
      img: property3,
      imgClass: "img3",
      title: "Montreal",
    },
    {
      img: property1,
      imgClass: "img4",
      title: "Calgaty",
    },
    {
      img: property2,
      imgClass: "img5",
      title: "Moncton",
    },
    {
      img: property3,
      imgClass: "img6",
      title: "Ottawa",
    },
  ];
  return (
    <FindPropertiesStyle>
      <SecondaryHeading className="text-center">
        Find Properties
      </SecondaryHeading>
      <TertiraryHeadingMini className="text-center">
        Search For A Qualified Professional In Your Area
      </TertiraryHeadingMini>
      <div className="d-flex justify-content-center">
        <RedBlackUnderline />
      </div>
      <Container>
        <div className="areas">
          {propertiesData.map(
            ({ img, imgClass, title }: propertyData, index: number) => (
              <BackgroundImage
                key={index}
                className={`${imgClass} area-container`}
                repeat="no-repeat"
                url={img}
                size="cover"
                postion="center"
              >
                <h6 className="text">{title}</h6>
              </BackgroundImage>
            )
          )}
          <ViewMore />
        </div>
      </Container>
    </FindPropertiesStyle>
  );
};

export default FindProperties;
