import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './profile.css';


function ProfileExample() {
  return (
    <Container className='contain-text'> 
      <Row>
        <Col>
        <Card style={{ width: '20rem',borderRadius:'20px',marginLeft:'100px',boxShadow:'10px 20px 30px'}}>
      <Card.Img variant="top" src="https://www.interakt.shop/wp-content/uploads/2024/06/Increase-WhatsApp-Messaging-Sending-Limit.png"  height={'200'} />
      <Image src="https://thinglabs.io/wp-content/uploads/qsuer9xyoy-1.jpg" roundedCircle width={'130'} height={'150'} style={{marginTop:'-85px', marginLeft:'95px'}}/>
      <Card.Body>
        <Card.Title>Whatsapp</Card.Title>
        <Card.Text>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum pulvinar netus sed interdum fusce etiam ut penatibus enim. Mus aliquam. 
        </Card.Text>
        <Button variant="primary">Download app</Button>
      </Card.Body>
    </Card>
    </Col>
        <Col>
        <Card style={{ width: '20rem',borderRadius:'20px',marginLeft:'10px' ,boxShadow:'10px 20px 30px'}}>
      <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20231231/pngtree-the-alluring-blend-of-gradient-textures-instagram-story-edition-image_13907161.png"  height={'200'}/>
      <Col xs={6} md={4}>
          <Image src="https://i.pinimg.com/736x/0b/5c/72/0b5c7260f3b871d691e55df882870007.jpg" roundedCircle width={'130'} height={'150'} style={{marginTop:'-85px', marginLeft:'100px'}}/>
        </Col>
      <Card.Body>
        <Card.Title>Instagram</Card.Title>
        <Card.Text>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum pulvinar netus sed interdum fusce etiam ut penatibus enim. Mus aliquam. 
        </Card.Text>
        <Button variant="primary">Download app</Button>
      </Card.Body>
    </Card>
    </Col>
        <Col>
        <Card style={{ width: '20rem',borderRadius:'20px', marginLeft:'-80px',boxShadow:'10px 20px 30px'}}>
      <Card.Img variant="top" src="https://w0.peakpx.com/wallpaper/776/808/HD-wallpaper-snapchat-yellow-logo-yellow-brickwall-snapchat-logo-brands-snapchat-neon-logo-snapchat-thumbnail.jpg" height={'200'}/>
      <Image src="https://www.shutterstock.com/image-vector/collection-different-snapchat-icons-social-260nw-2280923635.jpg" roundedCircle width={'130'} height={'150'} style={{marginTop:'-85px', marginLeft:'100px'}}/>
      <Card.Body>
        <Card.Title>Snapchat</Card.Title>
        <Card.Text>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum pulvinar netus sed interdum fusce etiam ut penatibus enim. Mus aliquam. 
        </Card.Text>
        <Button variant="primary">Download app</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  );

  
}

export default ProfileExample;