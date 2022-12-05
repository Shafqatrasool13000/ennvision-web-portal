import { Card } from "react-bootstrap";
import { StoriesListStyled } from "./style";
import stroy1 from "../../assets/Professional/Professional (1).png";
import stroy2 from "../../assets/Professional/Professional (2).png";
import stroy3 from "../../assets/Professional/Professional (3).png";
import stroy4 from "../../assets/Professional/Professional (4).png";
import stroy5 from "../../assets/Professional/Professional (5).png";
import stroy6 from "../../assets/Professional/Professional (6).png";
import stroy7 from "../../assets/Professional/Professional (7).png";
import stroy8 from "../../assets/Professional/Professional (8).png";
import addStoryImg from "../../assets/Professional/Professional (10).png";
import plusIcon from "../../assets/icons/ic_add_property_add_photo.svg";
import AliceCarousel from "react-alice-carousel";

const responsive = {
  0: { items: 2.2 },
  568: { items: 3.2 },
  768: { items: 4.2 },
  1024: { items: 5.2 },
  1200: { items: 7.2 },
  1400: { items: 9.2 },
};
const storiesData = [
  { title: "Morgan Freeman", img: stroy1 },
  { title: "Tom Hanks", img: stroy2 },
  { title: "Will Smith", img: stroy3 },
  { title: "Mahima Nambiar", img: stroy4 },
  { title: "Denzel Washington", img: stroy5 },
  { title: "Tom Hanks", img: stroy6 },
  { title: "Will Smith", img: stroy7 },
  { title: "Emma Stone", img: stroy8 },
];
const items = [
  <div className="add-story-container">
    <Card>
      <Card.Img
        variant="top"
        src={addStoryImg}
        className="add-story-img position-relative"
        alt={stroy1}
      />
      <img src={plusIcon} className="position-absolute plus-icon" alt="plus" />
      <Card.Body>
        <Card.Title>CREATE STORY</Card.Title>
      </Card.Body>
    </Card>
  </div>,
  ...storiesData.map(({ title, img }, index) => (
    <Card className="story-card" key={index}>
      <Card.Img
        variant="top"
        src={img}
        className="position-relative"
        alt={stroy1}
      />
      <Card.Body className="position-absolute bottom-0">
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  )),
];

const StoriesList = () => {
  return (
    <StoriesListStyled>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        disableButtonsControls
        paddingLeft={20}
        paddingRight={20}
      />
    </StoriesListStyled>
  );
};

export default StoriesList;
