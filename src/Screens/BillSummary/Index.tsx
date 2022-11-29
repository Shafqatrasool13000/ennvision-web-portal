import { Col, Container, Row } from "react-bootstrap";
import { BillSummaryStyled } from "./style";
import master from "../../assets/icons/ic_add_property_payment_master.svg";
import paypal from "../../assets/icons/ic_add_property_payment_paypal.svg";
import visa from "../../assets/icons/ic_add_property_payment_visa.svg";
import bitcoin from "../../assets/icons/ic_add_property_payment_bitcoin.svg";
import select from "../../assets/icons/ic_add_property_sel_payment.svg";
import unselect from "../../assets/icons/ic_add_property_payment.svg";
import plusIcon from "../../assets/icons/ic_add_property_add_card.svg";
import CustomButton from "../../Components/CustomButton/CustomButton";
import {
  BlackDot,
  lightblue2,
  PrimaryColor,
  TertiraryHeading,
  UnderlineRed,
} from "../../Components/GlobalStyle";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const billSummaryData = [
    { title: "Auto populate you home listing information", amount: "$50.00" },
    { title: "Property Value Sales Report", amount: "$45.00" },
    { title: "Comparable Report", amount: "$145.00" },
    { title: "Sub-total", amount: "$18.85" },
    { title: "Tax", amount: "$45.00" },
    { title: "Total", amount: "$163.85" },
  ];
  const payments = [
    {
      icon: master,
      name: "Master Card",
      number: "**** **** **** 4235",
      selection: select,
    },
    {
      icon: visa,
      name: "Visa Card",
      number: "**** **** **** 4235",
      selection: select,
    },
    {
      icon: paypal,
      name: "PayPal",
      number: "ennvisisons@gmail.com",
      selection: unselect,
    },
    {
      icon: bitcoin,
      name: "BitCoins",
      number: "ennvisisons",
      selection: unselect,
    },
    {
      icon: bitcoin,
      name: "BitCoins",
      number: "ennvisisons",
      selection: unselect,
    },
  ];
  return (
    <BillSummaryStyled>
      <div className="inner-container">
        <Container>
          <TertiraryHeading>Billing Summary</TertiraryHeading>
          <div>
            <UnderlineRed />
            <BlackDot />
          </div>
          <Row>
            <Col md={6}>
              <div className="bill-info-side">
                <div className="head-bar">
                  <h6 className="head-bar-title">Billing Info</h6>
                </div>

                <div className="features">
                  {billSummaryData.map(({ title, amount }, index) => (
                    <div
                      key={index}
                      className="feature d-flex justify-content-between"
                    >
                      <p className="feature-title mb-0">{title}</p>
                      <p className="feature-price mb-0">{amount}</p>
                    </div>
                  ))}
                </div>
                <div className="checkout-btn d-flex justify-content-center pb-4 mt-5">
                  <CustomButton
                    bgcolor={`${PrimaryColor}`}
                    color="white"
                    padding="10px 8px"
                    width="94%"
                    type="submit"
                    title="Check Out"
                    margin="auto"
                    fontFamily={"EnnVisionsMedium"}
                    clicked={() => navigate("/property-info")}
                  />
                </div>
              </div>
            </Col>
            <Col md={6} className="p-0 p-md-auto">
              <div className="credit-card-side mt-4 mt-md-0">
                <div className="head-bar bg-light d-flex justify-content-between">
                  <h6 className="head-bar-title">Credit Card Info</h6>
                  <img src={plusIcon} alt="plus" />
                </div>
                <div className="payments">
                  {payments.map(({ icon, name, number, selection }, index) => (
                    <div
                      key={index}
                      className="payments-type d-flex align-items-center align-items-center"
                    >
                      <img src={icon} alt="plus" />
                      <div className="ms-3 d-flex justify-content-between w-100 align-items-center">
                        <div>
                          <h6 className="step-title mb-2">{name}</h6>
                          <p className="step-subtitle mb-0">{number}</p>
                        </div>
                        <img src={selection} alt="select" className="select" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BillSummaryStyled>
  );
};

export default Index;
