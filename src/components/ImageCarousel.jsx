import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/portraits/afeinberg.jpg';
import image2 from '../assets/portraits/kli.jpg';
import "../styles/ImageCarousel.css";

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <div>
          <img src={image1} alt="Slide 1" />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
          <p className="legend">Slide 2</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;