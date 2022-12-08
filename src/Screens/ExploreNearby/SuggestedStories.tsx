import { Card } from "react-bootstrap";
import { SuggestedStoriesStyle } from "./style";
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
import CustomButton from "../../Components/CustomButton/CustomButton";
import {
  lightColor1,
  ProfileMiniImg,
  TertiaryHeading,
} from "../../Components/GlobalStyle";

const responsive = {
  0: { items: 2.3 },
  //   568: { items: 3.2 },
  //   768: { items: 4.2 },
  //   1024: { items: 5.2 },
  //   1200: { items: 7.2 },
  //   1400: { items: 9.2 },
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
  ...storiesData.map(({ title, img }, index) => (
    <Card key={index}>
      <div className="mini-profile-img">
        <ProfileMiniImg
          src={stroy1}
          alt="story"
          borderRadius="50%"
          height="20px"
          width="20px"
        />
      </div>
      <Card.Img
        variant="top"
        src={img}
        className="position-relative card-img"
        alt={stroy1}
      />
      <Card.Body className="position-absolute bottom-0 w-100">
        <Card.Title>Hexal Solution</Card.Title>
        <Card.Subtitle>Home Cleaner</Card.Subtitle>

        <div className="mt-2">
          <CustomButton
            bgcolor={lightColor1}
            color="black"
            padding="6px 8px"
            width="100%"
            type="submit"
            title="Book Now"
            margin="auto"
            fontSize="12px"
            border="none"
            // clicked={() => navigate("/")}
          />
        </div>
      </Card.Body>
    </Card>
  )),
];

const SuggestedStories = () => {
  return (
    <SuggestedStoriesStyle>
      <TertiaryHeading>
        Adnan, explore your interests <br /> with these suggested Professionas
      </TertiaryHeading>
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
    </SuggestedStoriesStyle>
  );
};

export default SuggestedStories;
