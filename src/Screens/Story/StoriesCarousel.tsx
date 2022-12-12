// import { StoriesCarouselStyle } from "./style";
import testomonialImg1 from "../../assets/Image/ic_testimonials.png";
import { Container } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import story1 from "../../assets/Professional/Professional (2).png";
import story2 from "../../assets/Professional/Professional (3).png";
import story3 from "../../assets/Professional/Professional (4).png";
import story4 from "../../assets/Professional/Professional (5).png";

const testomonialsData = [story1, story2, story3, story4];
const responsive = {
  0: { items: 1.2 },
  568: { items: 1.2 },
  1024: { items: 5.2 },
};
const StoriesCarousel = ({ items }: any, index: number) => {
  const style = { width: 150 + index * 100 };
  const itemss = [
    ...testomonialsData.map((img: string, index: number) => (
      <div className="me-3" key={index}>
        <img className="w-100" src={img} alt="testomonial" />
      </div>
    )),
  ];
  return (
    <>
      <div className="mb-5">
        <Container className="testomonial-inner-cards">
          <AliceCarousel
            // autoWidth
            mouseTracking
            items={items}
            responsive={responsive}
            disableButtonsControls
            disableDotsControls
            // paddingLeft={100}
            // paddingRight={100}
          />
        </Container>
      </div>
    </>
  );
};

export default StoriesCarousel;
