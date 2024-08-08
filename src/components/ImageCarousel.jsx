import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import { Container, Row, Col, Image } from "react-bootstrap";
// import {
//   socials1,
//   socials2,
//   socials3,
//   socials4,
//   socials5,
//   socials6,
// } from "../assets/socials_images/socials";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/ImageCarousel.css";

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../assets/socials_images', false, /\.(png|jpe?g|svg)$/));

const descriptions = [
  "", "", "E-Board members at the Zinnekens Mentor Event!", "", "", "",
];

const ImageCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: true,
    // pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide-item">
            <div className="image-wrapper">
              <Image src={src} className="image-style" />
              <div className="overlay">
                <div className="overlay-text">{descriptions[index] || ""}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
  // return (
  //   <div className="carousel-container">
  //     <Slider {...settings}>
  //       <div>
  //         <Image src={socials1} className="image-style" thumbnail />
  //       </div>
  //       <div>
  //         <Image src={socials2} className="image-style" thumbnail />
  //       </div>
  //       <div>
  //         <Image src={socials3} className="image-style" thumbnail />
  //         <div className="overlay">
  //             <div className="overlay-text">Picture of E-Board members at our Zinnekens <br/> Mentor Event!</div>
  //         </div>
  //       </div>
  //       <div>
  //         <Image src={socials4} className="image-style" thumbnail />
  //       </div>
  //       <div>
  //         <Image src={socials5} className="image-style" thumbnail />
  //       </div>
  //       <div>
  //         <Image src={socials6} className="image-style" thumbnail />
  //       </div>
  //     </Slider>
  //   </div>
  // );
};

export default ImageCarousel;