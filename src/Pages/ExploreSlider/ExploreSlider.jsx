import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../assets/banner.png';
import "../ExploreSlider/ExploreSlider.css"


const ExploreSlider = props => {
  return (
    <>
    <Carousel controls={false} className="banner-slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default ExploreSlider