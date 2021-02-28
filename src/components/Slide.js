import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slide = () => (
  <Carousel className="carou  ">
    <Carousel.Item interval={8000}>
      <img
        className="w-100 photo-carousel img-responsive "
        src="https://sjeiwebsitemedia.blob.core.windows.net/photos/train.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="title  ">
          Social + Environmental Justice in Engineering
        </h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={8000}>
      <img
        className="w-100 photo-carousel img-responsive  "
        src="https://sjeiwebsitemedia.blob.core.windows.net/photos/FullSizeRenderBenFranklinBridge.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3 className="title">Social </h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="w-100 photo-carousel img-responsive"
        src="https://sjeiwebsitemedia.blob.core.windows.net/photos/riverfoliage.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3 className="title">Environmental Justice in Engineering</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
export default Slide;
