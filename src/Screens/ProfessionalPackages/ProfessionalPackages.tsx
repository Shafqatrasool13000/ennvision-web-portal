import AliceCarousel from "react-alice-carousel";
import { PrimaryColor, TertiraryHeading } from "../../Components/GlobalStyle";
import ProfessionalPackagesStyle from "./style";
import select from "../../assets/icons/ic_add_property_sel_payment.svg";
import { Container } from "react-bootstrap";
import RedBlackUnderline from "../../Components/RedBlackUnderline/RedBlackUnderline";
import { useNavigate } from "react-router-dom";

const packagesData = [
  {
    plan_name: "Basic Plan",
    price: "$29.99",
    selected: false,
    duration: "1 Month",
    button: "Start With Basic Plan",
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
    plan_name: "Standard Plan",
    price: "$290.99",
    selected: false,
    duration: "3 Months",
    button: "Start With Standard Plan",
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
    plan_name: "Platinum Plan",
    price: "$2900.99",
    selected: true,
    duration: "12 Months",
    button: "Start With Platinum Plan",
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

const ProfessionalPackages = () => {
  const navigate = useNavigate();

  const items = [
    ...packagesData.map(
      ({ plan_name, price, offers, button, duration, selected }, index) => (
        <div className="card" key={index}>
          <div className="d-flex justify-content-between head-bar">
            <div className="d-flex ">
              <h6 className="heading text-center">{plan_name}</h6>
              <p className="sub-heading text-center mb-0 ms-2">{duration}</p>
            </div>
            <h5 className="price mb-0 text-center">{price}</h5>
          </div>
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
          <button
            className={`purchase-btn rounded w-100 ${
              selected && "bg-danger text-light"
            }`}
            onClick={() =>
              navigate("/bill-info", { state: { link: "/confirmed-dark" } })
            }
          >
            {button}
          </button>
        </div>
      )
    ),
  ];

  return (
    <ProfessionalPackagesStyle>
      <Container>
        <TertiraryHeading>Professional Package</TertiraryHeading>
        <div className="d-flex mt-2">
          <RedBlackUnderline />
        </div>
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
    </ProfessionalPackagesStyle>
  );
};

export default ProfessionalPackages;
