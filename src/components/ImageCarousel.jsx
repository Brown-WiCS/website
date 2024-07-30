import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  socials1,
  socials2,
  socials3,
  socials4,
  socials5,
  socials6,
} from "../assets/socials_images/socials";
import "../styles/ImageCarousel.css";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <Image src={socials1} className="image-style" thumbnail />
        </div>
        <div>
          <Image src={socials2} className="image-style" thumbnail />
        </div>
        <div>
          <Image src={socials3} className="image-style" thumbnail />
        </div>
        <div>
          <Image src={socials4} className="image-style" thumbnail />
        </div>
        <div>
          <Image src={socials5} className="image-style" thumbnail />
        </div>
        <div>
          <Image src={socials6} className="image-style" thumbnail />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;