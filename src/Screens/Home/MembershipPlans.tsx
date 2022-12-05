import AliceCarousel from "react-alice-carousel";
import {
  SecondaryHeading,
  TertiraryHeadingMini,
} from "../../Components/GlobalStyle";
import { MembershipPlansStyled } from "./style";
import select from "../../assets/icons/ic_add_property_sel_payment.svg";
import { Container } from "react-bootstrap";
import RedBlackUnderline from "../../Components/RedBlackUnderline/RedBlackUnderline";

const membershipData = [
  {
    plan_name: "Monthly Plan",
    price: "$29.99",
    selected: false,

    offers: [
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
    ],
  },
  {
    plan_name: "Aunnaly Plan",
    price: "$290.99",
    selected: false,
    offers: [
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
    ],
  },
  {
    plan_name: "Quarterly Plan",
    price: "$2900.99",
    selected: true,
    offers: [
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
      {
        selected: true,
        title: "The quick, brown fox jumps over a lazy dog.",
      },
    ],
  },
];
const responsive = {
  0: { items: 1.2 },
  568: { items: 2.2 },
  1024: { items: 3 },
};
const items = [
  ...membershipData.map(({ plan_name, price, offers, selected }, index) => (
    <div className="card" key={index}>
      <h6 className="heading text-center">{plan_name}</h6>
      <h5 className="price mb-0 text-center">{price}</h5>
      <div className="offers">
        {offers.map(({ title }: any, index: number) => (
          <div
            key={index}
            className="offer d-flex align-items-center justify-content-center"
          >
            <img src={select} alt="select" />
            <p className="mb-0 offer-type">{title}</p>
          </div>
        ))}
      </div>
      <button className="purchase-btn w-100">PURCHASE</button>
    </div>
  )),
];
const MembershipPlans = () => {
  return (
    <MembershipPlansStyled>
      <SecondaryHeading className="text-center">
        Membership Plans
      </SecondaryHeading>
      <TertiraryHeadingMini className="text-center">
        Get The Plan For You
      </TertiraryHeadingMini>
      <RedBlackUnderline />
      <Container>
        <div className="cards">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            disableDotsControls
            disableButtonsControls
            controlsStrategy="alternate"
          />
        </div>
      </Container>
    </MembershipPlansStyled>
  );
};

export default MembershipPlans;
