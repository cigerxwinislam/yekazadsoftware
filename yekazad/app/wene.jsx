// Bismillahirahmanirahim



import Carousel from 'react-bootstrap/Carousel';
import KitchenSinkExample from './card';
import { Row,Col } from 'react-bootstrap';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>



<Row>


    <Col>
    
    <KitchenSinkExample wene nav="Web siteleri"/>

    </Col>

    <Col>
    
    <KitchenSinkExample wene nav="Web siteleri"/>

    </Col>









    <Col>
    
    <KitchenSinkExample wene nav="Web siteleri"/>

    </Col>
</Row>


        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>



      <Row>


<Col>

<KitchenSinkExample wene nav="Web siteleri"/>

</Col>

<Col>

<KitchenSinkExample wene nav="Web siteleri"/>

</Col>









<Col>

<KitchenSinkExample wene nav="Web siteleri"/>

</Col>
</Row>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>




      <Row>


<Col>

<KitchenSinkExample wene nav="Web siteleri"/>

</Col>

<Col>

<KitchenSinkExample wene nav="Web siteleri"/>

</Col>









<Col>

<KitchenSinkExample wene nav="Web siteleri"/>

</Col>
</Row>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;