import { Card, Col, Row } from "react-bootstrap";
import { ResourcesListStyled } from "./style";
import property1 from "../../assets/Property Details/Property Details (1).png";
import property2 from "../../assets/Property Details/Property Details (2).png";
import property3 from "../../assets/Property Details/Property Details (3).png";
import IconWithText from "../../Components/IconText/Index";
import user from "../../assets/icons/ic_blog_user.svg";
import calender from "../../assets/icons/ic_blog_calender.svg";

type resoucesListTypes = {
  md: number;
  sm: number;
};

const ResourcesList: React.FC<resoucesListTypes> = ({ md, sm }) => {
  const properties = [property1, property2, property3];
  return (
    <ResourcesListStyled>
      <Row>
        {properties.map((img, index) => (
          <Col key={index} sm={sm} md={md}>
            <Card>
              <Card.Img variant="top" src={img} alt={img} />
              <Card.Body>
                <Card.Title>
                  How to Choose the Right Franchise for You
                </Card.Title>
                <div className="d-flex justify-content-between">
                  <IconWithText
                    icon={calender}
                    title="August 20, 2021"
                    marginTop="10px"
                  />
                  <IconWithText
                    icon={user}
                    title="John Smith"
                    marginTop="10px"
                  />
                </div>
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
