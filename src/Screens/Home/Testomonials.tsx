import {
  SecondaryHeading,
  TertiraryHeadingMini,
} from "../../Components/GlobalStyle";
import { TestomonialStyled } from "./style";
import testomonialImg1 from "../../assets/Image/ic_testimonials.png";
import { Col, Container, Row } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import RedBlackUnderline from "../../Components/RedBlackUnderline/RedBlackUnderline";
import { Rate } from "antd";

const testomonialsData = [
  {
    name: "Jessica Alba",
    description:
      "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim",
    date: "March, 07 2022",
    img: testomonialImg1,
  },
  {
    name: "Jessica Alba",
    description:
      "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim",
    date: "March, 07 2022",
    img: testomonialImg1,
  },
  {
    name: "Jessica Alba",
    description:
      "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim",
    date: "March, 07 2022",
    img: testomonialImg1,
  },
];
const responsive = {
  0: { items: 1.2 },
  568: { items: 1.2 },
  1024: { items: 2.2 },
};
const items = [
  ...testomonialsData.map(
    ({ name, date, description, img }: any, index: number) => (
      <Row key={index} className="box align-items-center">
        <Col
          xs={12}
          sm={4}
          lg={3}
          xl={2}
          className="profile-section d-flex d-sm-block align-items-center mt-sm-2"
        >
          <img src={img} alt="testomonial" />
          <h6 className="name mb-0 d-none d-sm-block">{name}</h6>
          <div className="ms-3 d-sm-none">
            <h6 className="name mt-0 mb-0">{name}</h6>
            <div className="my-2">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <p className="date mb-0 mt-2">{date}</p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={8}
          lg={9}
          xl={10}
          className="detail-section mt-3 mt-sm-0"
        >
          <p className="detail-section-text">{description}</p>
          <div className="line d-none d-sm-block" />
          <div className="further-details d-sm-flex justify-content-between d-none">
            <Rate allowHalf defaultValue={2.5} />
            <p className="date mb-0 mt-2">{date}</p>
          </div>
        </Col>
      </Row>
    )
  ),
];
const Testomonials = () => {
  return (
    <TestomonialStyled>
      <div className="testomonial-inner">
        <SecondaryHeading className="text-center">
          Testimonials
        </SecondaryHeading>
        <TertiraryHeadingMini className="text-center">
          What Clients Are Saying About Us
        </TertiraryHeadingMini>
        <RedBlackUnderline />
        <Container fluid className="testomonial-inner-cards">
          <AliceCarousel
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
    </TestomonialStyled>
  );
};

export default Testomonials;
