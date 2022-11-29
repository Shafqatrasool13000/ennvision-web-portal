import { ProfessionalStyled } from "./style";
import professional1 from "../../assets/Image/ic_professional_1.png";
import professional2 from "../../assets/Image/ic_professional_2.png";
import professional3 from "../../assets/Image/ic_professional_3.png";
import professional4 from "../../assets/Image/ic_professional_4.png";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { greenishColor, PrimaryColor } from "../../Components/GlobalStyle";
import img1 from "../../assets/icons/ic_add_property_add_card.svg";
import img2 from "../../assets/icons/ic_add_property_additional.svg";

const professionalsData = [
  {
    name: "Sandra Bullock",
    profession: "Bathroom Renovation",
    img: professional1,
  },
  {
    name: "Jodie Foster",
    profession: "Carpet Cleaners",
    img: professional2,
  },
  {
    name: "Betty White",
    profession: "Driveway Sealing",
    img: professional3,
  },
  {
    name: "Morgan Freeman",
    profession: "Drone Photography",
    img: professional4,
  },
  {
    name: "Emma Stone",
    profession: "Hardwood/laminate Flooring",
    img: professional1,
  },
  {
    name: "Tom Hanks",
    profession: "Handyman",
    img: professional2,
  },
  {
    name: "Emma Stone",
    profession: "Home Inspection",
    img: professional3,
  },
  {
    name: "Will Smith",
    profession: "House Cleaners",
    img: professional4,
  },
];

const Professionals = () => {
  return (
    <ProfessionalStyled>
      <Container>
        <Row className="professionals justify-content-center">
          {professionalsData.map(({ name, profession, img }) => (
            <Col sm={6} md={4} lg={3}>
              <div
                className="professional-container"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  height: "300px",
                  backgroundSize: "cover",
                  zIndex: "-1",
                }}
              />
              <div className="d-flex justify-content-center">
                <div className="detail-text">
                  <h6 className="name">{name}</h6>
                  <p className="profession">{profession}</p>
                  <div className="contact-btns d-flex justify-content-center mt-3">
                    <CustomButton
                      bgcolor={PrimaryColor}
                      color="white"
                      padding="8px 8px"
                      width="130px"
                      type="submit"
                      title="Chat"
                      margin="auto"
                      icon={img1}
                      fontSize="16px"
                      // clicked={() => editHandler(content)}
                    />
                    <div className="d-flex ms-2">
                      <CustomButton
                        bgcolor={greenishColor}
                        color="white"
                        padding="8px 8px"
                        width="130px"
                        type="submit"
                        title="Call"
                        margin="auto"
                        icon={img2}
                        fontSize="16px"

                        // clicked={() => editHandler(content)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </ProfessionalStyled>
  );
};

export default Professionals;
