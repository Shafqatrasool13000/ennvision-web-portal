import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import post1 from '../../assets/Property/Property (1).png';
import post2 from '../../assets/Property/Property (2).png';
import post3 from '../../assets/Property/Property (3).png';
import post4 from '../../assets/Property/Property (4).png';
import post5 from '../../assets/Property/Property (5).png';
import post6 from '../../assets/Property/Property (6).png';
import post7 from '../../assets/Property/Property (7).png';
import post8 from '../../assets/Property/Property (8).png';
import { PostsStyled } from './style';

const PostList = () => {
  const navigate=useNavigate();

 
  return (
    <PostsStyled>
    <Row>
      {
     [post1,post2,post3,post4,post5,post6,post7,post8].map((img,index)=>(
      <Col key={index} lg={3} md={4} sm={2} >
      <Card onClick={()=>navigate(`/post-details/${index}`)}>
      <Card.Img variant="top" src={img} className='position-relative' alt={img} />
      <Card.Body  className='position-absolute bottom-0'>
        <Card.Title>831 Maidstone Drive Bungalow</Card.Title>
        <Card.Text>
        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! ...
        </Card.Text>
      </Card.Body>
        </Card>
      </Col>
     ))
      }
     
    </Row>
    </PostsStyled>
  )
}

export default PostList