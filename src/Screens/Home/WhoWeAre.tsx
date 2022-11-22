import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SecondaryHeading, TertiraryHeadingMini, UnderlineRed } from '../../Components/GlobalStyle'
import { WhoWeAreStyled } from './style';
import whoWeAreImg from '../../assets/Image/ic_who_we_are.png';

const WhoWeAre = () => {
  return (
    <WhoWeAreStyled>
      <SecondaryHeading className='text-center'>Who We Are</SecondaryHeading>
      <TertiraryHeadingMini className='text-center'>Know More About Us</TertiraryHeadingMini>
      <div>
        <UnderlineRed />
        {/* <BlackDot/> */}
      </div>
      <Container>
        <Row className='inner-container'>
          <Col md={6}>
            <img src={whoWeAreImg} alt="who-we-are" />
          </Col>
          <Col md={6} className='mt-3 mt-md-0'>
            <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.
              <br/>
              <br/>
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz.
              <br/>
              <br/>
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. 
            </p>
          </Col>
        </Row>
      </Container>
    </WhoWeAreStyled>
  )
}

export default WhoWeAre