import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstImg from "../img/one.jpg";
import secondImg from "../img/two.jpg";
import thirdImg from "../img/three.jpg";

const Slide = () => (
  <Carousel className="carou">
    <Carousel.Item interval={8000}>
      <img
        className="d-block w-100 photo-carousel img-responsive"
        src={firstImg}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="title">Social + Environmental Justice in Engineering</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={8000}>
      <img
        className="d-block w-100 photo-carousel img-responsive"
        src={secondImg}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3 className="title">Social </h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 photo-carousel img-responsive"
        src={thirdImg}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3 className="title">Environmental Justice in Engineering</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
export default Slide;
