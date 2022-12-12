import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Stories from "react-insta-stories";
import story1 from "../../assets/Professional/Professional (2).png";

const itemsLength = [
  { width: "10%", color: "#AAB1BA" },
  { width: "10%", color: "#AAB2BA" },
  { width: "10%", color: "#AAB3BA" },
  { width: "10%", color: "#AAB4BA" },
  { width: "10%", color: "#AAB5BA" },
  { width: "10%", color: "#AAB6BA" },
];

const items = itemsLength.map(({ width, color }: any, index: number) => {
  const style = {
    width: width,
    backgroundColor: color,
    height: 150 + index * 100,
  };
  return (
    <Stories
      stories={[<img src={story1} alt="" />]}
      defaultInterval={1500}
      width={432}
      height={768}
    />
  );
});

const Carousel = () => <AliceCarousel autoWidth mouseTracking items={items} />;
export default Carousel;
