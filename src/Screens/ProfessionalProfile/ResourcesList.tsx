import { Card, Col, Row } from "react-bootstrap";
import { ResourcesListStyled } from "./style";
import property1 from "../../assets/Property Details/Property Details (1).png";
import property2 from "../../assets/Property Details/Property Details (2).png";
import property3 from "../../assets/Property Details/Property Details (3).png";
import profileIcon from "../../assets/icons/ic_professional_meet_peron.svg";
import blogIcon from "../../assets/icons/ic_blog_tag.svg";
import IconWithText from "../../Components/IconText/Index";

type resoucesListTypes = {
  md: number;
  sm: number;
};

const ResourcesList: React.FC<resoucesListTypes> = ({ md, sm }) => {
  const properties = [property1, property2, property3];
  return (
    <ResourcesListStyled>
      <Row
        className={`${properties.length % 2 !== 0 && "justify-content-center"}`}
      >
        {properties.map((img, index) => (
          <Col key={index} sm={sm} md={md}>
            <Card>
              <Card.Img variant="top" src={img} alt={img} />
              <Card.Body>
                <Card.Title>
                  How to Choose the Right Franchise for You
                </Card.Title>
                <IconWithText marginTop="18px" />
                <Card.Text>
                  I neglect my talents Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts. Separated they live in Bookmarksgrove right at
                  the coast of the Semantics, a large language ocean. A small
                  river named Duden flows by...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </ResourcesListStyled>
  );
};

export default ResourcesList;
