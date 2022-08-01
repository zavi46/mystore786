import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'

function CarouselSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-height-of-carousel"
          src="imges/slide1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 style={{ color: 'black'}} >Plane and Cool Hoodie</h2>
          <p style={{ color: 'black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to="/shop" className="comman-btn">Shop Now</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-height-of-carousel"
          src="imges/slide2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 style={{ color: 'black'}}>Comfortable T-shirt</h2>
          <p style={{ color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/shop" className="comman-btn">Shop Now</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-height-of-carousel"
          src="imges/slide3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 style={{ color: 'black'}} >Plane Orange T-shirt</h2>
          <p style={{ color: 'black'}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Link to="/shop" className="comman-btn">Shop Now</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;