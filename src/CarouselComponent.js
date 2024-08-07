import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselComponent.css'; // Import the CSS file for carousel styling
import image1 from './images/ruba.jpeg'
import image2 from './images/nourcooking.jpeg'
import image3 from './images/lynnbasma.jpeg'
import image4 from './images/nouraatkiosk.jpeg'
import image5 from './images/lynnfoodblessed.jpeg'
import image6 from './images/nour.jpeg'
import image7 from './images/nouracake.jpeg'
const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true // Set to true if you want to show arrows
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            className="carousel-image"
            src={image3}
            alt="Slide 1"
          />
         
        </div>
        <div>
          <img
            className="carousel-image"
            src={image2}
            alt="Slide 2"
          />
        
        </div>
        <div>
          <img
            className="carousel-image"
            src={image1}
            alt="Slide 2"
          />
        
        </div>
        <div>
          <img
            className="carousel-image"
            src={image4}
            alt="Slide 2"
          />
         
        </div>
        <div>
          <img
            className="carousel-image"
            src={image5}
            alt="Slide 2"
          />
          
        </div>
        <div>
          <img
            className="carousel-image"
            src={image6}
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            className="carousel-image"
            src={image7}
            alt="Slide 2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
