import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from './images/ruba.jpeg';
import image2 from './images/nourcooking.jpeg';
import image3 from './images/lynnbasma.jpeg';
import image4 from './images/nouraatkiosk.jpeg';
import image5 from './images/lynnfoodblessed.jpeg';
import image6 from './images/nour.jpeg';
import image7 from './images/nouracake.jpeg';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const images = [
    image3,
    image2,
    image1,
    image4,
    image5,
    image6,
    image7,
  ];

  return (
    <div className="image-carousel">
      <Swiper
        modules={[Navigation, Pagination]} // Include Navigation module here
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;