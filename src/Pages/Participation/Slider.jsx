import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from "./imgs/Rectangle 88.png"; import img3 from "./imgs/Rectangle 88 (2).png"; // ПРОИМЕНОВАТЬ КАЖДУЮ КАРТИНКУ
import img2 from "./imgs/Rectangle 88 (1).png";  import img4 from "./imgs/Rectangle 88 (3).png";
import img5 from "./imgs/Rectangle 284 (8).png";  import img7 from "./imgs/Rectangle 284 (10).png";
import img6 from "./imgs/Rectangle 284 (9).png";  import img8 from "./imgs/Rectangle 284 (11).png";
import img10 from "./imgs/Rectangle 59 (1).png";  import right from "./imgs/slider-right.svg"
import img11 from "./imgs/Rectangle 59 (2).png";  import left from "./imgs/slider-left.svg"

import './styles/slider.scss';
import axios from 'axios';
import { URL_API } from '../../Futures/URLAPI';

const slides = [
  { id: 1, title: 'Преимущества для сообщества', img: img5 },
  { id: 2, title: 'Преимущества для сообщества', img: img5 },
  { id: 3, title: 'Преимущества для сообщества', img: img6 },
  { id: 4, title: 'Преимущества для сообщества', img: img6 },
  { id: 5, title: 'Преимущества для сообщества', img: img7 },
  { id: 6, title: 'Преимущества для сообщества', img: img7 },
  { id: 7, title: 'Преимущества для сообщества', img: img8 },
  { id: 8, title: 'Преимущества для сообщества', img: img8 },
  { id: 10, title: 'Преимущества для сообщества', img: img5 },
  { id: 11, title: 'Преимущества для сообщества', img: img5 },
  { id: 12, title: 'Преимущества для сообщества', img: img6 },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const slideLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideRight = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };


  useEffect(() =>{
    axios
    .get(`${URL_API}api/v1/projects/awards/"`)
  })
  return (
    <div className="container ">
      <div className="btn-block">
        <button className="slider-button" onClick={slideLeft}>
          &lt;
        </button>
        <button className="slider-button" onClick={slideRight}>
          &gt;
        </button>
      </div>

      <div className="slider-container">
        <Swiper
          spaceBetween={20}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          breakpoints={{
            260: { slidesPerView: 1, spaceBetween: 40 },

            360: { slidesPerView: 1, spaceBetween: 20 },

            480: { slidesPerView: 1.4, spaceBetween: 20 },
            570: { slidesPerView: 1.6, spaceBetween: 20 },
            770: { slidesPerView: 2.3, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1220: {slidesPerView: 3.5, spaceBetween: 20},
            1420: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-item">
                <img src={slide.img} alt={slide.title} />
                <p className="slide-item-p">{slide.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="dots-container">
        {Array(Math.ceil(slides.length / 4))
          .fill(0)
          .map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`dot ${
                currentIndex >= dotIndex * 4 && currentIndex < (dotIndex + 1) * 4 ? 'active' : ''
              }`}
              onClick={() => swiperRef.current && swiperRef.current.slideToLoop(dotIndex * 4)}
            />
          ))}
          
      </div>
    </div>
  );
};

export default Slider;
